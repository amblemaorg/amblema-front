import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  TeacherCoevaluationService,
  CoevaluationDetail,
  CoevaluationOpenRequest,
  CoevaluationItemResult,
} from '../../../../services/peca/teacher-coevaluation.service';

declare var $: any;

interface ItemRow {
  number: number;
  title: string;
  question: string;
  teacher: number | null;
  coordinator: number | null;
  average: number | null;
}

@Component({
  selector: 'peca-teacher-coevaluation-modal',
  templateUrl: './teacher-coevaluation-modal.component.html',
  styleUrls: ['./teacher-coevaluation-modal.component.scss'],
})
export class TeacherCoevaluationModalComponent implements OnInit, OnDestroy {
  readonly modalId = 'teacher-coevaluation-modal';

  request: CoevaluationOpenRequest | null = null;
  detail: CoevaluationDetail | null = null;
  loading = false;
  loadError = false;
  saving = false;
  sending = false;
  confirmSave = false;
  confirmResend = false;
  showScale = false;

  scoreOptions: number[] = [0, 1, 2, 3, 4, 5];
  // Puntajes que el coordinador va marcando (índice 0 = ítem 1)
  coordinatorDraft: (number | null)[] = [];
  groups: { code: string; name: string; items: ItemRow[] }[] = [];

  private subscription = new Subscription();
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private coevaluationService: TeacherCoevaluationService,
    private toastr: ToastrService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.subscription.add(
      this.coevaluationService.open$.subscribe((request) => this.open(request))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.isBrowser) {
      $(`#${this.modalId}`).modal('hide');
    }
  }

  open(request: CoevaluationOpenRequest): void {
    this.request = request;
    this.detail = null;
    this.loadError = false;
    this.confirmSave = false;
    this.confirmResend = false;
    this.showScale = false;
    if (this.isBrowser) {
      $(`#${this.modalId}`).modal('show');
    }
    this.load();
  }

  load(): void {
    if (!this.request) {
      return;
    }
    this.loading = true;
    this.coevaluationService.getDetail(this.request.pecaId, this.request.teacherId).subscribe(
      (detail) => {
        this.loading = false;
        this.setDetail(detail);
      },
      (err) => {
        this.loading = false;
        this.loadError = true;
        this.toastr.error(this.errorMessage(err, 'No se pudo cargar la coevaluación'), 'Error');
      }
    );
  }

  private setDetail(detail: CoevaluationDetail): void {
    this.detail = detail;
    this.coordinatorDraft = detail.items.map((item) => item.coordinator);
    const byNumber: { [n: number]: CoevaluationItemResult } = {};
    detail.items.forEach((item) => (byNumber[item.number] = item));
    this.groups = detail.instrument.dimensions.map((dimension) => ({
      code: dimension.code,
      name: dimension.name,
      items: detail.instrument.items
        .filter((item) => item.dimension === dimension.code)
        .map((item) => ({
          number: item.number,
          title: item.title,
          question: item.question,
          teacher: byNumber[item.number] ? byNumber[item.number].teacher : null,
          coordinator: byNumber[item.number] ? byNumber[item.number].coordinator : null,
          average: byNumber[item.number] ? byNumber[item.number].average : null,
        })),
    }));
  }

  // ------------------------------------------------------------- estado

  get isCompleted(): boolean {
    return !!this.detail && this.detail.status === 'completed';
  }

  get coordinatorSubmitted(): boolean {
    return !!this.detail && !!this.detail.coordinatorSubmittedAt;
  }

  get teacherSubmitted(): boolean {
    return !!this.detail && !!this.detail.teacherSubmittedAt;
  }

  get pendingItems(): number {
    return this.coordinatorDraft.filter((score) => score === null || score === undefined).length;
  }

  get draftTotal(): number {
    return this.coordinatorDraft.reduce((sum, score) => sum + (score || 0), 0);
  }

  get answeredItems(): number {
    return this.coordinatorDraft.length - this.pendingItems;
  }

  get progressPercent(): number {
    const count = this.coordinatorDraft.length;
    return count ? Math.round((this.answeredItems / count) * 100) : 0;
  }

  /** Paso del coordinador en la línea de estatus. */
  get coordinatorStep(): 'done' | 'active' | 'pending' {
    if (this.coordinatorSubmitted) {
      return 'done';
    }
    return this.detail && this.detail.canEvaluate ? 'active' : 'pending';
  }

  /** Puntajes del coordinador ya registrados o en borrador (para el contador por dimensión). */
  groupAnswered(group: { items: ItemRow[] }): number {
    return group.items.filter((item) => {
      const score = this.coordinatorSubmitted ? item.coordinator : this.coordinatorDraft[item.number - 1];
      return score !== null && score !== undefined;
    }).length;
  }

  /** Subtotal acordado por dimensión: suma de los promedios de sus ítems (solo con la coevaluación completa). */
  groupSubtotal(group: { items: ItemRow[] }): number {
    return group.items.reduce((sum, item) => sum + (item.average || 0), 0);
  }

  groupMax(group: { items: ItemRow[] }): number {
    return group.items.length * (this.detail ? this.detail.instrument.maxScore : 5);
  }

  // Anillo SVG del resultado (r = 34).
  readonly ringCircumference = 2 * Math.PI * 34;

  get ringOffset(): number {
    const percentage = this.detail && this.detail.percentage ? this.detail.percentage : 0;
    return this.ringCircumference * (1 - Math.min(percentage, 100) / 100);
  }

  teacherFullName(): string {
    if (!this.detail) {
      return '';
    }
    return `${this.detail.teacher.firstName || ''} ${this.detail.teacher.lastName || ''}`.trim();
  }

  cardLabel(): string {
    if (!this.detail || !this.detail.teacher.cardId) {
      return '';
    }
    return `${this.detail.teacher.cardType === '2' ? 'E' : 'V'}-${this.detail.teacher.cardId}`;
  }

  formatNumber(value: number | null): string {
    if (value === null || value === undefined) {
      return '—';
    }
    return Number.isInteger(value) ? `${value}` : value.toFixed(2).replace(/\.?0+$/, '');
  }

  /**
   * Promedio a mostrar por ítem: el del backend si ya existe; mientras el coordinador
   * puntúa, se anticipa solo si el docente ya puntuó (misma regla del backend:
   * parte entera de (docente + coordinador) / 2). En otro caso, null ("—").
   */
  itemAverage(item: ItemRow): number | null {
    if (item.average !== null && item.average !== undefined) {
      return item.average;
    }
    const draft = this.coordinatorDraft[item.number - 1];
    if (item.teacher === null || item.teacher === undefined || draft === null || draft === undefined) {
      return null;
    }
    return Math.floor((item.teacher + draft) / 2);
  }

  // ---------------------------------------------------- coordinador

  setScore(itemNumber: number, score: number): void {
    if (!this.detail || !this.detail.canEvaluate || this.saving) {
      return;
    }
    this.coordinatorDraft[itemNumber - 1] = score;
    this.confirmSave = false;
  }

  askSave(): void {
    if (this.pendingItems > 0) {
      this.toastr.warning(`Faltan ${this.pendingItems} ítem(s) por puntuar.`, 'Atención');
      return;
    }
    this.confirmSave = true;
  }

  save(): void {
    if (!this.detail || !this.request || this.saving || this.pendingItems > 0) {
      return;
    }
    this.saving = true;
    const payload = {
      scores: this.coordinatorDraft.map((score, index) => ({ number: index + 1, score })),
    };
    this.coevaluationService
      .saveCoordinator(this.request.pecaId, this.request.teacherId, payload)
      .subscribe(
        (detail) => {
          this.saving = false;
          this.confirmSave = false;
          this.setDetail(detail);
          this.coevaluationService.changed$.next(this.request.teacherId);
          this.toastr.success('Coevaluación del coordinador registrada', 'Éxito');
        },
        (err) => {
          this.saving = false;
          this.confirmSave = false;
          this.toastr.error(this.errorMessage(err, 'No se pudo guardar la coevaluación'), 'Error');
          if (err.status === 409) {
            this.load();
          }
        }
      );
  }

  // ------------------------------------------------------- enlace

  askSend(): void {
    if (this.detail && this.detail.emailSentAt) {
      this.confirmResend = true;
    } else {
      this.send();
    }
  }

  send(): void {
    if (!this.detail || !this.request || this.sending) {
      return;
    }
    this.sending = true;
    this.coevaluationService.sendLink(this.request.pecaId, this.request.teacherId).subscribe(
      (detail) => {
        this.sending = false;
        this.confirmResend = false;
        this.setDetail(detail);
        this.coevaluationService.changed$.next(this.request.teacherId);
        this.toastr.success(`Enlace enviado a ${detail.emailSentTo}`, 'Éxito');
      },
      (err) => {
        this.sending = false;
        this.confirmResend = false;
        this.toastr.error(this.errorMessage(err, 'No se pudo enviar el enlace'), 'Error');
        if (err.status === 409) {
          this.load();
        }
      }
    );
  }

  private errorMessage(err: any, fallback: string): string {
    if (err && err.status === 403) {
      return 'No tiene permiso para coevaluar a este docente.';
    }
    return err && err.error && err.error.message ? err.error.message : fallback;
  }
}

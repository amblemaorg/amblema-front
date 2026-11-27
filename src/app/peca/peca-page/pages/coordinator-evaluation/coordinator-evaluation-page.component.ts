import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PecaState } from '../../../../store/states/peca/peca.state';
import {
  CoordinatorEvaluationService,
  CoordinatorEvaluationDetail,
  CoordinatorEvaluationAnswer,
  CoordinatorEvaluationOptionCode,
} from '../../../../services/peca/coordinator-evaluation.service';

@Component({
  selector: 'peca-coordinator-evaluation-page',
  templateUrl: './coordinator-evaluation-page.component.html',
  styleUrls: ['./coordinator-evaluation-page.component.scss'],
})
export class CoordinatorEvaluationPageComponent implements OnInit, OnDestroy {
  @Select(PecaState.getActivePecaContent) pecaContent$: Observable<any>;

  pecaId: string | null = null;
  canAccess = false;
  permissionsChecked = false;

  loading = false;
  loadError = false;
  saving = false;
  confirmSave = false;

  detail: CoordinatorEvaluationDetail | null = null;
  draftAnswers: { [questionNumber: number]: CoordinatorEvaluationOptionCode } = {};

  private pecaSub: Subscription | null = null;
  private loadSub: Subscription | null = null;
  private saveSub: Subscription | null = null;

  constructor(
    private evaluationService: CoordinatorEvaluationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.pecaSub = this.pecaContent$.subscribe(
      (peca) => {
        if (!peca || !peca.user) {
          return;
        }

        const permissions: string[] = Array.isArray(peca.user.permissions)
          ? peca.user.permissions
          : [];
        const nextCanAccess = permissions.includes('teacher_coevaluation');
        const nextPecaId =
          peca.activePecaContent && peca.activePecaContent.id
            ? peca.activePecaContent.id
            : null;

        this.permissionsChecked = true;
        this.canAccess = nextCanAccess;

        if (!nextCanAccess) {
          this.cancelRequests();
          this.pecaId = null;
          this.detail = null;
          this.draftAnswers = {};
          this.loading = false;
          this.loadError = false;
          this.confirmSave = false;
          return;
        }

        if (!nextPecaId) {
          return;
        }

        if (nextPecaId !== this.pecaId) {
          this.pecaId = nextPecaId;
          this.confirmSave = false;
          this.detail = null;
          this.draftAnswers = {};
          this.load();
        } else if (!this.detail && !this.loading && !this.loadError) {
          this.load();
        }
      },
      (error) => console.error(error)
    );
  }

  ngOnDestroy(): void {
    if (this.pecaSub) {
      this.pecaSub.unsubscribe();
      this.pecaSub = null;
    }
    this.cancelRequests();
  }

  private cancelRequests(): void {
    if (this.loadSub) {
      this.loadSub.unsubscribe();
      this.loadSub = null;
    }
    if (this.saveSub) {
      this.saveSub.unsubscribe();
      this.saveSub = null;
    }
  }

  load(): void {
    if (!this.pecaId || !this.canAccess) {
      return;
    }
    if (this.loadSub) {
      this.loadSub.unsubscribe();
    }
    const targetPecaId = this.pecaId;
    this.loading = true;
    this.loadError = false;

    this.loadSub = this.evaluationService.getEvaluation(targetPecaId).subscribe(
      (detail) => {
        if (targetPecaId !== this.pecaId) {
          return;
        }
        this.loading = false;
        this.setDetail(detail);
      },
      (err) => {
        if (targetPecaId !== this.pecaId) {
          return;
        }
        this.loading = false;
        this.loadError = true;
        this.toastr.error(
          this.errorMessage(err, 'No se pudo cargar la valoración del coordinador'),
          'Error'
        );
      }
    );
  }

  private setDetail(detail: CoordinatorEvaluationDetail): void {
    this.detail = detail;
    this.draftAnswers = {};
    (detail.answers || []).forEach((answer) => {
      if (answer.option) {
        this.draftAnswers[answer.number] = answer.option;
      }
    });
  }

  get isCompleted(): boolean {
    return !!this.detail && this.detail.status === 'completed';
  }

  get showScores(): boolean {
    return !!this.detail && !!this.detail.showScores;
  }

  get isReadOnlyPending(): boolean {
    return !!this.detail && !this.isCompleted && !this.detail.canEvaluate;
  }

  get totalQuestions(): number {
    return this.detail && this.detail.instrument && this.detail.instrument.questions
      ? this.detail.instrument.questions.length
      : 0;
  }

  get answeredCount(): number {
    if (!this.detail || !this.detail.instrument || !this.detail.instrument.questions) {
      return 0;
    }
    return this.detail.instrument.questions.filter(
      (q) => !!this.draftAnswers[q.number]
    ).length;
  }

  get allAnswered(): boolean {
    return this.totalQuestions > 0 && this.answeredCount === this.totalQuestions;
  }

  get headerStatusText(): string {
    if (this.loading && !this.detail) {
      return 'Cargando...';
    }
    if (this.loadError && !this.detail) {
      return 'Sin conexión';
    }
    if (!this.detail) {
      return 'Pendiente';
    }
    if (this.isCompleted) {
      if (this.showScores) {
        const total = this.formatNumber(this.detail.totalScore);
        const maxTotal = this.formatNumber(this.detail.instrument.maxTotal);
        return `Completada · ${total} / ${maxTotal}`;
      }
      return 'Completada';
    }
    return this.detail.statusLabel || 'Pendiente';
  }

  selectOption(questionNumber: number, optionCode: CoordinatorEvaluationOptionCode): void {
    if (!this.detail || !this.detail.canEvaluate || this.saving) {
      return;
    }
    this.draftAnswers[questionNumber] = optionCode;
    this.confirmSave = false;
  }

  answerFor(questionNumber: number): CoordinatorEvaluationAnswer | null {
    if (!this.detail || !this.detail.answers) {
      return null;
    }
    return this.detail.answers.find((a) => a.number === questionNumber) || null;
  }

  askSave(): void {
    if (!this.allAnswered) {
      const remaining = this.totalQuestions - this.answeredCount;
      this.toastr.warning(
        `Faltan ${remaining} pregunta(s) por responder.`,
        'Atención'
      );
      return;
    }
    this.confirmSave = true;
  }

  save(): void {
    if (
      !this.detail ||
      !this.pecaId ||
      !this.detail.canEvaluate ||
      this.saving ||
      !this.allAnswered
    ) {
      return;
    }
    this.saving = true;
    const payload = {
      answers: this.detail.instrument.questions.map((q) => ({
        number: q.number,
        option: this.draftAnswers[q.number],
      })),
    };

    if (this.saveSub) {
      this.saveSub.unsubscribe();
    }
    const targetPecaId = this.pecaId;

    this.saveSub = this.evaluationService
      .submitEvaluation(targetPecaId, payload)
      .subscribe(
        (detail) => {
          this.saving = false;
          this.confirmSave = false;
          this.setDetail(detail);
          this.toastr.success('Valoración del coordinador registrada', 'Éxito');
        },
        (err) => {
          this.saving = false;
          this.confirmSave = false;
          this.toastr.error(
            this.errorMessage(err, 'No se pudo guardar la valoración del coordinador'),
            'Error'
          );
          if (err && err.status === 409) {
            this.load();
          }
        }
      );
  }

  formatNumber(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '—';
    }
    return Number.isInteger(value)
      ? `${value}`
      : value.toFixed(2).replace(/\.?0+$/, '');
  }

  private errorMessage(err: any, fallback: string): string {
    if (err && err.status === 403) {
      return 'No tiene permiso para registrar la valoración del coordinador.';
    }
    if (err && err.status === 409) {
      return 'La valoración del coordinador ya fue registrada para este año escolar.';
    }
    return err && err.error && err.error.message ? err.error.message : fallback;
  }
}

import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { SetIsLoadingPage } from 'src/app/store/actions/web/web.actions';
import { SeoService } from 'src/app/services/seo.service';
import {
  TeacherCoevaluationService,
  CoevaluationPublic,
} from 'src/app/services/peca/teacher-coevaluation.service';

interface ItemRow {
  number: number;
  title: string;
  question: string;
}

/**
 * Enlace público del docente (/coevaluacion/:token): registra su lado de la
 * coevaluación una sola vez. Nunca recibe los puntajes del coordinador.
 */
@Component({
  selector: 'app-teacher-coevaluation',
  templateUrl: './teacher-coevaluation.component.html',
  styleUrls: ['./teacher-coevaluation.component.scss'],
})
export class TeacherCoevaluationComponent implements OnInit {
  token = '';
  loading = true;
  notFound = false;
  submitting = false;
  submitted = false;
  confirming = false;

  data: CoevaluationPublic | null = null;
  groups: { code: string; name: string; items: ItemRow[] }[] = [];
  scores: (number | null)[] = [];
  scoreOptions: number[] = [0, 1, 2, 3, 4, 5];

  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private route: ActivatedRoute,
    private store: Store,
    private toastr: ToastrService,
    private seo: SeoService,
    private coevaluationService: TeacherCoevaluationService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.seo.setPage({
      title: 'Coevaluación docente | AmbLeMa',
      description: 'Instrumento de coevaluación Docente AmbLeMa HQS.',
      path: '/coevaluacion',
      noindex: true,
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    // El token solo se usa en el navegador (no en SSR/prerender).
    if (!this.isBrowser) {
      return;
    }
    if (!this.token) {
      this.finishLoading(true);
      return;
    }
    this.coevaluationService.getPublic(this.token).subscribe(
      (data) => {
        this.data = data;
        this.scores = data.instrument.items.map(() => null);
        this.groups = data.instrument.dimensions.map((dimension) => ({
          code: dimension.code,
          name: dimension.name,
          items: data.instrument.items
            .filter((item) => item.dimension === dimension.code)
            .map((item) => ({ number: item.number, title: item.title, question: item.question })),
        }));
        this.finishLoading(false);
      },
      () => this.finishLoading(true)
    );
  }

  private finishLoading(notFound: boolean): void {
    this.loading = false;
    this.notFound = notFound;
    this.store.dispatch([new SetIsLoadingPage(false)]);
  }

  get teacherName(): string {
    return this.data
      ? `${this.data.teacher.firstName || ''} ${this.data.teacher.lastName || ''}`.trim()
      : '';
  }

  get pendingItems(): number {
    return this.scores.filter((score) => score === null).length;
  }

  get total(): number {
    return this.scores.reduce((sum, score) => sum + (score || 0), 0);
  }

  setScore(itemNumber: number, score: number): void {
    if (this.submitting || this.submitted) {
      return;
    }
    this.scores[itemNumber - 1] = score;
    this.confirming = false;
  }

  askSubmit(): void {
    if (this.pendingItems > 0) {
      this.toastr.warning(`Faltan ${this.pendingItems} pregunta(s) por puntuar.`, 'Atención');
      return;
    }
    this.confirming = true;
  }

  submit(): void {
    if (this.submitting || this.submitted || this.pendingItems > 0) {
      return;
    }
    this.submitting = true;
    const payload = {
      scores: this.scores.map((score, index) => ({ number: index + 1, score })),
    };
    this.coevaluationService.submitPublic(this.token, payload).subscribe(
      () => {
        this.submitting = false;
        this.confirming = false;
        this.submitted = true;
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      },
      (err) => {
        this.submitting = false;
        this.confirming = false;
        if (err.status === 404) {
          this.notFound = true;
          return;
        }
        const msg = err.error && err.error.message ? err.error.message : 'No se pudo registrar la coevaluación';
        this.toastr.error(msg, 'Error');
      }
    );
  }
}

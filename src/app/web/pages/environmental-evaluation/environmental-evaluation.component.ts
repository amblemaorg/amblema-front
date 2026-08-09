import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { SetIsLoadingPage } from 'src/app/store/actions/web/web.actions';
import { environment } from 'src/environments/environment';

interface CriterionItem {
  key: string;
  label: string;
  applies: boolean;
  value: number | null;
}

@Component({
  selector: 'app-environmental-evaluation',
  templateUrl: './environmental-evaluation.component.html',
  styleUrls: ['./environmental-evaluation.component.scss']
})
export class EnvironmentalEvaluationComponent implements OnInit {
  token: string = '';
  loading: boolean = true;
  submitting: boolean = false;
  notFound: boolean = false;
  hasEvaluated: boolean = false;
  alreadyEvaluatedMessage: string = '';

  evaluator: any = null;
  school: any = null;

  criteriaList: CriterionItem[] = [
    { key: 'cleanlinessAndCareOfSpaces', label: 'Limpieza y cuidado de los espacios', applies: true, value: 0 },
    { key: 'wasteManagement', label: 'Gestión de aprovechamiento de los residuos', applies: true, value: 0 },
    { key: 'biodiversityConservation', label: 'Conservación de la biodiversidad', applies: true, value: 0 },
    { key: 'waterUse', label: 'Aprovechamiento del agua', applies: true, value: 0 },
    { key: 'communityRelations', label: 'Relación con la comunidad', applies: true, value: 0 }
  ];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastr: ToastrService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    if (this.token) {
      this.loadEvaluationData();
    } else {
      this.loading = false;
      this.notFound = true;
      this.store.dispatch([new SetIsLoadingPage(false)]);
    }
  }

  loadEvaluationData(): void {
    this.loading = true;
    this.http.get<any>(`${environment.baseUrl}environmental-diagnostics/evaluations/${this.token}`).subscribe(
      (res) => {
        this.loading = false;
        this.store.dispatch([new SetIsLoadingPage(false)]);
        if (res && res.evaluator) {
          this.evaluator = res.evaluator;
          this.school = res.school || {};
          this.hasEvaluated = !!this.evaluator.hasEvaluated;

          if (this.hasEvaluated) {
            this.alreadyEvaluatedMessage = 'Los resultados para este evaluador ya han sido registrados.';
            if (this.evaluator.results) {
              this.populateResults(this.evaluator.results);
            }
          }
        } else {
          this.notFound = true;
        }
      },
      (err) => {
        this.loading = false;
        this.notFound = true;
        this.store.dispatch([new SetIsLoadingPage(false)]);
      }
    );
  }

  populateResults(results: any): void {
    this.criteriaList.forEach((item) => {
      if (results[item.key]) {
        item.applies = !!results[item.key].applies;
        item.value = results[item.key].value !== undefined ? results[item.key].value : 0;
      }
    });
  }

  toggleApplies(item: CriterionItem, applies: boolean): void {
    if (this.hasEvaluated) return;
    item.applies = applies;
    if (!applies) {
      item.value = null;
    } else if (item.value === null) {
      item.value = 0;
    }
  }

  validateValue(item: CriterionItem): void {
    if (item.value === null || item.value === undefined) return;
    if (item.value < 0) item.value = 0;
    if (item.value > 7) item.value = 7;
  }

  submit(): void {
    if (this.hasEvaluated || this.submitting) return;

    // Validate inputs
    for (const item of this.criteriaList) {
      if (item.applies) {
        if (item.value === null || item.value === undefined || isNaN(item.value) || item.value < 0 || item.value > 7) {
          this.toastr.error('Por favor verifique los puntajes. Cada criterio aplicado debe tener un valor entre 0 y 7.', 'Error');
          return;
        }
      }
    }

    const payloadResults: any = {};
    this.criteriaList.forEach((item) => {
      payloadResults[item.key] = {
        applies: item.applies,
        value: item.applies ? Number(item.value) : null
      };
    });

    this.submitting = true;
    this.http.post<any>(`${environment.baseUrl}environmental-diagnostics/evaluations/${this.token}`, { results: payloadResults }).subscribe(
      (res) => {
        this.submitting = false;
        this.hasEvaluated = true;
        this.alreadyEvaluatedMessage = 'Los resultados para este evaluador ya han sido registrados.';
        this.toastr.success('Resultados de la evaluación registrados exitosamente', 'Éxito');
      },
      (err) => {
        this.submitting = false;
        const msg = err.error && err.error.message ? err.error.message : 'Error al registrar los resultados';
        if (err.status === 400 && err.error && err.error.hasEvaluated) {
          this.hasEvaluated = true;
          this.alreadyEvaluatedMessage = 'Los resultados para este evaluador ya han sido registrados.';
        }
        this.toastr.error(msg, 'Atención');
      }
    );
  }
}

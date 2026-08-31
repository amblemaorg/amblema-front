import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { SetIsLoadingPage } from 'src/app/store/actions/web/web.actions';
import { environment } from 'src/environments/environment';

export interface Subcriterion {
  code: string;
  label: string;
  value: number | null;
  observation?: string;
}

export interface IndicatorSection {
  key: string;
  number: number;
  title: string;
  subcriteria: Subcriterion[];
  maxSubtotal: number;
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

  sections: IndicatorSection[] = [
    {
      key: 'cleanlinessAndCareOfSpaces',
      number: 1,
      title: 'Limpieza y cuidado de los espacios',
      maxSubtotal: 21,
      subcriteria: [
        { code: '1.1', label: '¿Hay ausencia de papeles o basura en zonas de aulas, patios y áreas comunes?', value: 0, observation: '' },
        { code: '1.2', label: '¿La escuela dispone de papeleras suficientes en las diferentes áreas?', value: 0, observation: '' },
        { code: '1.3', label: '¿Los estudiantes, docentes y personal hacen uso correcto de las papeleras?', value: 0, observation: '' }
      ]
    },
    {
      key: 'wasteManagement',
      number: 2,
      title: 'Gestión y aprovechamiento de los residuos',
      maxSubtotal: 21,
      subcriteria: [
        { code: '2.1', label: '¿Se clasifica la basura en residuos orgánicos e inorgánicos?', value: 0, observation: '' },
        { code: '2.2', label: '¿Tienen lugares apropiados e identificados para el resguardo de los residuos clasificados?', value: 0, observation: '' },
        { code: '2.3', label: '¿Poseen un plan o proyecto activo para el aprovechamiento/reciclaje de residuos?', value: 0, observation: '' }
      ]
    },
    {
      key: 'biodiversityConservation',
      number: 3,
      title: 'Conservación de la biodiversidad',
      maxSubtotal: 21,
      subcriteria: [
        { code: '3.1', label: '¿La escuela tiene jardines planificados, diseñados y bien mantenidos en sus áreas verdes?', value: 0, observation: '' },
        { code: '3.2', label: '¿Tienen un huerto escolar desarrollado y cuidado por los estudiantes y docentes?', value: 0, observation: '' },
        { code: '3.3', label: '¿Existe algún proyecto activo para promover o conocer la biodiversidad de plantas de la zona?', value: 0, observation: '' }
      ]
    },
    {
      key: 'waterUse',
      number: 4,
      title: 'Aprovechamiento del agua',
      maxSubtotal: 21,
      subcriteria: [
        { code: '4.1', label: '¿Se evidencia conciencia sobre el buen uso del agua, evitando el malgasto o fugas?', value: 0, observation: '' },
        { code: '4.2', label: '¿Poseen recipientes o tanques aptos para el almacenamiento y/o suministro de agua de riego?', value: 0, observation: '' },
        { code: '4.3', label: '¿Poseen una estructura o plan concreto para la recolección y almacenamiento de agua de lluvia?', value: 0, observation: '' }
      ]
    },
    {
      key: 'communityRelations',
      number: 5,
      title: 'Relación con la comunidad',
      maxSubtotal: 14,
      subcriteria: [
        { code: '5.1', label: '¿La escuela realiza acciones directas que aportan a la limpieza y ornato de la comunidad (Ej: Día de Todos a Limpiar)?', value: 0, observation: '' },
        { code: '5.2', label: '¿Los padres, representantes y vecinos participan/apoyan los proyectos ambientales escolares?', value: 0, observation: '' }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastr: ToastrService,
    private store: Store
  ) { }

  isUserSession: boolean = false;
  isReadonlyMode: boolean = false;

  checkIsUserSession(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_app_token') || localStorage.getItem('auth_token');
      if (token) return true;
    }
    return false;
  }

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
          this.isUserSession = this.checkIsUserSession();
          const readonlyParam = this.route.snapshot.queryParamMap.get('readonly') === 'true';
          this.isReadonlyMode = this.hasEvaluated || readonlyParam;

          if (this.evaluator.results) {
            this.populateResults(this.evaluator.results);
          }

          if (this.hasEvaluated) {
            this.alreadyEvaluatedMessage = 'Los resultados para este evaluador ya han sido registrados.';
          } else {
            this.alreadyEvaluatedMessage = '';
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
    this.sections.forEach((sec) => {
      const resItem = results[sec.key];
      if (resItem) {
        if (resItem.subcriteria) {
          sec.subcriteria.forEach((sub) => {
            if (resItem.subcriteria[sub.code]) {
              sub.value = resItem.subcriteria[sub.code].value !== undefined ? resItem.subcriteria[sub.code].value : 0;
              sub.observation = resItem.subcriteria[sub.code].observation || '';
            }
          });
        } else if (resItem.value !== undefined) {
          const val = resItem.value || 0;
          sec.subcriteria.forEach((sub) => {
            sub.value = val;
          });
        }
      }
    });
  }

  onInputFocus(event: any, sub: Subcriterion): void {
    if (event && event.target && typeof event.target.select === 'function') {
      event.target.select();
    }
    if (sub.value === 0) {
      sub.value = null;
    }
  }

  onInputBlur(sub: Subcriterion): void {
    if (sub.value === null || sub.value === undefined || sub.value === ('' as any)) {
      sub.value = 0;
    } else {
      this.validateValue(sub);
    }
  }

  validateValue(sub: Subcriterion): void {
    if (sub.value === null || sub.value === undefined) return;
    if (sub.value < 0) sub.value = 0;
    if (sub.value > 7) sub.value = 7;
  }

  getSubtotal(sec: IndicatorSection): number {
    return sec.subcriteria.reduce((sum, sub) => sum + (Number(sub.value) || 0), 0);
  }

  getAppliedCount(sec: IndicatorSection): number {
    return sec.subcriteria.filter((sub) => Number(sub.value) > 0).length;
  }

  getAverage(sec: IndicatorSection): number {
    const applied = this.getAppliedCount(sec);
    if (!applied) return 0;
    const subtotal = this.getSubtotal(sec);
    return Math.round((subtotal / applied) * 100) / 100;
  }

  getTotalIndexScore(): number {
    const sumAverages = this.sections.reduce((sum, sec) => sum + this.getAverage(sec), 0);
    return Math.round(sumAverages * 100) / 100;
  }

  getInterpretation(): { level: string; description: string; badgeClass: string } {
    const total = this.getTotalIndexScore();
    if (total >= 31) {
      return {
        level: 'Excelente',
        description: 'Cultura ambiental sólida e integrada.',
        badgeClass: 'badge-excellent'
      };
    } else if (total >= 21) {
      return {
        level: 'Satisfactorio',
        description: 'Prácticas constantes, consolidadas.',
        badgeClass: 'badge-satisfactory'
      };
    } else if (total >= 11) {
      return {
        level: 'En Desarrollo',
        description: 'Iniciativas aisladas, requiere estructuración.',
        badgeClass: 'badge-developing'
      };
    } else {
      return {
        level: 'Inicial',
        description: 'Requiere plan de acción inmediato.',
        badgeClass: 'badge-initial'
      };
    }
  }

  submit(): void {
    if (this.isReadonlyMode || this.submitting) return;

    for (const sec of this.sections) {
      for (const sub of sec.subcriteria) {
        if (sub.value === null || sub.value === undefined || isNaN(sub.value) || sub.value < 0 || sub.value > 7) {
          this.toastr.error(`Por favor verifique los puntajes en ${sec.title}. Cada criterio debe tener una calificación entre 0 y 7 (0 = No aplica).`, 'Error');
          return;
        }
      }
    }

    const payloadResults: any = {};
    this.sections.forEach((sec) => {
      const subDict: any = {};
      sec.subcriteria.forEach((sub) => {
        subDict[sub.code] = {
          value: Number(sub.value),
          observation: sub.observation || ''
        };
      });

      payloadResults[sec.key] = {
        subtotal: this.getSubtotal(sec),
        average: this.getAverage(sec),
        subcriteria: subDict
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

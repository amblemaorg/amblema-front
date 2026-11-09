import { Component, Input } from '@angular/core';
import {
  TeacherCoevaluationService,
  CoevaluationStatus,
} from '../../../../services/peca/teacher-coevaluation.service';

/** Valor de la columna "coevaluation" (SchoolDataPageComponent.coevaluationCell). */
export interface CoevaluationCellValue {
  pecaId: string;
  teacherId: string;
  canOpen: boolean;
  status: CoevaluationStatus;
  statusLabel: string;
  levelLabel: string | null;
}

// Celda custom de ng2-smart-table (recibe value y rowData). No implementa ViewCell
// porque su value está tipado como string | number.
@Component({
  selector: 'peca-coevaluation-cell',
  template: `
    <div class="coevaluation-cell" *ngIf="value">
      <span class="coevaluation-status" [ngClass]="'is-' + value.status">
        {{ value.levelLabel || value.statusLabel }}
      </span>
      <button
        *ngIf="value.canOpen"
        type="button"
        class="btn btn-sm btn-coevaluation"
        title="Abrir coevaluación"
        (click)="onOpen($event)"
      >
        Coevaluar
      </button>
    </div>
  `,
  styles: [
    `
      .coevaluation-cell {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      .coevaluation-status {
        font-size: 0.8rem;
        line-height: 1.2;
      }
      .coevaluation-status.is-completed {
        color: #00722e;
        font-weight: 600;
      }
      .coevaluation-status.is-pending_teacher,
      .coevaluation-status.is-pending_coordinator {
        color: #c48a00;
      }
      .coevaluation-status.is-not_started {
        color: #6c757d;
      }
      .btn-coevaluation {
        background-color: #81b03e;
        color: #fff;
        border-radius: 12px;
        padding: 2px 12px;
        font-size: 0.8rem;
      }
      .btn-coevaluation:hover {
        background-color: #6f9a33;
        color: #fff;
      }
    `,
  ],
})
export class CoevaluationCellComponent {
  @Input() value: CoevaluationCellValue;
  @Input() rowData: any;

  constructor(private coevaluationService: TeacherCoevaluationService) {}

  onOpen(event: Event): void {
    event.stopPropagation();
    this.coevaluationService.open({
      pecaId: this.value.pecaId,
      teacherId: this.value.teacherId,
    });
  }
}

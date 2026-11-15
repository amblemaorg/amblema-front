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

// Solo el coordinador entra al PECA. Acción principal (Coevaluar) mientras le falte
// su parte; secundaria (consultar / reenviar enlace) cuando ya guardó.
const ACTION_LABELS: Record<CoevaluationStatus, string> = {
  not_started: 'Coevaluar',
  pending_teacher: 'Ver detalle',
  pending_coordinator: 'Coevaluar',
  completed: 'Ver resultado',
};

// Celda custom de ng2-smart-table (recibe value y rowData). No implementa ViewCell
// porque su value está tipado como string | number.
@Component({
  selector: 'peca-coevaluation-cell',
  template: `
    <div class="coevaluation-cell" *ngIf="value">
      <span class="coevaluation-status" [ngClass]="'is-' + value.status">
        <span class="status-dot" aria-hidden="true"></span>
        {{ value.levelLabel || value.statusLabel }}
      </span>
      <button
        *ngIf="value.canOpen"
        type="button"
        class="btn-coevaluation"
        [class.is-secondary]="!isPrimary"
        [attr.aria-label]="actionLabel + ' coevaluación del docente'"
        title="Abrir coevaluación"
        (click)="onOpen($event)"
      >
        <svg
          class="btn-icon"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
          focusable="false"
        >
          <path
            *ngIf="isPrimary"
            fill="currentColor"
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm17.71-10.21a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          />
          <path
            *ngIf="!isPrimary"
            fill="currentColor"
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
          />
        </svg>
        <span>{{ actionLabel }}</span>
      </button>
    </div>
  `,
  styles: [
    `
      .coevaluation-cell {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
      }

      /* Estatus: informativo, sin aspecto clicable */
      .coevaluation-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.78rem;
        line-height: 1.2;
        color: #6c757d;
        cursor: default;
      }
      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: currentColor;
        flex-shrink: 0;
      }
      .coevaluation-status.is-completed {
        color: #00722e;
        font-weight: 600;
      }
      .coevaluation-status.is-pending_teacher,
      .coevaluation-status.is-pending_coordinator {
        color: #a87600;
      }

      /* Acción: botón con relieve, ícono y estados hover/focus/active */
      .btn-coevaluation {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.2;
        white-space: nowrap;
        color: #fff;
        background-color: #81b03e;
        border: 1px solid #6f9a33;
        border-radius: 6px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: background-color 0.15s ease, box-shadow 0.15s ease,
          transform 0.15s ease;
      }
      .btn-coevaluation:hover {
        background-color: #6f9a33;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }
      .btn-coevaluation:active {
        transform: translateY(0);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      }
      .btn-coevaluation:focus {
        outline: none;
      }
      .btn-coevaluation:focus-visible {
        box-shadow: 0 0 0 3px rgba(129, 176, 62, 0.45);
      }

      /* Coevaluación completada: acción secundaria (consultar) */
      .btn-coevaluation.is-secondary {
        color: #5a8226;
        background-color: #fff;
        border-color: #81b03e;
      }
      .btn-coevaluation.is-secondary:hover {
        color: #fff;
        background-color: #81b03e;
      }

      .btn-icon {
        flex-shrink: 0;
      }
    `,
  ],
})
export class CoevaluationCellComponent {
  @Input() value: CoevaluationCellValue;
  @Input() rowData: any;

  constructor(private coevaluationService: TeacherCoevaluationService) {}

  /** El coordinador aún no guarda su parte: la acción es coevaluar. */
  get isPrimary(): boolean {
    return (
      !!this.value &&
      (this.value.status === 'not_started' ||
        this.value.status === 'pending_coordinator')
    );
  }

  get actionLabel(): string {
    return (this.value && ACTION_LABELS[this.value.status]) || 'Coevaluar';
  }

  onOpen(event: Event): void {
    event.stopPropagation();
    this.coevaluationService.open({
      pecaId: this.value.pecaId,
      teacherId: this.value.teacherId,
    });
  }
}

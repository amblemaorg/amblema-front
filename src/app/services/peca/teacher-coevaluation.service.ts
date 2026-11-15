import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

// Contrato de amblema---backend: TeacherCoevaluationService

export type CoevaluationStatus =
  | 'not_started'
  | 'pending_teacher'
  | 'pending_coordinator'
  | 'completed';

export type CoevaluationLevelCode = 'excellence' | 'commitment' | 'progress' | 'beginning';

export interface CoevaluationInstrument {
  version: number;
  minScore: number;
  maxScore: number;
  maxTotal: number;
  dimensions: { code: string; name: string }[];
  items: { number: number; dimension: string; title: string; question: string }[];
  scale: { score: number; label: string; description: string }[];
  levels: { code: CoevaluationLevelCode; label: string; minTotal: number; minPercentage: number }[];
}

export interface CoevaluationResults {
  status: CoevaluationStatus;
  statusLabel: string;
  totalScore: number | null;
  percentage: number | null;
  level: CoevaluationLevelCode | null;
  levelLabel: string | null;
}

export interface CoevaluationStatusRecord extends CoevaluationResults {
  teacherId: string;
}

export interface CoevaluationItemResult {
  number: number;
  teacher: number | null;
  coordinator: number | null;
  average: number | null;
}

export interface CoevaluationDetail extends CoevaluationResults {
  id: string | null;
  instrument: CoevaluationInstrument;
  schoolYear: { id: string; name: string };
  school: { id: string; name: string; code: string };
  teacher: {
    id: string;
    firstName: string;
    lastName: string;
    cardType: string;
    cardId: string;
    email: string;
    phone: string;
    status: string;
    isDeleted: boolean;
  };
  sections: string;
  coordinator: { id: string | null; name: string | null };
  items: CoevaluationItemResult[];
  coordinatorSubmittedAt: string | null;
  teacherSubmittedAt: string | null;
  emailSentAt: string | null;
  emailSentTo: string | null;
  emailSentCount: number;
  canEvaluate: boolean;
  canSendLink: boolean;
}

export interface CoevaluationPublic {
  instrument: CoevaluationInstrument;
  schoolYear: { name: string };
  school: { name: string; code: string };
  teacher: { firstName: string; lastName: string };
  sections: string;
  coordinator: { name: string | null };
}

export interface CoevaluationScorePayload {
  scores: { number: number; score: number }[];
}

/** Datos de la fila de la tabla de docentes que abren el modal. */
export interface CoevaluationOpenRequest {
  pecaId: string;
  teacherId: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeacherCoevaluationService {
  private readonly baseUrl = environment.baseUrl;

  /** La tabla de docentes pide abrir el modal. */
  readonly open$ = new Subject<CoevaluationOpenRequest>();
  /** El modal avisa que cambió una coevaluación (para refrescar estatus). */
  readonly changed$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  open(request: CoevaluationOpenRequest): void {
    this.open$.next(request);
  }

  getStatuses(pecaId: string): Observable<{ records: CoevaluationStatusRecord[] }> {
    return this.http.get<{ records: CoevaluationStatusRecord[] }>(
      `${this.baseUrl}pecaprojects/coevaluations/${pecaId}`
    );
  }

  getDetail(pecaId: string, teacherId: string): Observable<CoevaluationDetail> {
    return this.http.get<CoevaluationDetail>(
      `${this.baseUrl}pecaprojects/coevaluations/${pecaId}/${teacherId}`
    );
  }

  saveCoordinator(
    pecaId: string,
    teacherId: string,
    payload: CoevaluationScorePayload
  ): Observable<CoevaluationDetail> {
    return this.http.post<CoevaluationDetail>(
      `${this.baseUrl}pecaprojects/coevaluations/${pecaId}/${teacherId}/coordinator`,
      payload
    );
  }

  sendLink(pecaId: string, teacherId: string): Observable<CoevaluationDetail> {
    return this.http.post<CoevaluationDetail>(
      `${this.baseUrl}pecaprojects/coevaluations/${pecaId}/${teacherId}/send`,
      {}
    );
  }

  getPublic(token: string): Observable<CoevaluationPublic> {
    return this.http.get<CoevaluationPublic>(
      `${this.baseUrl}coevaluations/public/${encodeURIComponent(token)}`
    );
  }

  submitPublic(token: string, payload: CoevaluationScorePayload): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}coevaluations/public/${encodeURIComponent(token)}`,
      payload
    );
  }
}

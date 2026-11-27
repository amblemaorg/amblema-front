import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Contrato de amblema---backend: CoordinatorEvaluationService

export type CoordinatorEvaluationStatus = 'not_started' | 'completed';

export type CoordinatorEvaluationOptionCode =
  | 'never'
  | 'rarely'
  | 'frequently'
  | 'always';

export interface CoordinatorEvaluationOption {
  code: CoordinatorEvaluationOptionCode;
  label: string;
  description: string;
  score?: number | null;
  percentage?: number | null;
}

export interface CoordinatorEvaluationQuestion {
  number: number;
  dimension: string;
  question: string;
}

export interface CoordinatorEvaluationInstrument {
  version: number;
  maxQuestionScore?: number | null;
  maxTotal?: number | null;
  options: CoordinatorEvaluationOption[];
  questions: CoordinatorEvaluationQuestion[];
}

export interface CoordinatorEvaluationAnswer {
  number: number;
  option: CoordinatorEvaluationOptionCode | null;
  optionLabel: string | null;
  score: number | null;
}

export interface CoordinatorEvaluationDetail {
  id: string | null;
  pecaId: string;
  instrument: CoordinatorEvaluationInstrument;
  schoolYear: { id: string; name: string };
  school: { id: string; name: string; code: string };
  coordinator: { id: string | null; name: string | null };
  status: CoordinatorEvaluationStatus;
  statusLabel: string;
  answers: CoordinatorEvaluationAnswer[];
  totalScore: number | null;
  submittedAt: string | null;
  canEvaluate: boolean;
  showScores: boolean;
}

export interface CoordinatorEvaluationSubmitPayload {
  answers: { number: number; option: CoordinatorEvaluationOptionCode }[];
}

@Injectable({
  providedIn: 'root',
})
export class CoordinatorEvaluationService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getEvaluation(pecaId: string): Observable<CoordinatorEvaluationDetail> {
    return this.http.get<CoordinatorEvaluationDetail>(
      `${this.baseUrl}pecaprojects/${pecaId}/coordinator-evaluation`
    );
  }

  submitEvaluation(
    pecaId: string,
    payload: CoordinatorEvaluationSubmitPayload
  ): Observable<CoordinatorEvaluationDetail> {
    return this.http.post<CoordinatorEvaluationDetail>(
      `${this.baseUrl}pecaprojects/${pecaId}/coordinator-evaluation`,
      payload
    );
  }
}

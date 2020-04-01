import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  baseUrl = environment.baseUrl;  

  constructor(private http: HttpClient) { }

  getSteps (): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'steps')
  }
}
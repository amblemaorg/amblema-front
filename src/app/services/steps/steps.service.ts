import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Project } from 'src/app/models/steps/previous-steps.model';

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

  getSteps (proj_id): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + `projects/${proj_id}`)
  }

  requestApproval (fd): Observable<any> {
    return this.http.post<any>(this.baseUrl+'requestsstepapproval',fd)
  }

  updateRequestApproval (id,fd): Observable<any> {
    return this.http.put<any>(this.baseUrl+`requestsstepapproval/${id}`,fd)
  }
}
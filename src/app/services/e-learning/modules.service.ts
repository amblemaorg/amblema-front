import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Select } from '@ngxs/store';
import { CoordinatorModule, Module } from '../../models/e-learning/learning-modules.model';
import { CoordinatorState } from '../../store/states/e-learning/coordinator-user.state';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  isBrowser;
  baseUrl = environment.baseUrl;  

  approved_modules:CoordinatorModule[] = [];
  all_modules:Module[] = [];

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getMod (id): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'learningmodules/' + id)
  }

  getMods (): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'learningmodules')
  }

  getCoordinator(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + `users/${id}?userType=2`)
  }

  answerModule(module_id, dataJson): Observable<any> {
    return this.http.post<any>(this.baseUrl + `answerlearningmodule/${module_id}`, dataJson)
  }
  

  checkApprove(id){
    let isApproved = this.approved_modules.find(m => { return m.moduleId == id });
    return isApproved
  }
  getSelectedModule(id){
    let gotResult = this.all_modules.find(m => { return m.id == id });
    return gotResult
  }
}
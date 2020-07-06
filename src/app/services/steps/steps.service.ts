import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Project, StatesRecord, MunicipalitiesRecord } from '../../models/steps/previous-steps.model';

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
  @Output() enableTab:EventEmitter<boolean> = new EventEmitter();
  @Output() goToMods:EventEmitter<any> = new EventEmitter();

  private isPageReloaded: boolean = true;

  constructor(private http: HttpClient) { }

  getIsPageReloaded() {
    return this.isPageReloaded;
  }

  enableTabMethod(bool) {
    this.isPageReloaded = false;
    this.enableTab.emit(bool);
  }
  goToModules() {
    this.goToMods.emit(null);
  }

  getSteps (proj_id): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + `projects/${proj_id}`)
  }

  stepApproval (proj_id,fd): Observable<any> {
    return this.http.post<any>(this.baseUrl+`projectsteps/${proj_id}`,fd)
  }
  requestApproval (fd): Observable<any> {
    return this.http.post<any>(this.baseUrl+'requestsstepapproval',fd)
  }

  updateRequestApproval (id,fd, isCalcelling: boolean): Observable<any> {
    if (isCalcelling) return this.http.put<any>(this.baseUrl+`requestscontentapproval/${id}`,fd);
    else return this.http.put<any>(this.baseUrl+`requestsstepapproval/${id}`,fd);
  }


  requestsFind(type,data): Observable<any> {
    let requestType = (type === 1) ? 'requestsfindsponsor' : 
                      (type === 2) ? 'requestsfindcoordinator' : 
                                     'requestsfindschool';
    return this.http.post<any>(this.baseUrl+requestType,data);
  }


  updateFindSchool (id,school): Observable<any> {
    return this.http.put<any>(this.baseUrl+`requestsfindschool/${id}`,school)
  }
  getFindSchool (id): Observable<any> {
    return this.http.get<any>(this.baseUrl+`requestsfindschool/${id}`)
  }
    
  updateFindCoordinator (id,coordinator): Observable<any> {
    return this.http.put<any>(this.baseUrl+`requestsfindcoordinator/${id}`,coordinator)
  }
  getFindCoordinator (id): Observable<any> {
    return this.http.get<any>(this.baseUrl+`requestsfindcoordinator/${id}`)
  }

  updateFindSponsor (id,sponsor): Observable<any> {
    return this.http.put<any>(this.baseUrl+`requestsfindsponsor/${id}`,sponsor)
  }
  getFindSponsor (id): Observable<any> {
    return this.http.get<any>(this.baseUrl+`requestsfindsponsor/${id}`)
  }

  //GET RESIDENCE INFO
  getStates (): Observable<StatesRecord> {
    return this.http.get<StatesRecord>(this.baseUrl + 'states')
  }

  getMunicipalities (): Observable<MunicipalitiesRecord> {
    return this.http.get<MunicipalitiesRecord>(this.baseUrl + 'municipalities')
  }
  //
}
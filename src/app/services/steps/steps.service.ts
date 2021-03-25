import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
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
  @Output() residenceInfoEmitter:EventEmitter<boolean> = new EventEmitter();

  private residenseInfo_: {
    isCallingS: boolean;
    isCallingM: boolean;
    states: any[];
    municipalities: any[];
  } = {
    isCallingS: false,
    isCallingM: false,
    states: [],
    municipalities: [],
  };

  private isPageReloaded: boolean = true;
  private stepsCalled: boolean = false;

  constructor(private http: HttpClient) { }

  // setResidenceStates(states: any[]) {
  //   this.residenseInfo_.states = states;
  // }
  // setResidenceMuns(municipalities: any[]) {
  //   this.residenseInfo_.municipalities = municipalities;
  // }
  getResidenceStates(): any[] {
    return this.residenseInfo_.states;
  }
  getResidenceMuns(): any[] {
    return this.residenseInfo_.municipalities;
  }
  // setIsCallingS(bool: boolean) {
  //   this.residenseInfo_.isCallingS = bool;
  // }
  // setIsCallingM(bool: boolean) {
  //   this.residenseInfo_.isCallingM = bool;
  // }
  // getIsCallingS(): boolean {
  //   return this.residenseInfo_.isCallingS;
  // }
  getIsCallingM(): boolean {
    return this.residenseInfo_.isCallingM;
  }

  getIsPageReloaded() {
    return this.isPageReloaded;
  }
  areStepsCalled() {
    return this.stepsCalled;
  }

  enableTabMethod(bool) {
    this.isPageReloaded = false;
    this.enableTab.emit(bool);
  }
  callSteps(bool) {
    this.stepsCalled = bool;
  }
  goToModules() {
    this.goToMods.emit(null);
  }

  // geoCodeGet(resourcePath: string): Observable<any> {
  //   return this.http.get<any>(resourcePath, httpOptions);
  // }

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

  callStates() {
    if (!this.residenseInfo_.isCallingS) {
      this.residenseInfo_.isCallingS = true;
      this.getStates().subscribe(({ records: states }) => {
        this.residenseInfo_ = {
          ...this.residenseInfo_,
          states: states,
          isCallingM: false,
          isCallingS: false,
        };
        this.residenceInfoEmitter.emit(true);
      }, error => {
        this.residenseInfo_ = {
          ...this.residenseInfo_,
          isCallingM: false,
          isCallingS: false,
        };
      });
    }
  }

  callMuns(fromClick: boolean = false) {
    if (!this.residenseInfo_.isCallingM) {
      setTimeout(() => {
        this.residenseInfo_.isCallingM = true;
        if (!fromClick && this.residenseInfo_.states.length && this.residenseInfo_.municipalities.length) 
          setTimeout(() => {
            this.residenseInfo_.isCallingM = false;
            this.residenceInfoEmitter.emit(true);
          });
        else if (!fromClick || (fromClick && !this.residenseInfo_.states.length) ) 
          this.getMunicipalities().subscribe(({ records: municipalities }) => {
            this.residenseInfo_ = {
              ...this.residenseInfo_,
              municipalities: municipalities,
            };
            this.callStates();
          }, error => {
            this.residenseInfo_.isCallingM = false;
          });
        else 
          setTimeout(() => {
            this.residenseInfo_.isCallingM = false;
          });
      });
    }
  }
  //
}

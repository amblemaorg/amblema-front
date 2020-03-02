import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

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

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getTrashData () : Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?per_page=12')
  }
  getMods (): Observable<any> {
    return of<any>(MODULES)
  }
  // getMods (): Observable<any> {
  //   return this.http.get<any>(this.baseUrl + 'learningmodules')
  // }
  
}

const MODULES = [
  {
    name: 'Módulo 1',
  },
  {
    name: 'Módulo 2',
  },
  {
    name: 'Módulo 3',
  },
  {
    name: 'Módulo 4',
  },
  {
    name: 'Módulo 5',
  },
  {
    name: 'Módulo 6',
  },
  {
    name: 'Módulo 7',
  },
  {
    name: 'Módulo 8',
  },
  {
    name: 'Módulo 9',
  },
  {
    name: 'Módulo 10',
  },
];
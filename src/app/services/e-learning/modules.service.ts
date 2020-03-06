import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class ModulesService {
  isBrowser;
  baseUrl = environment.baseUrl;  

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getTrashData () : Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?per_page=12')
  }
  getMod (id): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'learningmodules/' + id)
  }
  // getMods (): Observable<any> {
  //   return of<any>(MODULES)
  // }
  getMods (): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'learningmodules')
  }
  // getMods (): Observable<any> {
  //   return this.http.get<any>(this.baseUrl + 'learningmodules')
  // }

  getCoordinator(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + `users/${id}?userType=2`)
  }
  
}

const MODULES = [
  {
    name: 'Módulo 1',
    done: true,
  },
  {
    name: 'Módulo 2',
    done: false,
  },
  {
    name: 'Módulo 3',
    done: false,
  },
  {
    name: 'Módulo 4',
    done: false,
  },
  {
    name: 'Módulo 5',
    done: false,
  },
  {
    name: 'Módulo 6',
    done: false,
  },
  {
    name: 'Módulo 7',
    done: false,
  },
  {
    name: 'Módulo 8',
    done: false,
  },
  {
    name: 'Módulo 9',
    done: false,
  },
  {
    name: 'Módulo 10',
    done: false,
  },
];
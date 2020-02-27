import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId) { 
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getTrashData () : Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?per_page=12')
  }
  getMods (): Observable<any> {
    return of<any>(MODULES)
  }
  
}

const MODULES = [
  {
    name: 'Module 1',
  },
  {
    name: 'Module 2',
  },
  {
    name: 'Module 3',
  },
  {
    name: 'Module 4',
  },
  {
    name: 'Module 5',
  },
  {
    name: 'Module 6',
  },
  {
    name: 'Module 7',
  },
  {
    name: 'Module 8',
  },
  {
    name: 'Module 9',
  },
  {
    name: 'Module 10',
  },
];
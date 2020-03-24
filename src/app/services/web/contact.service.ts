import { Injectable } from '@angular/core';
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
export class ContactService {
  constructor(private http: HttpClient) { }

  getMunicipalities(): Observable<any> {
    return this.http.get("http://testing.binaural.com.ve:10506/municipalities");
  }

  getStates(): Observable<any> {
    return this.http.get("http://testing.binaural.com.ve:10506/states");
  }

  sendContactForm(form, data): Observable<any> {
    switch(form) {
      case 'coordinator':
        return this.http.post<any>("http://testing.binaural.com.ve:10506/coordinatorscontacts", data, httpOptions);
      case 'sponsor':
        return this.http.post<any>("http://testing.binaural.com.ve:10506/sponsorscontacts", data, httpOptions);
      case 'school':
        return this.http.post<any>("http://testing.binaural.com.ve:10506/schoolscontacts", data, httpOptions);
    }
  }
}

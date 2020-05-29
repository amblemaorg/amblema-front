import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getMunicipalities(): Observable<any> {
    return this.http.get(environment.baseUrl + "municipalities");
  }

  getStates(): Observable<any> {
    return this.http.get(environment.baseUrl + "states");
  }

  sendContactForm(form, data): Observable<any> {
    switch (form) {
      case "coordinator":
        return this.http.post<any>(environment.baseUrl + "coordinatorscontacts", data, httpOptions);
      case "sponsor":
        return this.http.post<any>(environment.baseUrl + "sponsorscontacts", data, httpOptions);
      case "school":
        return this.http.post<any>(environment.baseUrl + "schoolscontacts", data, httpOptions);
    }
  }
}

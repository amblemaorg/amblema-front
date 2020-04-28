import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { WebContentService } from "./web-content.service";

@Injectable({
  providedIn: "root",
})
export class ApiWebContentService implements WebContentService {
  webContent: any;
  baseUrl: string;
  resourcePath: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(protected http: HttpClient) {}

  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  setResourcePath(path: string) {
    this.resourcePath = path;
  }

  setWebContent(content: any): void {
    this.webContent = content;
  }

  getWebContent(): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + this.resourcePath,
      this.httpOptions
    );
  }

  getWebContentByParam(param: string, paramValue): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + this.resourcePath + "/" + paramValue,
      this.httpOptions
    );
  }
}

import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { WebContentService } from "./web-content.service";

@Injectable({
  providedIn: "root",
})
export class StaticWebContentService implements WebContentService {
  webContent: any;

  constructor() {}

  setWebContent(content: any) {
    this.webContent = content;
  }

  getWebContent(): Observable<any> {
    return of<any>(this.webContent);
  }

  getWebContentByParam(param: string, paramValue: string): Observable<any> {
    let content: any;
    content = this.webContent.filter((item) => item[param] === paramValue)[0];
    return of<any>(content);
  }
}

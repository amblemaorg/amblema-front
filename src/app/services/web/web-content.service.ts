import { Observable } from 'rxjs';

export interface WebContentService {
  webContent: any;

  setWebContent(content: any): void;
  getWebContent(): Observable<any>;
  getWebContentByParam(param: string, paramValue: string): Observable<any>;
}

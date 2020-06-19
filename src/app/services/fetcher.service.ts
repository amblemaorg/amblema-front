import { Observable } from 'rxjs';

export interface FetcherService {
  get(url: string, options?: object): Observable<any>;
  post(url: string, body: object, options?: object): Observable<any>;
  put(url: string, body: object, options?: object): Observable<any>;
  patch(url: string, body: object, options?: object): Observable<any>;
  delete(url: string, options?: object): Observable<any>;
}

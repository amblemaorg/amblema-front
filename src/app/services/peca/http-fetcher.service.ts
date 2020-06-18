import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FetcherService } from '../fetcher.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpFetcherService implements FetcherService {
  baseUrl: string = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  get(resourcePath: string, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.get<any>(this.baseUrl + resourcePath, this.httpOptions);
  }

  post(resourcePath: string, body?: object, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.post<any>(this.baseUrl + resourcePath, body, this.httpOptions);
  }

  put(resourcePath: string, body?: object, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.put<any>(this.baseUrl + resourcePath, body, this.httpOptions);
  }

  patch(resourcePath: string, body?: object, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.patch<any>(this.baseUrl + resourcePath, body, this.httpOptions);
  }

  delete(resourcePath: string, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.delete<any>(this.baseUrl + resourcePath, this.httpOptions);
  }

  private mergeHttpOptions(options: object) {
    if (options['headers']) {
      for (const key in options['headers']) {
        let headers = this.httpOptions.headers.append(key, options['headers'][key]);
        options = { ...options, headers };
      }
    }
    this.httpOptions = { ...this.httpOptions, ...options };
  }
}

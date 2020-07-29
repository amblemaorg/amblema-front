import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
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

  private api_requesting: boolean = false;

  constructor(private http: HttpClient) {}

  // geoCodeGet(resourcePath: string): Observable<any> {
  //   return this.http.get<any>(resourcePath, this.httpOptions);
  // }

  isRequestingApi(): boolean {
    return this.api_requesting
  }

  get(resourcePath: string, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.get<any>(this.baseUrl + resourcePath, this.httpOptions);
  }

  post(resourcePath: string, body?: object, options?: object): Observable<any> {
    if (options) this.mergeHttpOptions(options);
    return this.http.post<any>(this.baseUrl + resourcePath, body, this.httpOptions);
  }

  put(resourcePath: string, body?: any, options?: object): Observable<any> {
    this.api_requesting = true;
    if (options) this.mergeHttpOptions(options);
    if (body instanceof FormData) 
      return this.http.put<any>(this.baseUrl + resourcePath, body).pipe( finalize(() => { this.api_requesting = false; }) );
    else 
      return this.http.put<any>(this.baseUrl + resourcePath, body, this.httpOptions).pipe( finalize(() => { this.api_requesting = false; }) );
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

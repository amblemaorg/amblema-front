import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { NbAuthService, decodeJwtPayload, NbAuthOAuth2Token } from "@nebular/auth";
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(
    private authService: NbAuthService,
    private http: HttpClient
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = request.url.replace(`${environment.baseUrl}`, '');

    this.authService.getToken().subscribe((token: NbAuthOAuth2Token) => {
        if (token.isValid()) {
            let tokens = JSON.parse(token.getValue());
            if (url === 'auth/refresh')
                request = this.addToken(request, tokens.refresh_token);
            else request = this.addToken(request, tokens.access_token);
        }
    });

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 422)) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.http.post<any>(`${environment.baseUrl}auth/refresh`, {}, {}).pipe(
        switchMap((tokens: any) => {
          this.isRefreshing = false;
          let auth_app_token = JSON.parse(localStorage.getItem('auth_app_token'));
          let oldToken = JSON.parse(auth_app_token.value);
          oldToken.access_token = tokens.access_token;
          auth_app_token.value = JSON.stringify(oldToken);
          localStorage.setItem('auth_app_token', JSON.stringify(auth_app_token));
          this.refreshTokenSubject.next(tokens.access_token);
          return next.handle(this.addToken(request, tokens.access_token));
        })
      );
    }
    else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }
}

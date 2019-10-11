import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private apiKey = '72c3c4704a274e2eb1f48315f7584ceb';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      params: req.params.append('apiKey', this.apiKey),
    });
    return next.handle(modifiedReq);
  }
}

export const ApiKeyInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true},
];

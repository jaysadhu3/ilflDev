import { tap } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  
  constructor(private SpinnerService: NgxSpinnerService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!request.url.includes("getTotalNotificationCount") && !request.url.includes("updateMessageReadStatus")){
      this.SpinnerService.show();
    }
    
    //logging the updated Parameters to browser's console
    return next.handle(request).pipe(
      tap(
        (event) => {
          //logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            setTimeout(() => {
              /** spinner ends after 0.5 seconds */
              this.SpinnerService.hide();
            }, 1);
          }
        },
        (error) => {
          //logging the http response to browser's console in case of a failuer
          if (event instanceof HttpResponse) {
            setTimeout(() => {
              /** spinner ends after 0.5 seconds */
              this.SpinnerService.hide();
            }, 1);
          }
        }
      )
    );
  }
}

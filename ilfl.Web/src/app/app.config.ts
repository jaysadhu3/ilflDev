import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { HttpRequestInterceptor } from './interceptor/interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    provideAnimations(),
    provideToastr(),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }]
};

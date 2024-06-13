import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environments';
import { PageContent } from '../../common/models/pageContent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {
  httpHeaders: HttpHeaders;
  apiAddress = environment.apiAddress + 'PageContent/';
  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
  }

  SavePageContent(pageContent: PageContent): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<any>(this.apiAddress + 'SavePageContent ', pageContent, { headers: this.httpHeaders, observe: 'response' });
  }

  GetPageContent(menuId: Number): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetPageContent/' + menuId, { headers: this.httpHeaders, observe: 'response' });
  }
}

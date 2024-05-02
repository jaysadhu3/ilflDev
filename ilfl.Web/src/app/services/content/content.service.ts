import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environments } from '../../../environments/environments';
import { User } from '../../common/models/user';
import { Content } from '../../common/models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  httpHeaders: HttpHeaders;
  apiAddress = Environments.apiAddress + 'Content/';
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
   }

   GetContent(section: string): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiAddress + 'GetContent', JSON.stringify(section), {headers: this.httpHeaders, observe: 'response'});
   }

   AddContent(content: Content): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiAddress + 'AddContent', JSON.stringify(content), {headers: this.httpHeaders, observe: 'response'});
   }

   DeleteContent(id: Number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(this.apiAddress + 'DeleteContent', {headers: this.httpHeaders, observe: 'response', body: JSON.stringify(id)});
   }
}

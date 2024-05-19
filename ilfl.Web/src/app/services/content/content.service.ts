import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environments } from '../../../environments/environments';
import { User } from '../../common/models/user';
import { Content } from '../../common/models/content';
import { NgxSpinnerService } from 'ngx-spinner';
import { Section } from '../../common/models/Section';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  httpHeaders: HttpHeaders;
  apiAddress = Environments.apiAddress + 'Content/';
  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
   }

   GetContent(section: number): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetContent/' + section, {headers: this.httpHeaders, observe: 'response'});
   }

   GetDirectorDetail(): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetDirectorDetail', {headers: this.httpHeaders, observe: 'response'});
   }

   AddContent(content: Content): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<any>(this.apiAddress + 'AddContent', JSON.stringify(content), {headers: this.httpHeaders, observe: 'response'});
   }

   DeleteContent(id: Number): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.delete<HttpResponse<any>>(this.apiAddress + 'DeleteContent', {headers: this.httpHeaders, observe: 'response', body: JSON.stringify(id)});
   }

   GetChildSection(sectionId: Number): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetChildSection/' + sectionId, {headers: this.httpHeaders, observe: 'response'});
   }

   GetParentSection(): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetParentSection', {headers: this.httpHeaders, observe: 'response'});
   }

   AddSection(section: Section): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<any>(this.apiAddress + 'AddSection', JSON.stringify(section), {headers: this.httpHeaders, observe: 'response'});
   }

   GetAllSection(): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetAllSection', {headers: this.httpHeaders, observe: 'response'});
   }
   
}

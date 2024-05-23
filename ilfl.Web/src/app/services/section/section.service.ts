import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Section } from '../../common/models/Section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  httpHeaders: HttpHeaders;
  apiAddress = environment.apiAddress + 'Section/';
  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
   }GetChildSection(sectionId: Number): Observable<HttpResponse<any>> {
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

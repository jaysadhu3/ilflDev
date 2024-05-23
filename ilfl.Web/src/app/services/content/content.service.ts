import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../../common/models/user';
import { Content } from '../../common/models/content';
import { NgxSpinnerService } from 'ngx-spinner';
import { Section } from '../../common/models/Section';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  httpHeaders: HttpHeaders;
  apiAddress = environment.apiAddress + 'Content/';
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

   AddContent(fileData: FormData): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<HttpResponse<any>>(this.apiAddress + 'AddContent', fileData);
   }

   DeleteContent(id: Number): Observable<any> {
    this.spinner.show();
    return this.httpClient.delete<HttpResponse<any>>(this.apiAddress + 'DeleteContent/' + id, {headers: this.httpHeaders, observe: 'response'});
   }

   GetViewFile(filePath: string): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetViewFile/' + filePath, {headers: this.httpHeaders, observe: 'response'});
   }
   
}

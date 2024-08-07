import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  httpHeaders: HttpHeaders;
  apiAddress = environment.apiAddress + 'api/Content/';
  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
   }

   GetContent(section: number): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetContent/' + section, {headers: this.httpHeaders, observe: 'response'});
   }

   GetContentById(id: number): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetContentById/' + id, {headers: this.httpHeaders, observe: 'response'});
   }

   GetDirectorDetail(): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetDirectorDetail', {headers: this.httpHeaders, observe: 'response'});
   }

   AddContent(fileData: FormData): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<HttpResponse<any>>(this.apiAddress + 'AddContent', fileData);
   }

   UpdateContent(fileData: FormData): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<HttpResponse<any>>(this.apiAddress + 'UpdateContent', fileData);
   }

   UpdateContentwithFile(fileData: FormData): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<HttpResponse<any>>(this.apiAddress + 'UpdateContentwithFile', fileData);
   }

   DeleteContent(id: Number): Observable<any> {
    this.spinner.show();
    return this.httpClient.get<HttpResponse<any>>(this.apiAddress + 'DeleteContent/' + id, {headers: this.httpHeaders, observe: 'response'});
   }

   GetViewFile(filePath: string): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.get<any>(this.apiAddress + 'GetViewFile/' + filePath, {headers: this.httpHeaders, observe: 'response'});
   }   
}

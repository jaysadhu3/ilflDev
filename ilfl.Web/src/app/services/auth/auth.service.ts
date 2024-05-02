import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../../../environments/environments';
import { User } from '../../common/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpHeaders: HttpHeaders;
  apiAddress = Environments.apiAddress + 'Auth/';
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
   }

   validateUser(user: User): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.apiAddress + 'VerifyUser', JSON.stringify(user), {headers: this.httpHeaders, observe: 'response'});
   }
}

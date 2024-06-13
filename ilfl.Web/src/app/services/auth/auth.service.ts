import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { User } from '../../common/models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpHeaders: HttpHeaders;
  apiAddress = environment.apiAddress + 'api/Auth/';
  constructor(private httpClient: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json'});
   }

   validateUser(user: User): Observable<HttpResponse<any>> {
    this.spinner.show();
    return this.httpClient.post<any>(this.apiAddress + 'VerifyUser', JSON.stringify(user), {headers: this.httpHeaders, observe: 'response'});
   }

   isAdmin(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    return user.isValid;
  }
  
  signOut() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}

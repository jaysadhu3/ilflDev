import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { User } from '../../common/models/user';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/toastService/toast.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  credentialForm: FormGroup;
  user: User = new User();

  constructor(private formbuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: NotificationService
  ) {
    let details = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (details.isValid) {
      this.router.navigate(['Admin/Dashboard']);
    }
    this.credentialForm = this.formbuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  processLogin() {
    if (this.credentialForm.valid) {
      this.user.Ifulusername = this.credentialForm.controls['username'].value;
      this.user.Ifulpassword = this.credentialForm.controls['password'].value;
      this.auth.validateUser(this.user).subscribe((res) => {
        if (res.body.isValid) {
          sessionStorage.setItem('user', JSON.stringify(res.body));
          this.spinner.hide();
          this.router.navigate(['Admin/Dashboard']);
        } else {
          this.spinner.hide();
          this.toastr.showError('Username or password is wrong', 'Details Error');
        }
        this.spinner.hide();
      }, (error) => {
        this.spinner.hide();
        this.toastr.showError('Username or password is wrong', 'Details Error');
      });
    }
    else {
      this.toastr.showError('Username or password is wrong', 'Details Error');
    }

  }
}

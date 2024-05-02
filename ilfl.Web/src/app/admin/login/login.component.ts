import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { User } from '../../common/models/user';

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
export class LoginComponent implements OnInit{
  credentialForm: FormGroup;
  user: User = new User();

  constructor(private formbuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.credentialForm = this.formbuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  processLogin() {
    if(this.credentialForm.valid) {
      this.user.Ifulusername = this.credentialForm.controls['username'].value;
      this.user.Ifulpassword = this.credentialForm.controls['password'].value;
      this.auth.validateUser(this.user).subscribe(res => {
        if(res.status === 200) {
          if(res.body) {
            alert();
          } else {
            alert("Username or password is wrong");

          }
        }
      });
    }
    else {
      alert("Username or password is wrong");
    }
    
  }
}

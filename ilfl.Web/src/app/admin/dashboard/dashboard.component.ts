import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Content } from '../../common/models/content';
import { fileType } from '../../common/constants';
import { ContentService } from '../../services/content/content.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/toastService/toast.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{

  constructor(private router: Router) {

  }

  signOut() {
    this.router.navigate(['Admin']);
  }
}

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
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../common/header/header.component';
import { SectionService } from '../../services/section/section.service';
import { HeaderAdminComponent } from '../../common/header-admin/header-admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, HeaderAdminComponent],
  providers: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  MenuCount: number = 0;
  ContentCount: number = 0;

  constructor(private router: Router,
    private authService: AuthService,
    private sectionService: SectionService,
    private conentService: ContentService,
  private spinner: NgxSpinnerService) {


  }
  ngOnInit(): void {
    this.sectionService.GetAllSection().subscribe(res => {
      let result: [] = res.body;
      this.MenuCount = result.length;
      this.spinner.hide();
    });
    this.conentService.GetContent(0).subscribe(res => {
      let result: [] = res.body;
      this.ContentCount = result.length;
      this.spinner.hide();
    });
  }

  signOut() {
    this.authService.signOut();
  }
}

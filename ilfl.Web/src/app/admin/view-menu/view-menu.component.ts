import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { SectionService } from '../../services/section/section.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-view-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-menu.component.html',
  styleUrl: './view-menu.component.css'
})
export class ViewMenuComponent implements OnInit{
  allSection: any = [];
  constructor(private router: Router,
    private sectionService: SectionService,
    private authService: AuthService,
    private Spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(): void {
    this.sectionService.GetAllSection().subscribe(res => {
      if(res.status == 200) {
        this.allSection = res.body;
        this.Spinner.hide();
      }
    });
  }

  signOut() {
    this.authService.signOut();
  }
}

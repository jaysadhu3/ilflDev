import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private Content: ContentService,
    private Spinner: NgxSpinnerService
  ) {

  }

  ngOnInit(): void {
    this.Content.GetAllSection().subscribe(res => {
      if(res.status == 200) {
        this.allSection = res.body;
        this.Spinner.hide();
      }
    });
  }

  signOut() {
    this.router.navigate(['Admin']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { SectionService } from '../../services/section/section.service';
import { AuthService } from '../../services/auth/auth.service';
import { NotificationService } from '../../services/toastService/toast.service';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-view-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './view-menu.component.html',
  styleUrl: './view-menu.component.css'
})
export class ViewMenuComponent implements OnInit{
  allSection: any = [];
  constructor(private router: Router,
    private sectionService: SectionService,
    private authService: AuthService,
    private Spinner: NgxSpinnerService,
    private toastr: NotificationService
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

  deleteValue(id: number) {
    this.sectionService.DeleteSection(id).subscribe(res => {
      if (res.status == 200) {
        this.sectionService.GetAllSection().subscribe(res => {
          this.allSection = res.body;
          this.Spinner.hide();
          this.toastr.showInfo('Data deleted successfully','Data Deleted');
        });
      } else {
        this.toastr.showError('Somethin wrong with connection','Delete Error');
      }
    });

}

  signOut() {
    this.authService.signOut();
  }
}

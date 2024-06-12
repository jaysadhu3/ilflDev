import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContentService } from '../../services/content/content.service';
import { NotificationService } from '../../services/toastService/toast.service';
import { Content } from '../../common/models/content';
import { CommonModule } from '@angular/common';
import { SectionService } from '../../services/section/section.service';
import { concat, forkJoin } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../common/header/header.component';
import { HeaderAdminComponent } from '../../common/header-admin/header-admin.component';

@Component({
  selector: 'app-view-content',
  standalone: true,
  imports: [CommonModule, HeaderAdminComponent],
  templateUrl: './view-content.component.html',
  styleUrl: './view-content.component.css'
})
export class ViewContentComponent implements OnInit {
  content: Content = new Content();
  base64File: string = '';
  tableValue: any = null;
  sectionForTable: string = '';
  dropdownValue: any = null;
  sectionValues: any = null;

  constructor(private formbuilder: FormBuilder,
    private contentService: ContentService,
    private sectionService: SectionService,
    private router: Router,
    private authService: AuthService,
    private toastr: NotificationService,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {

    this.contentService.GetContent(0).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });


    this.sectionService.GetChildSection(0).subscribe(res => {
      this.dropdownValue = res.body;
      this.spinner.hide();
    });
  }

  signOut() {
    this.authService.signOut();
  }

  ViewTable(event: Event) {
    let section = (event.target as HTMLInputElement).value;
    this.sectionForTable = section;
    if (section != null && section != '') {
      this.contentService.GetContent(+section).subscribe(res => {
        this.tableValue = res.body;
        this.spinner.hide();
      });
    } else {
      this.tableValue = null;
    }
  }

  deleteValue(id: number) {
    this.contentService.DeleteContent(id).subscribe(res => {
      if (res.status == 200) {
        this.contentService.GetContent(+this.sectionForTable).subscribe(res => {
          this.tableValue = res.body;
          this.spinner.hide();
          this.toastr.showInfo('Data deleted successfully', 'Data Deleted');
        });
      } else {
        this.toastr.showError('Somethin wrong with connection', 'Delete Error');
      }
    });

  }

  viewPDF(file: string) {
    let listValues: string[] = [];
    this.contentService.GetViewFile(file).subscribe(res => {

      window.open(res.body, '_blank');
      listValues = res.body;
      if (res.status == 200) {
        if (listValues == null) {
          this.toastr.showWarning('Can not read files.', 'Warning');
        } else {

          window.open(listValues.join(""), '_blank');
        }
      } else {
        if (listValues == null) {
          this.toastr.showWarning('Please contact to administrator for this file.', 'Warning');
        }
      }
      this.spinner.hide();
    });
  }
}

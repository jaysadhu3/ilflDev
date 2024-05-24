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

@Component({
  selector: 'app-view-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-content.component.html',
  styleUrl: './view-content.component.css'
})
export class ViewContentComponent implements OnInit{
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
            this.toastr.showInfo('Data deleted successfully','Data Deleted');
          });
        } else {
          this.toastr.showError('Somethin wrong with connection','Delete Error');
        }
      });

  }

  viewPDF(file: string) {
    let listValues: string[] = [];
    this.contentService.GetViewFile(file).subscribe(res => {
      listValues = res.body;
      if (res.status == 200) {
        this.openPdfInNewTab(listValues.join(""));
      }
      this.spinner.hide();
    });
  }

  openPdfInNewTab(base64String: string) {
    const binaryString = window.atob(base64String);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Open PDF in new tab
    window.open(url, '_blank');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContentService } from '../../services/content/content.service';
import { NotificationService } from '../../services/toastService/toast.service';
import { Content } from '../../common/models/content';
import { CommonModule } from '@angular/common';

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
    private router: Router,
    private toastr: NotificationService,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {

    this.contentService.GetContent(0).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });


    this.contentService.GetChildSection(0).subscribe(res => {
      this.dropdownValue = res.body;
      this.spinner.hide();
    });
  }

  signOut() {
    this.router.navigate(['Admin']);
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
    this.toastr.confirmThis("hii", () => {
      this.contentService.DeleteContent(id).subscribe(res => {
        if (res.status == 200) {
          this.contentService.GetContent(+this.sectionForTable).subscribe(res => {
            this.tableValue = res.body;
            this.spinner.hide();
          });
        } else {
          alert("Something went wrong");
        }
      });
    }, () => { });

  }

  viewPDF(file: string) {
    let base64 = this.moveDataUriPrefix(file);
    this.openPdfInNewTab(base64);
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

  moveDataUriPrefix(base64String: string): string {
    const prefixIndex = base64String.indexOf(';base64,');
    if (prefixIndex !== -1) {
      return base64String.slice(prefixIndex + 8); // Skip prefix and comma
    }
    return base64String;
  }

}

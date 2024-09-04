import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/toastService/toast.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environments';

@Component({
    selector: 'app-annual-report',
    standalone: true,
    templateUrl: './annual-report.component.html',
    styleUrl: './annual-report.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class AnnualReportComponent implements OnInit {

    tableValue: any = [];
    constructor(private contentService: ContentService,
      private toastr: NotificationService,
      private spinner: NgxSpinnerService
    ) {

    }

    ngOnInit(): void {
        this.contentService.GetContent(5).subscribe(res => {
            this.tableValue = res.body;
          });
    }

  viewPDF(file: string) {
    let listValues: string[] = [];
    this.contentService.GetViewFile(file).subscribe(res => {
      listValues = res.body;
      if (res.status == 200) {
        if (listValues == null) {
          this.toastr.showWarning('Can not read files.', 'Warning');
        } else {
          let url = environment.apiAddress + listValues.join("");
          window.open(url , '_blank');
        }
      } else {
        if (listValues == null) {
          this.toastr.showWarning('Please contact to administrator for this file.', 'Warning');
        }
      }
      this.spinner.hide();
    });
  }

  scrollToTopPage() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
}

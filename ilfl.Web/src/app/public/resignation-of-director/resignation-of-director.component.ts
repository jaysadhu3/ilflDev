import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../../services/toastService/toast.service';

@Component({
    selector: 'app-resignation-of-director',
    standalone: true,
    templateUrl: './resignation-of-director.component.html',
    styleUrl: './resignation-of-director.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class ResignationOfDirectorComponent {

    tableValue: any = [];
    constructor(private contentService: ContentService,
      private spinner: NgxSpinnerService,
      private toastr: NotificationService) {

    }

    ngOnInit(): void {
      this.contentService.GetContent(14).subscribe(res => {
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

import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content/content.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../../services/toastService/toast.service';
import { environment } from '../../../environments/environments';

@Component({
    selector: 'app-transfer-of-shares-to-iepf',
    standalone: true,
    templateUrl: './transfer-of-shares-to-iepf.component.html',
    styleUrl: './transfer-of-shares-to-iepf.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class TransferOfSharesToIEPFComponent {

    shareTransferred: any = [];
    shareToBeTransferred: any = [];
    constructor(private contentService: ContentService,
      private spinner: NgxSpinnerService,
      private toastr: NotificationService) {

    }

    ngOnInit(): void {
      this.contentService.GetContent(27).subscribe(res => {
          this.shareTransferred = res.body;
        });
        
      this.contentService.GetContent(28).subscribe(res => {
        this.shareToBeTransferred = res.body;
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

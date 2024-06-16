import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { HeaderComponent } from "../../common/header/header.component";
import { PageContentService } from '../../services/pageContent/page-content.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../../services/toastService/toast.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
    imports: [CommonModule, HeaderComponent]
})
export class ContactUsComponent {
    html: string = '';

    constructor(private pageContentService: PageContentService,
        private spinner: NgxSpinnerService,
        private toastr: NotificationService) {
        this.pageContentService.GetPageContent(3).subscribe(res => {
            if (res != null && res != undefined && res.body != '' && res.body != null && res.body != undefined) {
                let content = res.body;
                if (content[0].ifpcHtmlContent != undefined) {
                    this.html = content[0].ifpcHtmlContent;
                } else {
                    this.html = '';
                }
            } else {
                this.html = '';
            }
        });
        this.spinner.hide();
    }

}

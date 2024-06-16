import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { NgxSpinnerService } from 'ngx-spinner';
import { ContentService } from '../../services/content/content.service';
import { NotificationService } from '../../services/toastService/toast.service';
import { PageContentService } from '../../services/pageContent/page-content.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [CommonModule, HeaderComponent]
})
export class AboutComponent {
    html: string = '';

    constructor(private pageContentService: PageContentService,
        private spinner: NgxSpinnerService,
        private toastr: NotificationService) {
        this.pageContentService.GetPageContent(2).subscribe(res => {
            if (res != null && res != undefined && res.body != '' && res.body != null && res.body != undefined) {
                let content = res.body;
                console.log(content[0].ifpcHtmlContent);
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

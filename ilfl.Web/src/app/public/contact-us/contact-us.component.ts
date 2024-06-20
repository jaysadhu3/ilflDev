import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { HeaderComponent } from "../../common/header/header.component";
import { PageContentService } from '../../services/pageContent/page-content.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from '../../services/toastService/toast.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
    imports: [CommonModule, HeaderComponent]
})
export class ContactUsComponent {
    html1: string | SafeHtml = '';
    html2: string | SafeHtml = '';
    html3: string | SafeHtml = '';
    html4: string | SafeHtml = '';
    html5: string | SafeHtml = '';
    html6: string | SafeHtml = '';
    html7: string | SafeHtml = '';

    constructor(private pageContentService: PageContentService,
        private spinner: NgxSpinnerService,
        private sanitizer: DomSanitizer,
        private toastr: NotificationService) {
        this.pageContentService.GetPageContent(3).subscribe(res => {
            if (res != null && res != undefined && res.body != '' && res.body != null && res.body != undefined) {
                let content = res.body;
                if(content[0].ifpcContent1 != '' && content[0].ifpcContent1 != '<p></p>'){
                    this.html1 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent1);
                }
                if(content[0].ifpcContent2 != '' && content[0].ifpcContent2 != '<p></p>'){
                    this.html2 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent2);
                }
                if(content[0].ifpcContent3 != '' && content[0].ifpcContent3 != '<p></p>'){
                    this.html3 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent3);
                }
                if(content[0].ifpcContent4 != '' && content[0].ifpcContent4 != '<p></p>'){
                    this.html4 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent4);
                }
                if(content[0].ifpcContent5 != '' && content[0].ifpcContent5 != '<p></p>'){
                    this.html5 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent5);
                }
                if(content[0].ifpcContent6 != '' && content[0].ifpcContent6 != '<p></p>'){
                    this.html6 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent6);
                }
                if(content[0].ifpcContent7 != '' && content[0].ifpcContent7 != '<p></p>'){
                    this.html7 = this.sanitizer.bypassSecurityTrustHtml(content[0].ifpcContent7);
                }
            }
        });
        this.spinner.hide();
    }

}

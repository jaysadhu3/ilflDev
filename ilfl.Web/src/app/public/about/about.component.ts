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
    html1: string = '';
    html2: string = '';
    html3: string = '';
    html4: string = '';
    html5: string = '';
    html6: string = '';
    html7: string = '';
    blank: string = '<p></p>';

    constructor(private pageContentService: PageContentService,
        private spinner: NgxSpinnerService,
        private toastr: NotificationService) {
        this.pageContentService.GetPageContent(2).subscribe(res => {
            if (res != null && res != undefined && res.body != '' && res.body != null && res.body != undefined) {
                let content = res.body;
                this.html1 = content[0].ifpcContent1;
                this.html2 = content[0].ifpcContent2;
                this.html3 = content[0].ifpcContent3;
                this.html4 = content[0].ifpcContent4;
                this.html5 = content[0].ifpcContent5;
                this.html6 = content[0].ifpcContent6;
                this.html7 = content[0].ifpcContent7;

            }
        });
        this.spinner.hide();
    }

}

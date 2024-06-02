import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { ContentService } from '../../services/content/content.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SectionService } from '../../services/section/section.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-investors-relations',
    standalone: true,
    templateUrl: './investors-relations.component.html',
    styleUrl: './investors-relations.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class InvestorsRelationsComponent {

    subSelectedMenuValue: any = null;
    constructor(private sectionService: SectionService,
        private spinner: NgxSpinnerService) {
        

    this.sectionService.GetChildSection(4).subscribe(res => {
        this.subSelectedMenuValue = res.body;
        this.spinner.hide();
      });
    }

}

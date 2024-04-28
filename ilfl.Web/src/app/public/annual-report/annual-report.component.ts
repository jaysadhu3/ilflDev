import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-annual-report',
    standalone: true,
    templateUrl: './annual-report.component.html',
    styleUrl: './annual-report.component.css',
    imports: [HeaderComponent]
})
export class AnnualReportComponent {

}

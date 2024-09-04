import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-corporate-overview',
    standalone: true,
    templateUrl: './corporate-overview.component.html',
    styleUrl: './corporate-overview.component.css',
    imports: [HeaderComponent]
})
export class CorporateOverviewComponent {


    scrollToTopPage() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

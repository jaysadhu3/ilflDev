import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-unclaimed-dividend',
    standalone: true,
    templateUrl: './unclaimed-dividend.component.html',
    styleUrl: './unclaimed-dividend.component.css',
    imports: [HeaderComponent]
})
export class UnclaimedDividendComponent {

}

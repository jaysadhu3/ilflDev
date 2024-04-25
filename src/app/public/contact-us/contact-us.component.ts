import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-contact-us',
    standalone: true,
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
    imports: [HeaderComponent]
})
export class ContactUsComponent {

}

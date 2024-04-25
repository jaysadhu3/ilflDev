import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeaderComponent]
})
export class AboutComponent {

}

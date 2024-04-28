import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-e-voting-results',
    standalone: true,
    templateUrl: './e-voting-results.component.html',
    styleUrl: './e-voting-results.component.css',
    imports: [HeaderComponent]
})
export class EVotingResultsComponent {

}

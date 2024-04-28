import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";

@Component({
    selector: 'app-board-of-directors',
    standalone: true,
    templateUrl: './board-of-directors.component.html',
    styleUrl: './board-of-directors.component.css',
    imports: [HeaderComponent]
})
export class BoardOfDirectorsComponent {

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-page-content',
  standalone: true,
  imports: [],
  templateUrl: './save-page-content.component.html',
  styleUrl: './save-page-content.component.css'
})
export class SavePageContentComponent {

  constructor(private router: Router) {

  }
  signOut() {
    this.router.navigate(['Admin']);
  }
}

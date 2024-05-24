import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-save-page-content',
  standalone: true,
  imports: [],
  templateUrl: './save-page-content.component.html',
  styleUrl: './save-page-content.component.css'
})
export class SavePageContentComponent {

  constructor(private authService: AuthService) {

  }
  signOut() {
    this.authService.signOut();
  }
}

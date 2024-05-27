import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-save-page-content',
  standalone: true,
  imports: [HeaderComponent],
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

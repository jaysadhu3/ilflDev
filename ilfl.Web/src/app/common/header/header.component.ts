import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  manuValue: any = null;
  subManuValue: any = null;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  signOut() {
    this.authService.signOut();
  }
}

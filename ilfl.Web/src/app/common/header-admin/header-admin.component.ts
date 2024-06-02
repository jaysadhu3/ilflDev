import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {

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

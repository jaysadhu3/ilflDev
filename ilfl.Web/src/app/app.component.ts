import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../environments/environments';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private metaService: Meta) {

  }

  ngOnInit(): void {
    this.addTag();
  }

  title = 'Unclaimed Dividend | Inox Leasing and Finance Limited (ILFL)';

  addTag() {
    let FrontEndUrl = window.location.origin; 
    let BackEndUrl = environment.apiAddress; 
    this.metaService.addTag({ 
      httpEquiv: 'Content-Security-Policy', 
      content: "script-src 'strict-dynamic' 'nonce-k6hT0Qc1zR7fW3vD' 'unsafe-inline' http: https:; script-src-elem 'nonce-k6hT0Qc1zR7fW3vD' 'unsafe-inline' " + FrontEndUrl + " ; style-src  " + FrontEndUrl + " https://fonts.googleapis.com https://cdn.jsdelivr.net/ https://cdnjs.cloudflare.com/ https://cdn.jsdelivr.net/ 'unsafe-inline'; font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com https://cdn.jsdelivr.net/ https://cdnjs.cloudflare.com/ https://cdn.jsdelivr.net/; base-uri " + FrontEndUrl + "; frame-src 'self' https://api.ilfl.co.in/api/ https://www.google.com/ ; object-src 'none' ; connect-src 'self' " + BackEndUrl +" ;" 
    });
  }
}

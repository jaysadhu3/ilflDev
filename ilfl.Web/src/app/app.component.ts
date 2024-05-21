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
    let wssUrl = environment.apiAddress;
    wssUrl = wssUrl.replace('https://','wss://');
    let FrontEndUrl = window.location.origin; 
    let BackEndUrl = environment.apiAddress; 
    this.metaService.addTag({ 
      httpEquiv: 'Content-Security-Policy', 
      content: "script-src 'nonce-k6hT0Qc1zR7fW3vD' 'unsafe-inline' ; script-src-elem 'nonce-k6hT0Qc1zR7fW3vD' 'unsafe-inline' " + FrontEndUrl + " ; default-src 'self' " + BackEndUrl + " ; img-src 'self' data: https://cdn.jsdelivr.net/npm/emoji-datasource-twitter@14.0.0/img/twitter/sheets-256/64.png ; style-src   " + FrontEndUrl + " https://fonts.googleapis.com 'unsafe-inline' ; font-src 'self' data: https://fonts.gstatic.com ; base-uri " + FrontEndUrl + "; object-src 'none' ; connect-src 'self'  " + BackEndUrl +" "+ wssUrl + " ;" 
    });
  }
}

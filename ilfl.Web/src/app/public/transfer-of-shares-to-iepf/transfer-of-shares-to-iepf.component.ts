import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content/content.service';

@Component({
    selector: 'app-transfer-of-shares-to-iepf',
    standalone: true,
    templateUrl: './transfer-of-shares-to-iepf.component.html',
    styleUrl: './transfer-of-shares-to-iepf.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class TransferOfSharesToIEPFComponent {

    tableValue: any = [];
    tableValue2: any = [];
    constructor(private contentService: ContentService) {

    }

    ngOnInit(): void {
      this.contentService.GetContent(10).subscribe(res => {
          this.tableValue = res.body;
          console.log(res.body);
        });
        this.contentService.GetContent(11).subscribe(res => {
            this.tableValue2 = res.body;
            console.log(res.body);
          });
    }

  viewPDF(file: string) {
    let base64 = this.moveDataUriPrefix(file);
    this.openPdfInNewTab(base64);
  }

  openPdfInNewTab(base64String: string) {
    const binaryString = window.atob(base64String);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);

    for (let i = 0; i < binaryLen; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // Open PDF in new tab
    window.open(url, '_blank');
  }

  moveDataUriPrefix(base64String: string): string {
    const prefixIndex = base64String.indexOf(';base64,');
    if (prefixIndex !== -1) {
        return base64String.slice(prefixIndex + 8); // Skip prefix and comma
    }
    return base64String;
  }
}

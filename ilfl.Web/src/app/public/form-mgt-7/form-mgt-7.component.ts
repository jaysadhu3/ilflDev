import { Component } from '@angular/core';
import { HeaderComponent } from "../../common/header/header.component";
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-form-mgt-7',
    standalone: true,
    templateUrl: './form-mgt-7.component.html',
    styleUrl: './form-mgt-7.component.css',
    imports: [HeaderComponent, CommonModule]
})
export class FormMgt7Component {

    tableValue: any = [];
    constructor(private contentService: ContentService) {

    }

    ngOnInit(): void {
        this.contentService.GetContent(13).subscribe(res => {
            this.tableValue = res.body;
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

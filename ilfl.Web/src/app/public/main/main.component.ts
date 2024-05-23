import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SectionService } from '../../services/section/section.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  activeId: number = 1;
  content = '';
  manuValue: any = null;
  tableValue: any = [];
  directorValue: any = [];
  allSection: any = [];
  subManuValue: any = null;
  constructor(private contentService: ContentService,
    private sectionService: SectionService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.sectionService.GetParentSection().subscribe(res => {
      this.manuValue = res.body;
      this.spinner.hide();
    });

    this.sectionService.GetChildSection(0).subscribe(res => {
      this.subManuValue = res.body;
      this.spinner.hide();
    });

    this.sectionService.GetAllSection().subscribe(res => {
      if (res.status == 200) {
        this.allSection = res.body;
        this.spinner.hide();
      }
    });

    this.contentService.GetDirectorDetail().subscribe(res => {
      this.directorValue = res.body;
      this.spinner.hide();
    });
  }

  subManuList(id: number) {
    this.sectionService.GetChildSection(id).subscribe(res => {
      this.subManuValue = res.body;
      this.spinner.hide();
    });
  }

  changeContent(id: number) {
    this.activeId = id;
    this.contentService.GetContent(id).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });
  }

  viewPDF(file: string) {
    let listValues: string[] = [];
    this.contentService.GetViewFile(file).subscribe(res => {
      listValues = res.body;
      if (res.status == 200) {
        this.openPdfInNewTab(listValues.join(""));
      }
      this.spinner.hide();
    });
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
}

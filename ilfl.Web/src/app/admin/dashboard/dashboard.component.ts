import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Content } from '../../common/models/content';
import { fileType } from '../../common/constants';
import { ContentService } from '../../services/content/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  contentForm: FormGroup;
  content: Content = new Content();
  base64File: string = '';
  tableValue: any = null;
  sectionForTable: string = '';

  constructor(private formbuilder: FormBuilder,
    private contentService: ContentService,
    private router: Router
  ) {
    this.contentForm = this.formbuilder.group({
      displayName: [null, [Validators.required]],
      section: [null, [Validators.required]],
      file: [null, [Validators.required]]
    });

  }

  ngOnInit(): void {

  }

  processSave() {
    if (this.contentForm.valid) {
      this.content.IfctdisplayName = this.contentForm.controls['displayName'].value;
      this.content.Ifctsection = this.contentForm.controls['section'].value;
      this.content.Ifctfile = this.base64File;

      this.contentService.AddContent(this.content).subscribe(res => {
        if (res.status === 201) {
          if (res.body) {
            alert('Data saved');
            this.contentForm.reset();
          } else {
            alert("Details are wrong");
          }
        }
      });
    } else {
      alert("Somthing wrong");
    }
  }

  async onFileSelection(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filename = file.name;

      if (!fileType.exec(filename)) {
        this.contentForm.controls['file'].setValue(undefined);
        this.base64File = '';
        return;
      }

      const base64Data = await this.fileToBase64(file);
      this.base64File = base64Data;
    }
  }

  async fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString() ?? '';
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  ViewTable(event: Event) {
    let section = (event.target as HTMLInputElement).value;
    this.sectionForTable = section;
    if (section != null && section != '') {
      this.contentService.GetContent(section).subscribe(res => {
        this.tableValue = res.body;
        console.log(this.tableValue);
      });
    } else {
      this.tableValue = null;
    }
  }

  deleteValue(id: number) {
    this.contentService.DeleteContent(id).subscribe(res => {
      if (res.status == 200) {
        this.contentService.GetContent(this.sectionForTable).subscribe(res => {
          this.tableValue = res.body;
        });
      } else {
        alert("Something went wrong");
      }
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

  signOut() {
    this.router.navigate(['']);
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { fileType } from '../../common/constants';
import { Content } from '../../common/models/content';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-save-content',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './save-content.component.html',
  styleUrl: './save-content.component.css'
})
export class SaveContentComponent {
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

    this.contentService.GetContent('all').subscribe(res => {
      this.tableValue = res.body;
      console.log(this.tableValue);
    });
  }

  processSave() {
    if (this.contentForm.valid) {
      this.content.IfctdisplayName = this.contentForm.controls['displayName'].value;
      this.content.Ifctsection = this.contentForm.controls['section'].value;
      this.content.Ifctfile = this.base64File;

      this.contentService.AddContent(this.content).subscribe(res => {
        if (res.status === 201) {
          if (res.body) {
            this.router.navigate(['Admin/Dashboard']);
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

  signOut() {
    this.router.navigate(['']);
  }
  backDashboard() {
    this.router.navigate(['Admin/Dashboard']);
  }
}

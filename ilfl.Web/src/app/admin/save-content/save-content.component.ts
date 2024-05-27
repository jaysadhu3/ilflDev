import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { fileType } from '../../common/constants';
import { Content } from '../../common/models/content';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SectionService } from '../../services/section/section.service';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  selector: 'app-save-content',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    HeaderComponent],
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
  dropdownValue: any = null;
  finalForm = new FormData();

  constructor(private formbuilder: FormBuilder,
    private contentService: ContentService,
    private sectionService: SectionService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService
  ) {
    this.contentForm = this.formbuilder.group({
      displayName: [null, [Validators.required]],
      section: [null, [Validators.required]],
      description: [null],
      file: [null, [Validators.required]]
    });

  }

  ngOnInit(): void {

    this.contentService.GetContent(0).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });

    this.sectionService.GetChildSection(0).subscribe(res => {
      this.dropdownValue = res.body;
      this.spinner.hide();
    });
  }

  processSave() {
    if (this.contentForm.valid) {
      this.content.IfctdisplayName = this.contentForm.controls['displayName'].value;
      this.content.Ifctsection = this.contentForm.controls['section'].value;
      this.content.Ifctfile = this.base64File;

      this.finalForm.append('displayName', this.contentForm.controls['displayName'].value);
      this.finalForm.append('section', this.contentForm.controls['section'].value);
      this.finalForm.append('description', this.contentForm.controls['description'].value);

      this.contentService.AddContent(this.finalForm).subscribe((res:any) => {
        if (res) {
          this.toastr.success("Details saved successfully", "Success");
          this.spinner.hide();
          this.router.navigate(['Admin/ViewContent']);
        } else {
          this.spinner.hide();
          if (this.contentForm.controls['displayName'].value == '' || this.contentForm.controls['displayName'].value == null) {
            this.toastr.error("Display name is missing", "Information Error");
          } else {
            this.toastr.error("File name is already exist", "Information Error");
          }
        }
      });
    } else {

      this.spinner.hide();
      this.toastr.error("Please fill all the required fields.", "Validation Error");
    }
  }

  async onFileSelection(event: any) {
    
    this.finalForm.delete('file');
    const file = event.target.files[0];
    if (file) {
      const filename = file.name;

      if (!fileType.exec(filename)) {
        this.contentForm.controls['file'].setValue(undefined);
        this.toastr.error("Only PDF file format is allowed.", "File Format Error");
        this.base64File = '';
        return;
      } else {
        this.finalForm.append('file', file, file.name);
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

  backDashboard() {
    this.router.navigate(['Admin/ViewContent']);
  }
}

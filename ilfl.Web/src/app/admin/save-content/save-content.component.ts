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

@Component({
  selector: 'app-save-content',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule],
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

  constructor(private formbuilder: FormBuilder,
    private contentService: ContentService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService
  ) {
    this.contentForm = this.formbuilder.group({
      displayName: [null, [Validators.required]],
      section: [null, [Validators.required]],
      file: [null, [Validators.required]]
    });

  }

  ngOnInit(): void {

    this.contentService.GetContent(0).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });

    this.contentService.GetChildSection(0).subscribe(res => {
      this.dropdownValue = res.body;
      this.spinner.hide();
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
            this.toastr.success("Details saved successfully", "success");

            this.spinner.hide();
            this.router.navigate(['Admin/ViewContent']);
          } else {

            this.spinner.hide();
            this.toastr.error("Something wrong with information, Please check and submit again", "Information Error");
          }
        }
      });
    } else {

      this.spinner.hide();
      this.toastr.error("Please fill all the required fields.", "Validation Error");
    }
  }

  async onFileSelection(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filename = file.name;

      if (!fileType.exec(filename)) {
        this.contentForm.controls['file'].setValue(undefined);
        this.toastr.error("Only PDF file format is allowed.", "File Format Error");
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

  signOut() {
    this.router.navigate(['']);
  }
  backDashboard() {
    this.router.navigate(['Admin/ViewContent']);
  }
}
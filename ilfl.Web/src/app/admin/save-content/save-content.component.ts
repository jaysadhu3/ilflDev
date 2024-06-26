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
import { HeaderAdminComponent } from '../../common/header-admin/header-admin.component';

@Component({
  selector: 'app-save-content',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    HeaderAdminComponent],
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
  dropdownValue: any = [];
  finalForm = new FormData();
  editableValue: any;

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
      file: [null]
    });

  }

  ngOnInit(): void {

    this.contentService.GetContent(0).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });

    this.sectionService.GetAllSection().subscribe(res => {
      let menuitemList = res.body;
      let selectedList: any[] = [];
      menuitemList.forEach((element: any) => {
        if (!element.ifssisPageEditable) {
          selectedList.push(element);
        }
      });
      this.dropdownValue = selectedList.sort((a, b) => a.ifssid - b.ifssid);
      this.spinner.hide();

      this.editableValue = sessionStorage.getItem('editId');
      if (this.editableValue != null) {
        let id = +this.editableValue;
        this.contentService.GetContentById(id).subscribe(res => {
          let result = res.body;
          this.contentForm.controls['displayName'].setValue(result.ifctdisplayName);
          this.contentForm.controls['section'].setValue(result.ifctIfss);
          this.contentForm.controls['description'].setValue(result.ifctdescription);
        });
        this.spinner.hide();
      } else {
        this.contentForm.controls['file'].setValidators(Validators.required);
        this.contentForm.controls['file'].updateValueAndValidity();
      }
    });
  }

  processSave() {
    if (this.contentForm.valid) {
      this.finalForm.append('displayName', this.contentForm.controls['displayName'].value);
      this.finalForm.append('section', this.contentForm.controls['section'].value);
      if (this.contentForm.controls['description'].value == null || this.contentForm.controls['description'].value == '') {
        this.finalForm.append('description', '');
      } else {
        this.finalForm.append('description', this.contentForm.controls['description'].value);
      }
      if (this.editableValue == null) {
        this.contentService.AddContent(this.finalForm).subscribe((res: any) => {
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
        this.finalForm.append('id', this.editableValue);
        this.contentService.UpdateContent(this.finalForm).subscribe((res: any) => {
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
      }
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

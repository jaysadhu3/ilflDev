import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from '../../common/models/content';
import { ContentService } from '../../services/content/content.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SectionService } from '../../services/section/section.service';
import { AuthService } from '../../services/auth/auth.service';
import { HeaderAdminComponent } from '../../common/header-admin/header-admin.component';
import { SectionMenu } from '../../common/models/SectionMenu';

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
  templateUrl: './save-page-content.component.html',
  styleUrl: './save-page-content.component.css'
})
export class SavePageContentComponent {
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
    });
  }
  signOut() {
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.sectionService.GetChildSection(0).subscribe(res => {
      let menuitemList = res.body as SectionMenu[];
      // console.log(menuitemList);
      // this.dropdownValue = menuitemList.filter(x=> x.ifssId == 1 || x.ifssId == 2 || x.ifssId == 3);
      this.dropdownValue = res.body;
      this.spinner.hide();
    });
  }

  processSave() {
    if (this.contentForm.valid) {
      this.content.IfctdisplayName = this.contentForm.controls['displayName'].value;
      this.content.Ifctsection = this.contentForm.controls['section'].value;
      this.finalForm.append('displayName', this.contentForm.controls['displayName'].value);
      this.finalForm.append('section', this.contentForm.controls['section'].value);
      if( this.contentForm.controls['description'].value == null || this.contentForm.controls['description'].value == '') {
        this.finalForm.append('description','');
      } else {
        this.finalForm.append('description',this.contentForm.controls['description'].value);
      }

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

  backDashboard() {
    this.router.navigate(['Admin/ViewContent']);
  }
}

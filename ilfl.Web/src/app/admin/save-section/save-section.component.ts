import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from '../../common/models/content';
import { ContentService } from '../../services/content/content.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Section } from '../../common/models/Section';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-save-section',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './save-section.component.html',
  styleUrl: './save-section.component.css'
})
export class SaveSectionComponent implements OnInit{
  sectionForm: FormGroup;
  section: Section = new Section();
  base64File: string = '';
  tableValue: any = null;
  sectionForTable: string = '';
  dropdownValue: any = null;

  constructor(private formbuilder: FormBuilder,
    private contentService: ContentService,
    private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService
  ) {
    this.sectionForm = this.formbuilder.group({
      menuName: [null, [Validators.required]],
      parentId: [null]
    });

  }

  ngOnInit(): void {

    this.contentService.GetContent(0).subscribe(res => {
      this.tableValue = res.body;
      this.spinner.hide();
    });

    this.contentService.GetParentSection().subscribe(res => {
      this.dropdownValue = res.body;
      this.spinner.hide();
    });
  }

  processSave() {
    console.log('in');
    if (this.sectionForm.valid) {
      console.log('valid');
      this.section.ifssname = this.sectionForm.controls['menuName'].value;
      this.section.ifssparent = this.sectionForm.controls['parentId'].value;

      this.contentService.AddSection(this.section).subscribe(res => {
        if (res.status === 201) {
          if (res.body) {
            this.router.navigate(['Admin/ViewMenu']);
            this.toastr.success("Details saved successfully", "success");
            this.sectionForm.reset();
          } else {
            this.toastr.error("Please fill all the required fields.", "Validation Error");
          }
        }
      });
    } else {this.toastr.error("Please fill all the required fields.", "Validation Error");
    }
  }

  signOut() {
    this.router.navigate(['']);
  }
  backDashboard() {
    this.router.navigate(['Admin/ViewMenu']);
  }
}

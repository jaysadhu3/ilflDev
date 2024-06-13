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
import { Editor, NgxEditorModule, Toolbar, toDoc, toHTML } from 'ngx-editor';
import { PageContent } from '../../common/models/pageContent';
import { PageContentService } from '../../services/pageContent/page-content.service';

@Component({
  selector: 'app-save-content',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule,
    NgxEditorModule,
    HeaderAdminComponent],
  providers: [HttpClientModule],
  templateUrl: './save-page-content.component.html',
  styleUrl: './save-page-content.component.css'
})
export class SavePageContentComponent {
  editor: Editor = new Editor();
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  html: '' | undefined;
  contentForm: FormGroup;
  pageContent: PageContent = new PageContent();
  base64File: string = '';
  tableValue: any = null;
  sectionForTable: string = '';
  dropdownValue: any = [];
  finalForm = new FormData();

  constructor(private formbuilder: FormBuilder,
    private sectionService: SectionService,
    private authService: AuthService,
    private pageContentService: PageContentService,
    private router: Router,
    private toastr: ToastrService, private spinner: NgxSpinnerService
  ) {
    this.contentForm = this.formbuilder.group({
      section: [null, [Validators.required]],
      content: [null],
    });
  }
  signOut() {
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.sectionService.GetAllSection().subscribe(res => {
      let menuitemList = res.body;
      menuitemList.forEach((element: any) => {
        if (element.ifssisPageEditable) {
          this.dropdownValue.push(element);
        }
      });
      this.spinner.hide();
    });
  }

  processSave() {
    if (this.contentForm.valid) {
      this.pageContent.menuId = this.contentForm.controls['section'].value;
      this.pageContent.htmlPageContent = toHTML(this.contentForm.controls['content'].value);
      console.log(this.pageContent);
      this.pageContentService.SavePageContent(this.pageContent).subscribe((res: any) => {
        if (res) {
          this.toastr.success("Details saved successfully", "Success");
          this.spinner.hide();
          this.router.navigate(['Admin/ViewContent']);
        } else {
          this.spinner.hide();
          this.toastr.error("Please fill all the required fields.", "Information Error");
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

  SetSelectedValue() {
    if (this.contentForm.controls['section'].value > 0) {
      this.pageContentService.GetPageContent(this.contentForm.controls['section'].value).subscribe(res => {
        if (res != null && res != undefined && res.body != '' && res.body != null && res.body != undefined) {
          let content = res.body;
          if (content[0].ifpcHtmlContent != undefined) {
            let htmlValue = content[0].ifpcHtmlContent;
            this.editor.setContent(htmlValue);
          } else {
            this.editor.setContent('');
          }
        } else {
          this.editor.setContent('');
        }
      });
      this.spinner.hide();
    }

  }
}


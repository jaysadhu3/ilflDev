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
  editor2: Editor = new Editor();
  editor3: Editor = new Editor();
  editor4: Editor = new Editor();
  editor5: Editor = new Editor();
  editor6: Editor = new Editor();
  editor7: Editor = new Editor();
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
      content1: ['<p></p>'],
      content2: ['<p></p>'],
      content3: ['<p></p>'],
      content4: ['<p></p>'],
      content5: ['<p></p>'],
      content6: ['<p></p>'],
      content7: ['<p></p>'],
    });
  }
  signOut() {
    this.authService.signOut();
  }
  ngOnInit(): void {
    this.sectionService.GetAllSection().subscribe(res => {
      let menuitemList = res.body;
      let selectedList: any[] = [];
      menuitemList.forEach((element: any) => {
        if (element.ifssisPageEditable) {
          selectedList.push(element);
        }
      });
      this.dropdownValue = selectedList.sort((a, b) => a.ifssid - b.ifssid);
      this.spinner.hide();
    });
  }

  processSave() {
    if (this.contentForm.valid) {
      this.pageContent.menuId = this.contentForm.controls['section'].value;
      this.pageContent.IfpcContent1 = this.contentForm.controls['content1'].value;
      this.pageContent.IfpcContent2 = this.contentForm.controls['content2'].value;
      this.pageContent.IfpcContent3 = this.contentForm.controls['content3'].value;
      this.pageContent.IfpcContent4 = this.contentForm.controls['content4'].value;
      this.pageContent.IfpcContent5 = this.contentForm.controls['content5'].value;
      this.pageContent.IfpcContent6 = this.contentForm.controls['content6'].value;
      this.pageContent.IfpcContent7 = this.contentForm.controls['content7'].value;
      this.pageContentService.SavePageContent(this.pageContent).subscribe((res: any) => {
        if (res) {
          this.toastr.success("Details saved successfully", "Success");
          this.spinner.hide();
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
          this.editor.setContent(content[0].ifpcContent1);
          this.editor2.setContent(content[0].ifpcContent2);
          this.editor3.setContent(content[0].ifpcContent3);
          this.editor4.setContent(content[0].ifpcContent4);
          this.editor5.setContent(content[0].ifpcContent5);
          this.editor6.setContent(content[0].ifpcContent6);
          this.editor7.setContent(content[0].ifpcContent7);
        } else {
          this.editor.setContent('');
          this.editor2.setContent('');
          this.editor3.setContent('');
          this.editor4.setContent('');
          this.editor5.setContent('');
          this.editor6.setContent('');
          this.editor7.setContent('');
        }
      });
      this.spinner.hide();
    }

  }
}


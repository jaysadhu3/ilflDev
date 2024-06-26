import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SaveContentComponent } from './save-content/save-content.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SaveSectionComponent } from './save-section/save-section.component';
import { SavePageContentComponent } from './save-page-content/save-page-content.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';

const routes: Routes = [
  {
      path: '', children: [
          { path: 'Dashboard', component: DashboardComponent },
          { path: 'SaveContent', component: SaveContentComponent },
          { path: 'AddMenu', component: SaveSectionComponent },
          { path: 'ViewContent', component: ViewContentComponent },
          { path: 'ViewMenu', component: ViewMenuComponent },
          { path: 'SavePageContent', component: SavePageContentComponent },
      ]
  },
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:  [
    RouterModule
  ],
  providers: [
    FormGroupDirective,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }

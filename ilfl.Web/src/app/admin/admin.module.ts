import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SaveContentComponent } from './save-content/save-content.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({

    })
  ],
  providers: [
    FormGroupDirective,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }

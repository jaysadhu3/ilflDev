import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [],
    imports:[ReactiveFormsModule, FormsModule,HttpClientModule],
    providers:[HttpClientModule],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
    declarations: [
    ],
    imports: [
        RouterOutlet, 
        ReactiveFormsModule, 
        FormsModule, 
        HttpClientModule, 
        NgxUiLoaderModule, 
        NgxUiLoaderHttpModule.forRoot({ 
            showForeground: true 
        })],
    providers: [
        HttpClientModule
    ],
    bootstrap: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule { }
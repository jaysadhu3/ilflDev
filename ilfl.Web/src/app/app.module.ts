import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { HttpRequestInterceptor } from "./interceptor/interceptor";

@NgModule({
    declarations: [
    ],
    imports: [
        RouterOutlet,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule],
    providers: [
        HttpClientModule,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        }
    ],
    bootstrap: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule { }
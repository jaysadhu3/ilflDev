import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HttpRequestInterceptor } from "./interceptor/interceptor";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { routes } from "./app.routes";

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forRoot(routes),
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
        }, {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    exports: [RouterModule],
    bootstrap: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule { }
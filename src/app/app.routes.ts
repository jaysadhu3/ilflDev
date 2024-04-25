import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { AboutComponent } from './public/about/about.component';

export const routes: Routes = [
    { path : '' , component : HomeComponent},
    { path : 'Home' , component : HomeComponent},
    { path : 'Contact-Us' , component : ContactUsComponent},
    { path : 'About' , component : AboutComponent}
];

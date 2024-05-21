import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { SaveContentComponent } from './admin/save-content/save-content.component';
import { SaveSectionComponent } from './admin/save-section/save-section.component';
import { MainComponent } from './public/main/main.component';
import { ViewContentComponent } from './admin/view-content/view-content.component';
import { ViewMenuComponent } from './admin/view-menu/view-menu.component';
import { SavePageContentComponent } from './admin/save-page-content/save-page-content.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'Admin', component: LoginComponent },
    {
        path: 'Admin', children: [
            { path: 'Dashboard', component: DashboardComponent },
            { path: 'AddContent', component: SaveContentComponent },
            { path: 'AddMenu', component: SaveSectionComponent },
            { path: 'ViewContent', component: ViewContentComponent },
            { path: 'ViewMenu', component: ViewMenuComponent },
            { path: 'SavePageContent', component: SavePageContentComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

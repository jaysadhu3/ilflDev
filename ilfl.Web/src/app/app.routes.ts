import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { SaveContentComponent } from './admin/save-content/save-content.component';
import { SaveSectionComponent } from './admin/save-section/save-section.component';
import { MainComponent } from './public/main/main.component';
import { ViewContentComponent } from './admin/view-content/view-content.component';
import { ViewMenuComponent } from './admin/view-menu/view-menu.component';
import { SavePageContentComponent } from './admin/save-page-content/save-page-content.component';
import { adminAuthGuard } from './guards/admin-auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
    },
    { 
        path: 'Admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [adminAuthGuard]
    }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ContactUsComponent } from './public/contact-us/contact-us.component';
import { AboutComponent } from './public/about/about.component';
import { InvestorsRelationsComponent } from './public/investors-relations/investors-relations.component';
import { AnnualReportComponent } from './public/annual-report/annual-report.component';
import { AuditedAccountsOfSubsidiariesComponent } from './public/audited-accounts-of-subsidiaries/audited-accounts-of-subsidiaries.component';
import { EVotingResultsComponent } from './public/e-voting-results/e-voting-results.component';
import { NoticeToShareholdersComponent } from './public/notice-to-shareholders/notice-to-shareholders.component';
import { TransferOfSharesToIEPFComponent } from './public/transfer-of-shares-to-iepf/transfer-of-shares-to-iepf.component';
import { UnclaimedDividendComponent } from './public/unclaimed-dividend/unclaimed-dividend.component';
import { CorporateOverviewComponent } from './public/corporate-overview/corporate-overview.component';
import { FormMgt7Component } from './public/form-mgt-7/form-mgt-7.component';
import { BoardOfDirectorsComponent } from './public/board-of-directors/board-of-directors.component';
import { ResignationOfDirectorComponent } from './public/resignation-of-director/resignation-of-director.component';
import { CorporateSocialResponsibilityComponent } from './public/corporate-social-responsibility/corporate-social-responsibility.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { SaveContentComponent } from './admin/save-content/save-content.component';

export const routes: Routes = [
    { path : '' , redirectTo: '/Home', pathMatch: 'full'},
    { path : 'Home' , component : HomeComponent},
    { path : 'Contact-Us' , component : ContactUsComponent},
    { path : 'About' , component : AboutComponent},
    { path : 'Investors-Relations' , component : InvestorsRelationsComponent},
    { path : 'Annual-Report' , component : AnnualReportComponent},
    { path : 'Audited-Accounts-Of-Subsidiaries' , component : AuditedAccountsOfSubsidiariesComponent},
    { path : 'E-Voting-Results' , component : EVotingResultsComponent},
    { path : 'Notice-To-Shareholders' , component : NoticeToShareholdersComponent},
    { path : 'Transfer-Of-Shares-To-iepf' , component : TransferOfSharesToIEPFComponent},
    { path : 'Unclaimed-Dividend' , component : UnclaimedDividendComponent},
    { path : 'Corporate-Overview' , component : CorporateOverviewComponent},
    { path : 'Form-MGT-7' , component : FormMgt7Component},
    { path : 'Board-Of-Directors' , component : BoardOfDirectorsComponent},
    { path : 'Resignation-Of-Director' , component : ResignationOfDirectorComponent},
    { path : 'Corporate-Social-Responsibility' , component : CorporateSocialResponsibilityComponent},
    { path : 'Admin/Dashboard' , component : DashboardComponent},
    { path : 'Admin/AddContent' , component : SaveContentComponent},
    { path : 'Admin' , component : LoginComponent}
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from '../admin/login/login.component';
import { AboutComponent } from './about/about.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { AuditedAccountsOfSubsidiariesComponent } from './audited-accounts-of-subsidiaries/audited-accounts-of-subsidiaries.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporateOverviewComponent } from './corporate-overview/corporate-overview.component';
import { CorporateSocialResponsibilityComponent } from './corporate-social-responsibility/corporate-social-responsibility.component';
import { EVotingResultsComponent } from './e-voting-results/e-voting-results.component';
import { FormMgt7Component } from './form-mgt-7/form-mgt-7.component';
import { HomeComponent } from './home/home.component';
import { InvestorsRelationsComponent } from './investors-relations/investors-relations.component';
import { NoticeToShareholdersComponent } from './notice-to-shareholders/notice-to-shareholders.component';
import { ResignationOfDirectorComponent } from './resignation-of-director/resignation-of-director.component';
import { TransferOfSharesToIEPFComponent } from './transfer-of-shares-to-iepf/transfer-of-shares-to-iepf.component';
import { UnclaimedDividendComponent } from './unclaimed-dividend/unclaimed-dividend.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path : '' , component : HomeComponent},
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
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:  [
    RouterModule
  ],
})
export class PublicModule { }

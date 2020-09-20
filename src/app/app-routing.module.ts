import { LoanComponent } from './loan/loan.component';
import { LoanHistoryComponent } from './loan-history/loan-history.component';
import { GiveBackComponent } from './give-back/give-back.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchQueryUserComponent } from './search-query-user/search-query-user.component';
import { SearchQueryComponent } from './search-query/search-query.component';
import { QueryReportComponent } from './query-report/query-report.component';
import { ConsultBookComponent } from './consult-book/consult-book.component';
import { ConsultMagazineComponent } from './consult-magazine/consult-magazine.component';
import { UserQueryComponent } from './user-query/user-query.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { Pag404Component } from './pag404/pag404.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { BarAdminComponent } from './bar-admin/bar-admin.component';
import { BarUsersComponent } from './bar-users/bar-users.component';

const routes: Routes = [
  { path: '', component: CarouselComponent},
  { path: 'presentacion', component: CarouselComponent},
  { path: 'estadisticas', component: ViewStatisticsComponent},
  { path: 'acercaDe', component: ViewAboutComponent},
  { path: 'admin', component: BarAdminComponent},
  { path: 'admin/CRUDuser', component: UserQueryComponent},
  { path: 'admin/CRUDmagazine', component: ConsultMagazineComponent},
  { path: 'admin/CRUDbook', component: ConsultBookComponent},
  { path: 'admin/report', component: QueryReportComponent},
  { path: 'admin/search', component: SearchQueryComponent},
  { path: 'user', component: BarUsersComponent},
  { path: 'user/search', component: SearchQueryUserComponent},
  { path: 'user/profile', component: ProfileComponent},
  { path: 'user/giveBack', component: GiveBackComponent},
  { path: 'user/loanHistory', component: LoanHistoryComponent},
  { path: 'user/loan', component: LoanComponent},
  { path: 'alerta', component: AlertsComponent},
  { path: '**', component: Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

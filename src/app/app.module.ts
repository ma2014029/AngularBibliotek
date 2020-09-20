import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './component-app/app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { Pag404Component } from './pag404/pag404.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { ViewStatisticsComponent } from './view-statistics/view-statistics.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BarAdminComponent } from './bar-admin/bar-admin.component';
import { BarUsersComponent } from './bar-users/bar-users.component';
import { UserQueryComponent } from './user-query/user-query.component';
import { ConsultMagazineComponent } from './consult-magazine/consult-magazine.component';
import { QueryReportComponent } from './query-report/query-report.component';
import { ConsultBookComponent } from './consult-book/consult-book.component';
import { SearchQueryComponent } from './search-query/search-query.component';
import { SearchQueryUserComponent } from './search-query-user/search-query-user.component';
import { ProfileComponent } from './profile/profile.component';
import { GiveBackComponent } from './give-back/give-back.component';
import { LoanHistoryComponent } from './loan-history/loan-history.component';
import { LoanComponent } from './loan/loan.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    JumbotronComponent,
    Pag404Component,
    ViewAboutComponent,
    ViewStatisticsComponent,
    NavigationBarComponent,
    AlertsComponent,
    BarAdminComponent,
    BarUsersComponent,//
    UserQueryComponent,
    ConsultMagazineComponent,
    QueryReportComponent,
    ConsultBookComponent,
    SearchQueryComponent,
    SearchQueryUserComponent,
    ProfileComponent,
    GiveBackComponent,
    LoanHistoryComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

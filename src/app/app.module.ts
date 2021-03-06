import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { ArticlesComponent } from './articles/articles.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MembersComponent,
    MemberDetailComponent,
    BirthdayComponent,
    ArticlesComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    MediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

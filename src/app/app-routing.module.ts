import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: "/dashboard", pathMatch: "full" },
  { path: 'member/:member.getIdString()', component: MemberDetailComponent },
  { path: 'articles/:article.getUrl()', component: ArticlesComponent },
  { path: 'media', component: MediaComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

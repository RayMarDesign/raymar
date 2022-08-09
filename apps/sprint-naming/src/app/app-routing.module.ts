import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { VotingComponent } from './voting/voting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: SuggestionsComponent },
  { path: 'vote', component: VotingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

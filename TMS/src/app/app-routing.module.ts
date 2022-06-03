import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'info/:id/:type', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

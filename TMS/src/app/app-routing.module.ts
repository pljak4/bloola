import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'info/:id/:type', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySocialsComponent } from './my-socials/my-socials.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MovieSeriesService } from './services/movies-series.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { InformationComponent } from './information/information.component';
import { SeriesComponent } from './series/series.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MySocialsComponent,
    MoviesComponent,
    SearchComponent,
    InformationComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [MovieSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

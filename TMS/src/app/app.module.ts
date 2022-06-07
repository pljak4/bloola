import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MySocialsComponent } from './my-socials/my-socials.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MovieSeriesService } from './services/movies-series.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { InformationComponent } from './information/information.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { InterceptorService } from './services/interceptor.service';
import { LoaderService } from './services/loading.service';


@NgModule({
  declarations: [
    AppComponent,
    MySocialsComponent,
    SearchComponent,
    InformationComponent,
    LoaderComponent
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
  providers: [
    MovieSeriesService, 
    LoaderService, 
    {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

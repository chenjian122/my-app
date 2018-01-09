
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
import { FormsModule } from '@angular/forms';   
import { RouterModule }   from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { GundamDetailComponent } from './components/gundam-detail/gundam-detail.component';
import { GundamHostComponent } from './components/gundam-host/gundam-host.component';
import { routing } from './app-routing'


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NewsComponent, HomeComponent, GundamDetailComponent, GundamHostComponent 
  ],
  imports: [  
    BrowserModule,FormsModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent] 
})

export class AppModule { }

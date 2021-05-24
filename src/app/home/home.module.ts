import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomeAboutMeComponent } from './home-about-me/home-about-me.component';
import { HomeLastBlogsComponent } from './home-last-blogs/home-last-blogs.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeIntroComponent,
    HomeAboutMeComponent,
    HomeLastBlogsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

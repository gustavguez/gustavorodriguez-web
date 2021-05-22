import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    DividerComponent
  ]
})
export class SharedModule { }

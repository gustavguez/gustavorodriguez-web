import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DividerComponent } from './divider/divider.component';
import { FooterComponent } from './footer/footer.component';
import { FooterUruguayIconComponent } from './footer/footer-uruguay-icon/footer-uruguay-icon.component';
import { HeaderMenuIconComponent } from './header/header-menu-icon/header-menu-icon.component';
import { DividerWstarIconComponent } from './divider/divider-wstar-icon/divider-wstar-icon.component';
import { DividerBstarIconComponent } from './divider/divider-bstar-icon/divider-bstar-icon.component';
import { FooterTwitterIconComponent } from './footer/footer-twitter-icon/footer-twitter-icon.component';
import { FooterGithubIconComponent } from './footer/footer-github-icon/footer-github-icon.component';
import { FooterLinkedinIconComponent } from './footer/footer-linkedin-icon/footer-linkedin-icon.component';
import { BlogItemComponent } from './blog-item/blog-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    DividerComponent,
    FooterComponent,
    FooterUruguayIconComponent,
    HeaderMenuIconComponent,
    DividerWstarIconComponent,
    DividerBstarIconComponent,
    FooterTwitterIconComponent,
    FooterGithubIconComponent,
    FooterLinkedinIconComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    BlogItemComponent
  ]
})
export class SharedModule { }

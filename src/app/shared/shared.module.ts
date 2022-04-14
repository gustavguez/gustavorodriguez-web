import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterUruguayIconComponent } from './components/footer/footer-uruguay-icon/footer-uruguay-icon.component';
import { HeaderMenuIconComponent } from './components/header/header-menu-icon/header-menu-icon.component';
import { DividerWstarIconComponent } from './components/divider/divider-wstar-icon/divider-wstar-icon.component';
import { DividerBstarIconComponent } from './components/divider/divider-bstar-icon/divider-bstar-icon.component';
import { FooterTwitterIconComponent } from './components/footer/footer-twitter-icon/footer-twitter-icon.component';
import { FooterGithubIconComponent } from './components/footer/footer-github-icon/footer-github-icon.component';
import { FooterLinkedinIconComponent } from './components/footer/footer-linkedin-icon/footer-linkedin-icon.component';
import { CardComponent } from './components/card/card.component';

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
    CardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, DividerComponent, CardComponent],
})
export class SharedModule {}

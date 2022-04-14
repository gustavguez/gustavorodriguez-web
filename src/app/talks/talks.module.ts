import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { SharedModule } from '../shared/shared.module';
import { TalksRoutingModule } from './talks-routing.module';
import { TalksComponent } from './talks.component';

@NgModule({
  declarations: [TalksComponent],
  imports: [CommonModule, SharedModule, TalksRoutingModule, ScullyLibModule],
})
export class TalksModule {}

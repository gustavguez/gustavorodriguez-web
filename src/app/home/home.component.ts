import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Md } from '../shared/api/md.interface';
import { Talk } from '../shared/api/talk.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  talks: Talk[] = [];

  constructor(private scullyRoutesService: ScullyRoutesService) {
    this.scullyRoutesService.available$.subscribe((response: any[]) => {
      //Filter that routs with /talks
      this.talks = response.filter((md: Md) => md.route.includes('/talks'));
    });
  }
}

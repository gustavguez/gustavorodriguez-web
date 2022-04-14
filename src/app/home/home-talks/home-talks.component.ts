import { Component, Input } from '@angular/core';
import { Talk } from 'src/app/shared/api/talk.interface';

@Component({
  selector: 'app-home-talks',
  templateUrl: './home-talks.component.html',
})
export class HomeTalksComponent {
  @Input() talks: Talk[] = [];
}

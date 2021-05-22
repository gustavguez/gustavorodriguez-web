import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  host: {
    style: 'width: 100%'
  }
})
export class DividerComponent {
  @Input() blacked: boolean = false;
}

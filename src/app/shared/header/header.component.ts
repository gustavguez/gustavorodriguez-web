import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Models
  menuState: boolean;

  // Inject services
  constructor() { 
    this.menuState = false;
  }

  // Custom events
  onToggleMenuState(): void {
    this.menuState = !this.menuState;
  }

}

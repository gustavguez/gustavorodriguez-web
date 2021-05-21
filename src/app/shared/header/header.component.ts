import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Models
  menuState: boolean;

  // Inject services
  constructor() { 
    this.menuState = false;
  }

  // On component init
  ngOnInit(): void {
  }

  // Custom events
  onToggleMenuState(): void {
    this.menuState = !this.menuState;
  }

}

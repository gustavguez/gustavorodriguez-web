import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuIconComponent } from './header-menu-icon.component';

describe('HeaderMenuIconComponent', () => {
  let component: HeaderMenuIconComponent;
  let fixture: ComponentFixture<HeaderMenuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

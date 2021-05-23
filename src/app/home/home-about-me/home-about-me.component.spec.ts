import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutMeComponent } from './home-about-me.component';

describe('HomeAboutMeComponent', () => {
  let component: HomeAboutMeComponent;
  let fixture: ComponentFixture<HomeAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTwitterIconComponent } from './footer-twitter-icon.component';

describe('FooterTwitterIconComponent', () => {
  let component: FooterTwitterIconComponent;
  let fixture: ComponentFixture<FooterTwitterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTwitterIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTwitterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

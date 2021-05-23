import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkedinIconComponent } from './footer-linkedin-icon.component';

describe('FooterLinkedinIconComponent', () => {
  let component: FooterLinkedinIconComponent;
  let fixture: ComponentFixture<FooterLinkedinIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLinkedinIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLinkedinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

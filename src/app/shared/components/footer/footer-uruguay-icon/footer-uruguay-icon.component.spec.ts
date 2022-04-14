import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUruguayIconComponent } from './footer-uruguay-icon.component';

describe('FooterUruguayIconComponent', () => {
  let component: FooterUruguayIconComponent;
  let fixture: ComponentFixture<FooterUruguayIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterUruguayIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUruguayIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

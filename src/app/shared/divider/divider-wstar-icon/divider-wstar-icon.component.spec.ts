import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerWstarIconComponent } from './divider-wstar-icon.component';

describe('DividerWstarIconComponent', () => {
  let component: DividerWstarIconComponent;
  let fixture: ComponentFixture<DividerWstarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerWstarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerWstarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

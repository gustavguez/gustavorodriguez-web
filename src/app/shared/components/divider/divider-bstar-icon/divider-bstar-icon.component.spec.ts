import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerBstarIconComponent } from './divider-bstar-icon.component';

describe('DividerBstarIconComponent', () => {
  let component: DividerBstarIconComponent;
  let fixture: ComponentFixture<DividerBstarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerBstarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerBstarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

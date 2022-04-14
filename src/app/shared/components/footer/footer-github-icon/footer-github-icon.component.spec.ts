import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGithubIconComponent } from './footer-github-icon.component';

describe('FooterGithubIconComponent', () => {
  let component: FooterGithubIconComponent;
  let fixture: ComponentFixture<FooterGithubIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGithubIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterGithubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

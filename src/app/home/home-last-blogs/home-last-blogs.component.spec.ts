import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLastBlogsComponent } from './home-last-blogs.component';

describe('HomeLastBlogsComponent', () => {
  let component: HomeLastBlogsComponent;
  let fixture: ComponentFixture<HomeLastBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLastBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLastBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

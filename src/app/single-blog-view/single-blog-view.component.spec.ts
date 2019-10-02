import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogViewComponent } from './single-blog-view.component';

describe('SingleBlogViewComponent', () => {
  let component: SingleBlogViewComponent;
  let fixture: ComponentFixture<SingleBlogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBlogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

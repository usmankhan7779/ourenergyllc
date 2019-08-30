import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurlifeComponent } from './ourlife.component';

describe('OurlifeComponent', () => {
  let component: OurlifeComponent;
  let fixture: ComponentFixture<OurlifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurlifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

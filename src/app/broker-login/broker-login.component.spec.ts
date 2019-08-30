import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerLoginComponent } from './broker-login.component';

describe('BrokerLoginComponent', () => {
  let component: BrokerLoginComponent;
  let fixture: ComponentFixture<BrokerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

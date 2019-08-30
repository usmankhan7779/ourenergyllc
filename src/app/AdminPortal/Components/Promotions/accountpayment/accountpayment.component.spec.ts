import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpaymentComponent } from './accountpayment.component';

describe('AccountpaymentComponent', () => {
  let component: AccountpaymentComponent;
  let fixture: ComponentFixture<AccountpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

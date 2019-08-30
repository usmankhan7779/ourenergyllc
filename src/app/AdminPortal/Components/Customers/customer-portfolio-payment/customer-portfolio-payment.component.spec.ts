import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortfolioPaymentComponent } from './customer-portfolio-payment.component';

describe('CustomerPortfolioPaymentComponent', () => {
  let component: CustomerPortfolioPaymentComponent;
  let fixture: ComponentFixture<CustomerPortfolioPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPortfolioPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPortfolioPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortfolioDialogComponent } from './customer-portfolio-dialog.component';

describe('CustomerPortfolioDialogComponent', () => {
  let component: CustomerPortfolioDialogComponent;
  let fixture: ComponentFixture<CustomerPortfolioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPortfolioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPortfolioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

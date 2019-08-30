import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordFromAdminComponent } from './change-password-from-admin.component';

describe('ChangePasswordFromAdminComponent', () => {
  let component: ChangePasswordFromAdminComponent;
  let fixture: ComponentFixture<ChangePasswordFromAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordFromAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordFromAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

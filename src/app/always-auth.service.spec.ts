import { TestBed, inject } from '@angular/core/testing';

import { AlwaysAuthService } from './always-auth.service';

describe('AlwaysAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlwaysAuthService]
    });
  });

  it('should be created', inject([AlwaysAuthService], (service: AlwaysAuthService) => {
    expect(service).toBeTruthy();
  }));
});

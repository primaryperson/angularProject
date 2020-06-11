import { TestBed } from '@angular/core/testing';

import { LoginWithFacebookService } from './login-with-facebook.service';

describe('LoginWithFacebookService', () => {
  let service: LoginWithFacebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginWithFacebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

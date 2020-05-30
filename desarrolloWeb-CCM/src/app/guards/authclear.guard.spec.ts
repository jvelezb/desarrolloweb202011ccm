import { TestBed } from '@angular/core/testing';

import { AuthclearGuard } from './authclear.guard';

describe('AuthclearGuard', () => {
  let guard: AuthclearGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthclearGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

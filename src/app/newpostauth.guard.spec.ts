import { TestBed } from '@angular/core/testing';

import { NewpostauthGuard } from './newpostauth.guard';

describe('NewpostauthGuard', () => {
  let guard: NewpostauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewpostauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

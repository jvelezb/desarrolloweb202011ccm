import { TestBed } from '@angular/core/testing';

import { PassComponentDataService } from './pass-component-data.service';

describe('PassComponentDataService', () => {
  let service: PassComponentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassComponentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

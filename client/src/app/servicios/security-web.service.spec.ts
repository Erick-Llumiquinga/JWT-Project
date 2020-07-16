import { TestBed } from '@angular/core/testing';

import { SecurityWebService } from './security-web.service';

describe('SecurityWebService', () => {
  let service: SecurityWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

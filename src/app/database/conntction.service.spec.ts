import { TestBed } from '@angular/core/testing';

import { ConntctionService } from './conntction.service';

describe('ConntctionService', () => {
  let service: ConntctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConntctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

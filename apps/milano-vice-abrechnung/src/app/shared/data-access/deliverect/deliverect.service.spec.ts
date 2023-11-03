import { TestBed } from '@angular/core/testing';

import { DeliverectService } from './deliverect.service';

describe('DeliverectService', () => {
  let service: DeliverectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

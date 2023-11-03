import { TestBed } from '@angular/core/testing';

import { DeliverectDataService } from './deliverect-data.service';

describe('DeliverectDataService', () => {
  let service: DeliverectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

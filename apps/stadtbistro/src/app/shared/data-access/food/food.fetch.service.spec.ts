import { TestBed } from '@angular/core/testing';

import { FoodFetchService } from './food.fetch.service';

describe('FoodFetchService', () => {
  let service: FoodFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

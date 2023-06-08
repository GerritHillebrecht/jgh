import { TestBed } from '@angular/core/testing';

import { FoodMutateService } from './food.mutate.service';

describe('FoodMutateService', () => {
  let service: FoodMutateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodMutateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ContentSliderService } from './content-slider.service';

describe('ContentSliderService', () => {
  let service: ContentSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

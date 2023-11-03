import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSliderPaginationComponent } from './content-slider-pagination.component';

describe('ContentSliderPaginationComponent', () => {
  let component: ContentSliderPaginationComponent;
  let fixture: ComponentFixture<ContentSliderPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSliderPaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSliderPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

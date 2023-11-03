import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSliderSlideComponent } from './content-slider-slide.component';

describe('ContentSliderSlideComponent', () => {
  let component: ContentSliderSlideComponent;
  let fixture: ComponentFixture<ContentSliderSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSliderSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSliderSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

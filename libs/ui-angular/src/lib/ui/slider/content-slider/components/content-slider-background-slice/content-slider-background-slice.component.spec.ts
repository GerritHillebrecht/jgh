import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSliderBackgroundSliceComponent } from './content-slider-background-slice.component';

describe('ContentSliderBackgroundSliceComponent', () => {
  let component: ContentSliderBackgroundSliceComponent;
  let fixture: ComponentFixture<ContentSliderBackgroundSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSliderBackgroundSliceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSliderBackgroundSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

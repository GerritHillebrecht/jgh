import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionSliderButtonComponent } from './section-slider-button.component';

describe('SectionSliderButtonComponent', () => {
  let component: SectionSliderButtonComponent;
  let fixture: ComponentFixture<SectionSliderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSliderButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSliderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

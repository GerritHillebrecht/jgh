import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionRecommendationsComponent } from './section-recommendations.component';

describe('SectionRecommendationsComponent', () => {
  let component: SectionRecommendationsComponent;
  let fixture: ComponentFixture<SectionRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionRecommendationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

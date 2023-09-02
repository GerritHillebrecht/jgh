import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepSideHeadlineComponent } from './step-side-headline.component';

describe('StepSideHeadlineComponent', () => {
  let component: StepSideHeadlineComponent;
  let fixture: ComponentFixture<StepSideHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSideHeadlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepSideHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

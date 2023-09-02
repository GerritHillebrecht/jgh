import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepSideIndicatorComponent } from './step-side-indicator.component';

describe('StepSideIndicatorComponent', () => {
  let component: StepSideIndicatorComponent;
  let fixture: ComponentFixture<StepSideIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSideIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepSideIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

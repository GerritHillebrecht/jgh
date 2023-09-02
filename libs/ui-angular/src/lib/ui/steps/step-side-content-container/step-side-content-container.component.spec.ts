import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepSideContentContainerComponent } from './step-side-content-container.component';

describe('StepSideContentContainerComponent', () => {
  let component: StepSideContentContainerComponent;
  let fixture: ComponentFixture<StepSideContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSideContentContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepSideContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

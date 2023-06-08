import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodScrollProgressBarComponent } from './food-scroll-progress-bar.component';

describe('FoodScrollProgressBarComponent', () => {
  let component: FoodScrollProgressBarComponent;
  let fixture: ComponentFixture<FoodScrollProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodScrollProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodScrollProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

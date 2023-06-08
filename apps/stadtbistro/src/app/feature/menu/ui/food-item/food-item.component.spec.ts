import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToppingComponent } from './food-item.component';

describe('FoodItemComponent', () => {
  let component: ToppingComponent;
  let fixture: ComponentFixture<ToppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToppingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

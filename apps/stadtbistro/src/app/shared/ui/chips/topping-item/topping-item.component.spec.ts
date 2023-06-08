import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToppingItemComponent } from './topping-item.component';

describe('ToppingItemComponent', () => {
  let component: ToppingItemComponent;
  let fixture: ComponentFixture<ToppingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToppingItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToppingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardProductBackgroundComponent } from './card-product-background.component';

describe('CardProductBackgroundComponent', () => {
  let component: CardProductBackgroundComponent;
  let fixture: ComponentFixture<CardProductBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProductBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProductBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

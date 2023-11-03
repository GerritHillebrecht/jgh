import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsRevenueComponent } from './stats-revenue.component';

describe('StatsRevenueComponent', () => {
  let component: StatsRevenueComponent;
  let fixture: ComponentFixture<StatsRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsRevenueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatsRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

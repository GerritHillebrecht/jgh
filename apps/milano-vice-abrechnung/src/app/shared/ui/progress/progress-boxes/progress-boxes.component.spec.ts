import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBoxesComponent } from './progress-boxes.component';

describe('ProgressBoxesComponent', () => {
  let component: ProgressBoxesComponent;
  let fixture: ComponentFixture<ProgressBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBoxesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

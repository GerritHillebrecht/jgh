import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionSplineCanvasComponent } from './section-spline-canvas.component';

describe('SectionSplineCanvasComponent', () => {
  let component: SectionSplineCanvasComponent;
  let fixture: ComponentFixture<SectionSplineCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSplineCanvasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSplineCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

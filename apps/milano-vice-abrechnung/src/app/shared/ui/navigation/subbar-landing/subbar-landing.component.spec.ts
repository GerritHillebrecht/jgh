import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubbarLandingComponent } from './subbar-landing.component';

describe('SubbarLandingComponent', () => {
  let component: SubbarLandingComponent;
  let fixture: ComponentFixture<SubbarLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubbarLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubbarLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

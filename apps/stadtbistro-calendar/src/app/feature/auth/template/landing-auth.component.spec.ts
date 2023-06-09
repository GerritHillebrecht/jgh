import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingAuthComponent } from './landing-auth.component';

describe('LandingAuthComponent', () => {
  let component: LandingAuthComponent;
  let fixture: ComponentFixture<LandingAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

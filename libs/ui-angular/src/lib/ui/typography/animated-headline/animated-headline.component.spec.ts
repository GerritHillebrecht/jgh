import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimatedHeadlineComponent } from './animated-headline.component';

describe('AnimatedHeadlineComponent', () => {
  let component: AnimatedHeadlineComponent;
  let fixture: ComponentFixture<AnimatedHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedHeadlineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimatedHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

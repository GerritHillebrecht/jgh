import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationIconsBackgroundComponent } from './animation-icons-background.component';

describe('AnimationIconsBackgroundComponent', () => {
  let component: AnimationIconsBackgroundComponent;
  let fixture: ComponentFixture<AnimationIconsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationIconsBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimationIconsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

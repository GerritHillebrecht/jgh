import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarHeroComponent } from './avatar-hero.component';

describe('AvatarHeroComponent', () => {
  let component: AvatarHeroComponent;
  let fixture: ComponentFixture<AvatarHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarRoundedOverlayComponent } from './navbar-rounded-overlay.component';

describe('NavbarRoundedOverlayComponent', () => {
  let component: NavbarRoundedOverlayComponent;
  let fixture: ComponentFixture<NavbarRoundedOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarRoundedOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarRoundedOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

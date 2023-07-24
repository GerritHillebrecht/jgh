import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogFullscreenComponent } from './dialog-fullscreen.component';

describe('DialogFullscreenComponent', () => {
  let component: DialogFullscreenComponent;
  let fixture: ComponentFixture<DialogFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFullscreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

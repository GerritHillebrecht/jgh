import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlasBorderComponent } from './glas-border.component';

describe('GlasBorderComponent', () => {
  let component: GlasBorderComponent;
  let fixture: ComponentFixture<GlasBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlasBorderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GlasBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

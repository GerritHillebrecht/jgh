import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Section360ViewComponent } from './section-360-view.component';

describe('Section360ViewComponent', () => {
  let component: Section360ViewComponent;
  let fixture: ComponentFixture<Section360ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section360ViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Section360ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionLocationComponent } from './section-location.component';

describe('SectionLocationComponent', () => {
  let component: SectionLocationComponent;
  let fixture: ComponentFixture<SectionLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

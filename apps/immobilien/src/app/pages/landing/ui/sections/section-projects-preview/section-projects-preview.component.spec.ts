import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionProjectsPreviewComponent } from './section-projects-preview.component';

describe('SectionProjectsPreviewComponent', () => {
  let component: SectionProjectsPreviewComponent;
  let fixture: ComponentFixture<SectionProjectsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProjectsPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionProjectsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionBlogPreviewComponent } from './section-blog-preview.component';

describe('SectionBlogPreviewComponent', () => {
  let component: SectionBlogPreviewComponent;
  let fixture: ComponentFixture<SectionBlogPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBlogPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionBlogPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

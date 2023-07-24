import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionSplitImageContentComponent } from './section-split-image-content.component';

describe('SectionSplitImageContentComponent', () => {
  let component: SectionSplitImageContentComponent;
  let fixture: ComponentFixture<SectionSplitImageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSplitImageContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSplitImageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

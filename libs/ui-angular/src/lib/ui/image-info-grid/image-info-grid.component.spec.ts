import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageInfoGridComponent } from './image-info-grid.component';

describe('ImageInfoGridComponent', () => {
  let component: ImageInfoGridComponent;
  let fixture: ComponentFixture<ImageInfoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageInfoGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageInfoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

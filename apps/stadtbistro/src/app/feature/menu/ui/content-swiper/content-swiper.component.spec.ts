import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentSwiperComponent } from './content-swiper.component';

describe('ContentSwiperComponent', () => {
  let component: ContentSwiperComponent;
  let fixture: ComponentFixture<ContentSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSwiperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

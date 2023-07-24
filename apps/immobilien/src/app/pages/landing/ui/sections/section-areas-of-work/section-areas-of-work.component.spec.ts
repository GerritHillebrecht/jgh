import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionAreasOfWorkComponent } from './section-areas-of-work.component';

describe('SectionAreasOfWorkComponent', () => {
  let component: SectionAreasOfWorkComponent;
  let fixture: ComponentFixture<SectionAreasOfWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAreasOfWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionAreasOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

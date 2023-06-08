import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionInformationComponent } from './section-information.component';

describe('SectionInformationComponent', () => {
  let component: SectionInformationComponent;
  let fixture: ComponentFixture<SectionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionInformationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

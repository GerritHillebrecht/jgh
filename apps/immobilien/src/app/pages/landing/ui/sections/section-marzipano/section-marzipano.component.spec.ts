import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionMarzipanoComponent } from './section-marzipano.component';

describe('SectionMarzipanoComponent', () => {
  let component: SectionMarzipanoComponent;
  let fixture: ComponentFixture<SectionMarzipanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMarzipanoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionMarzipanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

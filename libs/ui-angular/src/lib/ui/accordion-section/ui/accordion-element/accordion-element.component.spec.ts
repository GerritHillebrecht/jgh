import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionElementComponent } from './accordion-element.component';

describe('AccordionElementComponent', () => {
  let component: AccordionElementComponent;
  let fixture: ComponentFixture<AccordionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

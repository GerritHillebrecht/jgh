import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooeyButtonComponent } from './gooey-button.component';

describe('GooeyButtonComponent', () => {
  let component: GooeyButtonComponent;
  let fixture: ComponentFixture<GooeyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GooeyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooeyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

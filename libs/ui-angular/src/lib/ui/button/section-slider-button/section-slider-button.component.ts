import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jgh-section-slider-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-slider-button.component.html',
  styleUrls: ['./section-slider-button.component.scss'],
})
export class SectionSliderButtonComponent implements OnInit {
  private readonly elRef = inject(ElementRef);

  ngOnInit(): void {
    this.elRef.nativeElement.closest('section').style.position = 'relative';
  }
}

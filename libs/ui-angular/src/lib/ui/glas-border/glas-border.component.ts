import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Sizes = 'none' | 'small' | 'medium' | 'large';

export interface GlasBorderOptions {
  padding: Sizes;
  radius: Sizes;
  blur: Sizes;
  saturation: Sizes;
  shadowSize: Sizes;
}

@Component({
  selector: 'jgh-glas-border',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glas-border.component.html',
  styleUrls: ['./glas-border.component.scss'],
})
export class GlasBorderComponent {
  protected readonly containerOptions = signal<GlasBorderOptions>({
    padding: 'medium',
    radius: 'medium',
    blur: 'medium',
    saturation: 'medium',
    shadowSize: 'medium',
  });

  @Input() set options(value: Partial<GlasBorderOptions>) {
    this.containerOptions.update((options) => ({ ...options, ...value }));
  }
}

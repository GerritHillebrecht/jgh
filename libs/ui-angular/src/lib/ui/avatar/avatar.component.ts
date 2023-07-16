import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
export interface AvatarSettings {
  size: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  borderStyle: string;
  backgroundColor: string;
  image?: string;
  fontAwesomeIcon?: IconDefinition;
  imageSize: string;
  gradientClass: string;
}

@Component({
  selector: 'jgh-avatar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements AfterViewInit {
  @ViewChild('avatarInner')
  avatarInnerRef?: ElementRef<HTMLDivElement>;

  private icon = faPizzaSlice;

  protected _options: AvatarSettings = {
    size: '5rem',
    borderColor: '#fff',
    borderWidth: '0.5rem',
    borderRadius: '50%',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    // image: 'assets/images/landing/icons/vegan-inner.png',
    imageSize: '50%',
    gradientClass: 'conic-gradient',
  };

  @Input() set options(options: Partial<AvatarSettings>) {
    this._options = { ...this._options, ...options };
  }

  ngAfterViewInit(): void {
    if (this.avatarInnerRef) {
      this.avatarInnerRef.nativeElement.classList.add(
        this._options.gradientClass
      );
    }
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface AvatarSettings {
  size: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  borderStyle: string;
  backgroundColor: string;
  image: string;
  imageSize: string;
  gradientClass: string;
}

@Component({
  selector: 'jgh-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements AfterViewInit {
  @ViewChild('avatarInner')
  avatarInnerRef?: ElementRef<HTMLDivElement>;

  protected _options: AvatarSettings = {
    size: '5rem',
    borderColor: '#fff',
    borderWidth: '0.5rem',
    borderRadius: '50%',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    image: 'assets/images/landing/icons/vegan-inner.png',
    imageSize: '50%',
    gradientClass: 'conic-gradient',
  };

  @Input() set options(value: Partial<AvatarSettings>) {
    this._options = { ...this._options, ...value };
  }

  ngAfterViewInit(): void {
    if (this.avatarInnerRef) {
      this.avatarInnerRef.nativeElement.classList.add(
        this._options.gradientClass
      );
    }
  }
}

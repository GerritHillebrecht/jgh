import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
interface AvatarSettings {
  size: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  borderStyle: string;
  backgroundColor: string;
  image?: string;
  imageSize: string;
  imagePosition?: 'cover' | 'contain';
  imageOpacity: number;
  fontAwesomeIcon?: IconDefinition;
  gradientClass: string;
}

export interface AvatarOptions extends Partial<Omit<AvatarSettings, 'image'>> {
  asd?: string;
}

@Component({
  selector: 'jgh-avatar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit, AfterViewInit {
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
    imageSize: '50%',
    imagePosition: 'cover',
    imageOpacity: 1,
    gradientClass: 'conic-gradient',
  };

  @Input()
  image?: string;

  @Input() set options(options: Partial<AvatarSettings>) {
    this._options = { ...this._options, ...options, image: this.image };
  }

  ngOnInit(): void {
    if (this.image) {
      this._options.image = this.image;
    }
  }

  ngAfterViewInit(): void {
    if (this.avatarInnerRef) {
      this.avatarInnerRef.nativeElement.classList.add(
        this._options.gradientClass
      );
    }
  }
}

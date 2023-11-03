import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavLink {
  label: string;
  path: string;
  icon: {
    image?: string;
    mui?: string;
    fontAwesome?: IconDefinition;
  };
}

@Component({
  selector: 'jgh-navbar-rounded-overlay',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, MatIconModule],
  templateUrl: './navbar-rounded-overlay.component.html',
  styleUrls: ['./navbar-rounded-overlay.component.scss'],
})
export class NavbarRoundedOverlayComponent implements AfterViewInit {
  @ViewChild('slider')
  slider: ElementRef<HTMLElement> | undefined;

  @ViewChild('nav')
  nav: ElementRef<HTMLElement> | undefined;

  @ViewChildren('navLink')
  navLinks: QueryList<ElementRef<HTMLElement>> | undefined;

  @Input() set hightlightColor(color: string) {
    setTimeout(() => {
      this.nav?.nativeElement.style.setProperty('--clr-hightlight', color);
    }, 1);
  }

  @Input() set fontColor(color: string) {
    setTimeout(() => {
      this.nav?.nativeElement.style.setProperty('--clr-font', color);
    }, 1);
  }

  @Input()
  routes: NavLink[] = [
    {
      label: 'Security',
      icon: {
        image: 'https://assets.codepen.io/907368/security.svg',
      },
      path: '/',
    },
    {
      label: 'Learn',
      icon: {
        image: 'https://assets.codepen.io/907368/learn.svg',
      },
      path: '/learn',
    },
    {
      label: 'Explore',
      icon: {
        image: 'https://assets.codepen.io/907368/explore.svg',
      },
      path: '/explore',
    },
    {
      label: 'Support',
      icon: {
        image: 'https://assets.codepen.io/907368/support.svg',
      },
      path: '/support',
    },
  ];

  ngAfterViewInit(): void {
    this.navLinks?.forEach((link) => {
      link.nativeElement.addEventListener('mouseenter', () => {
        if (this.slider && this.nav) {
          const { x: linkX } = link.nativeElement.getBoundingClientRect();
          const { x: navX } = this.nav.nativeElement.getBoundingClientRect();

          this.slider.nativeElement.style.translate = `${linkX - navX}px 0`;
        }
      });
    });

    this.nav?.nativeElement.addEventListener('mouseenter', () => {
      setTimeout(() => {
        this.nav?.nativeElement.classList.add('animate');
      }, 50);
    });

    this.nav?.nativeElement.addEventListener('mouseleave', () => {
      setTimeout(() => {
        this.nav?.nativeElement.classList.remove('animate');
      }, 50);
    });
  }
}

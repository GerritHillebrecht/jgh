/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, {
  Controller,
  EffectCreative,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper';
import { ObserverService } from '@jgh/ui-angular/service/observer';
import { StrapiImage, StrapiService } from '@jgh/ui-angular/data-access';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

interface HomeStagingBereich {
  Bereichsname: string;
  Beschreibung: string;
  Hintergrundbild: StrapiImage;
  slug: string;
}

@Component({
  selector: 'im-section-areas-of-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-areas-of-work.component.html',
  styleUrls: ['./section-areas-of-work.component.scss'],
})
export class SectionAreasOfWorkComponent {
  @ViewChildren('avatar')
  avatarsRef?: QueryList<ElementRef<HTMLDivElement>>;

  protected readonly currentSlide = signal(0);

  private readonly observer = inject(ObserverService).observer;

  private readonly strapi = inject(StrapiService);

  protected readonly slides = toSignal(
    this.strapi
      .fetchData<HomeStagingBereich>({
        path: 'staging-bereiches',
        query: {
          populate: ['Hintergrundbild'],
        },
      })
      .pipe(
        map((data) => data.data),
        tap((bereiche) => console.log('bereiche', bereiche)),
        tap(() => {
          setTimeout(() => {
            if (this.avatarsRef) {
              this.avatarsRef.forEach((avatar) => {
                this.observer.observe(avatar.nativeElement);
                this.swiper.init();
                this.swiperText.init();
              });
            }
          }, 1);
        })
      )
  );

  // protected readonly slides = signal<
  //   {
  //     image: string;
  //     title: string;
  //     text: string;
  //   }[]
  // >([
  //   {
  //     image: 'assets/images/landing/hero/hero_living_room.jpg',
  //     title: 'Wohnzimmer',
  //     text: 'Mit raffiniertem Home Staging kreiere ich bezaubernde Wohnzimmerwelten, die Herzen höher schlagen lassen. Maßgeschneiderte Möbelanordnungen, harmonische Farbpaletten und exklusive Details versetzen Käufer in Begeisterung und steigern den Immobilienwert.',
  //   },
  //   {
  //     image: 'assets/images/landing/hero/hero_004.jpg',
  //     title: 'Küche',
  //     text: 'Erwecke Küchen zum Leben: Durch durchdachtes Home Staging schaffe ich unwiderstehliche Küchen, in denen Funktionalität auf zeitlose Eleganz trifft. Einladende Räume, die den Appetit aufs Zuhausekochen wecken und den Verkaufserfolg steigern.',
  //   },
  //   {
  //     image: 'assets/images/landing/hero/bedroom.jpg',
  //     title: 'Schlafzimmer',
  //     text: 'Kreiere Schlafzimmerträume: Durch künstlerisches Home Staging gestalte ich einladende Ruheoasen. Harmonische Farbpaletten, hochwertige Textilien und gemütliche Akzente schaffen ein wohltuendes Ambiente, das Käufer verzaubert und den Wert der Immobilie steigert.',
  //   },
  //   {
  //     image: 'assets/images/landing/hero/bathroom.jpg',
  //     title: 'Badezimmer',
  //     text: 'Verwandele Badezimmer in luxuriöse Oasen: Durch kreatives Home Staging gestalte ich faszinierende Spa-Bereiche mit modernem Design, erlesenen Details und beruhigenden Farbpaletten. Ein Badetraum, der Käufer begeistert und den Immobilienwert steigert.',
  //   },
  //   {
  //     image: 'assets/images/landing/hero/hero_001.jpg',
  //     title: 'Außenbereich',
  //     text: 'Verwandle den Außenbereich in eine natürliche Idylle: Mit meisterhaftem Home Staging schaffe ich fesselnde Gartenparadiese. Harmonische Landschaftsgestaltung, elegante Möbel und stimmungsvolle Beleuchtung erhöhen den Charme und den Immobilienwert.',
  //   },
  // ]);

  private swiper = new Swiper('.swiper-image', {
    // configure Swiper to use modules
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChange: () => {
        this.currentSlide.set(this.swiper.activeIndex);
      },
    },
    modules: [Pagination, Controller],
  });

  private swiperText = new Swiper('.swiper-text', {
    // configure Swiper to use modules
    controller: {
      control: this.swiper,
    },
    // navigation: {
    //   nextEl: '.btn-next-text',
    //   prevEl: '.btn-prev-text',
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        opacity: 0,
        translate: [0, '100%', 0],
      },
      next: {
        opacity: 0,
        translate: [0, '-100%', 0],
      },
    },
    on: {
      slideChange: () => {
        this.currentSlide.set(this.swiperText.activeIndex);
      },
    },
    modules: [Controller, Navigation, EffectCreative, Keyboard],
  });

  protected selectIndex(index: number): void {
    this.swiperText.slideTo(index);
  }
}

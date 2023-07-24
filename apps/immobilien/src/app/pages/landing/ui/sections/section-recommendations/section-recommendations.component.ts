import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Autoplay, EffectCreative, Keyboard } from 'swiper';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'im-section-recommendations',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './section-recommendations.component.html',
  styleUrls: ['./section-recommendations.component.scss'],
})
export class SectionRecommendationsComponent implements AfterViewInit {
  @ViewChild('swiperContainer')
  swiperRef?: ElementRef<HTMLDivElement>;

  protected readonly selectedRecommendation = signal<number>(0);

  private readonly names = [
    'Yusuf Kabiri',
    'Hasan Sarioglu',
    'Baran',
    'Gerrit H.',
  ];

  private readonly occupation = [
    'Schüler @ MSH',
    'Inhaber @ Arnkielkiosk',
    'Content Designer @ Goldberg',
    'Webdesign @ Stadtbistro.de',
  ];

  private readonly texts = [
    'Chatera Gross hat unsere Erwartungen übertroffen! Die Umgestaltung unseres Hauses war spektakulär und hat uns geholfen, es schnell und zu einem guten Preis zu verkaufen.',
    'Chatera Gross hat ein unglaubliches Auge für Details. Jeder Raum wurde perfekt in Szene gesetzt und verlieh unserem Zuhause einen modernen und ansprechenden Look.',
    'Wir waren beeindruckt von der Professionalität und dem Engagement von Chatera Gross. Sie ging auf unsere Wünsche ein und schuf eine warme und einladende Atmosphäre, die potenzielle Käufer begeisterte.',
    'Dank Chatera Gross haben wir unser Haus in kürzester Zeit verkauft! Ihre kreative Gestaltung machte einen großen Unterschied, und sie war eine Freude, damit zusammenzuarbeiten.',
  ];

  private readonly colors = ['#facc15', '#f472b6', '#60a5fa', '#34d399'];

  protected readonly recommendations = Array.from({ length: 4 }, (_, i) => ({
    name: this.names[i],
    occupation: this.occupation[i],
    body: this.texts[i],
    color: this.colors[i],
    image: `assets/images/landing/avatars/avatar_${i + 1}.svg`,
  }));

  protected readonly swiper = new Swiper('.swiper-recomm', {
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      slideChange: () => {
        this.selectedRecommendation.set(this.swiper.realIndex);
      },
    },
    creativeEffect: {
      next: {
        translate: [0, '-100%', 0],
        rotate: [0, 0, -7.5],
        opacity: 0,
      },
      prev: {
        translate: [0, '100%', 0],
        rotate: [0, 0, 7.5],
        opacity: 0,
      },
    },

    effect: 'creative',
    loop: true,

    modules: [Keyboard, EffectCreative],
  });

  ngAfterViewInit(): void {
    this.swiper.init();

    if (this.swiperRef) {
      const width =
        this.swiperRef.nativeElement.parentElement?.offsetWidth || 1;
      this.swiperRef.nativeElement.style.width = `${width}px`;
      this.swiper.updateSize();
    }
  }
}

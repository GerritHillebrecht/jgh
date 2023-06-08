import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import Swiper, { Autoplay, EffectCreative, Keyboard } from 'swiper';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'sb-section-recommendations',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './section-recommendations.component.html',
  styleUrls: ['./section-recommendations.component.scss'],
})
export class SectionRecommendationsComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperRef?: ElementRef<HTMLDivElement>;

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
    autoplay: {
      delay: 10000,
    },
    modules: [Autoplay, Keyboard, EffectCreative],
  });

  protected readonly selectedRecommendation = signal(0);

  private readonly names = [
    'Tommaso Cesano',
    'Maureen Herben',
    'Malo Chaperon',
    'Frederico Pascual',
  ];

  private readonly occupation = [
    'XP Designer @ OSMO agency',
    'Product Designer @ Zalando',
    'Content Designer @ BackMarket',
    'Marketing Lead @ Hugging Face',
  ];

  private readonly texts = [
    'Im Stadtbistro wird Pizza zum Kunstwerk! Jeder Bissen ist ein Geschmackserlebnis. Die Bowls sind frisch, gesund und voller Aromen. Einfach großartig!',
    'Stadtbistro ist ein kulinarisches Paradies! Die Pizza ist meisterhaft zubereitet, mit knusprigem Teig und köstlichem Belag. Die Bowls sind eine gesunde Gaumenfreude. Unbedingt probieren!',
    'Im Stadtbistro gibt es die beste Pizza der Stadt! Der Teig ist perfekt, der Belag reichhaltig und geschmackvoll. Die Bowls sind frisch, bunt und voller Geschmack. Ein echtes Geschmackserlebnis!',
    'Stadtbistro hat meine Geschmacksknospen verzaubert! Die Pizza ist einfach göttlich - perfekter Teig, kreative Toppings und ein harmonisches Zusammenspiel der Aromen. Die Bowls sind frisch und sättigend. Ein Traum für Feinschmecker!',
  ];

  private readonly colors = ['#facc15', '#f472b6', '#60a5fa', '#34d399'];

  protected readonly recommendations = Array.from({ length: 4 }, (_, i) => ({
    name: this.names[i],
    occupation: this.occupation[i],
    body: this.texts[i],
    color: this.colors[i],
    image: `assets/images/landing/avatars/avatar_${i + 1}.svg`,
  }));

  ngAfterViewInit(): void {
    this.swiper.init();

    if (this.swiperRef) {
      const width =
        this.swiperRef.nativeElement.parentElement?.offsetWidth || 1;
      this.swiperRef.nativeElement.style.width = `${width}px`;
      this.swiper.update();
      this.swiper.updateSize();
      this.swiper.updateSlides();
      this.swiper.updateSlidesClasses();
      this.swiper.updateProgress();
    }

    console.log(this.swiper);
  }
}

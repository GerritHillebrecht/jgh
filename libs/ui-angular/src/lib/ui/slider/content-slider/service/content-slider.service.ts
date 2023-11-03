import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { images } from '../example.images';
import { ContentSliderSlide } from '../model';

type SlideIndex = 'active' | 'previous';
@Injectable({
  providedIn: 'root',
})
export class ContentSliderService {
  selectedSlides = new Map<SlideIndex, number>([
    ['active', 0],
    ['previous', 0],
  ]);

  readonly slideIndexChange$ = new BehaviorSubject<number>(0);

  settings = {
    initialized: false,
    amounts: {
      elements: 10,
      slides: 5,
    },
    defaults: {
      images,
      delayBetweenSlides: 100,
    },
  };

  slides = [
    {
      image: this.settings.defaults.images[0],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`],
      },
      cta: {
        text: `View Project`,
      },
    } as ContentSliderSlide,
    {
      image: this.settings.defaults.images[1],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`],
      },
      cta: {
        text: `View Project`,
      },
    } as ContentSliderSlide,
    {
      image: this.settings.defaults.images[5],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`],
      },
      cta: {
        text: `View Project`,
      },
    } as ContentSliderSlide,
    {
      image: this.settings.defaults.images[3],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`],
      },
      cta: {
        text: `View Project`,
      },
    } as ContentSliderSlide,
    {
      image: this.settings.defaults.images[2],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`],
      },
      cta: {
        text: `View Project`,
      },
    } as ContentSliderSlide,
    {
      image: this.settings.defaults.images[1],
      body: {
        title: `Simon liabilty Center`,
        subtitle: `Branding & Interaction`,
        text: `We create high quality products to help the life of our clients and their customers.`,
        tags: [`Branding`, `Interaction`, `Design`],
      },
      cta: {
        text: `View Project`,
      },
    } as ContentSliderSlide,
  ];

  slices = Array.from(
    { length: this.settings.amounts.elements },
    (_, index) => index
  );

  animationDelays: string[] = Array.from(
    { length: this.settings.amounts.elements },
    (_, index) => index
  ).map((index) => {
    const half = Math.ceil(this.settings.amounts.elements / 2);
    return `${
      Math.round(index < half ? index : half - (index - half + 1)) *
      this.settings.defaults.delayBetweenSlides
    }ms`;
  });

  selectSlide(index: number): void {
    console.log('[content-slider-service] SelectSlide called');
    const activeIndex = this.selectedSlides.get('active') || 0;
    this.selectedSlides.set('previous', activeIndex);
    this.selectedSlides.set('active', index);
    this.slideIndexChange$.next(index);
  }

  changeSlide(slide: number | 'next' | 'previous'): void {
    console.log('[content-slider-service] ChangeSlide called');
    let newIndex = 0;

    if (typeof slide === 'number') {
      newIndex = slide;
    }

    const activeIndex = this.selectedSlides.get('active') || 0;

    if (slide === 'next') {
      newIndex = activeIndex === this.slides.length - 1 ? 0 : activeIndex + 1;
    }

    if (slide === 'previous') {
      newIndex = activeIndex === 0 ? this.slides.length - 1 : activeIndex - 1;
    }

    return this.selectSlide(newIndex);
  }
}

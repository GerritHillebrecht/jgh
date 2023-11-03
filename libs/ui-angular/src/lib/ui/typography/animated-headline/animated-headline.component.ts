import { AfterViewInit, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import SplitType from 'split-type';
import { TimelineDefinition, inView, stagger, timeline } from 'motion';

interface AnimationOptions {
  headline: string;
  subline: string;
}

@Component({
  selector: 'jgh-animated-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-headline.component.html',
  styleUrls: ['./animated-headline.component.scss'],
})
export class AnimatedHeadlineComponent implements AfterViewInit {
  protected readonly animationOptions = signal<AnimationOptions>({
    headline:
      'Motion One is a new animation library built on top of the Web Animations API.',
    subline:
      'This library was created by Matt Perry who also created Framer Motion. It includes many of the same features that GSAP offers like a timeline, scroll trigger, and more, all for free! Motion charges for their developer tools, which includes a graphical timeline editor and a code export feature.',
  });

  @Input() set options(options: Partial<AnimationOptions>) {
    this.animationOptions.update((presentOptions) => ({
      ...presentOptions,
      ...options,
    }));
  }

  ngAfterViewInit(): void {
    const headline = new SplitType('.headline', {
      types: 'words',
    });

    const paragraph = new SplitType('.paragraph', {
      types: 'lines',
    });

    const sequence = [
      [
        headline.words,
        { opacity: [0, 1], y: [24, 0] },
        {
          delay: stagger(0.05),
          duration: 0.8,
          easing: [0.17, 0.55, 0.55, 1],
        },
      ],
      [
        paragraph.lines,
        { opacity: [0, 0.75], y: ['50px', '0px'] },
        {
          delay: stagger(0.25),
          duration: 0.7,
          easing: 'ease-in-out',
          at: '-0.5',
        },
      ],
    ] as TimelineDefinition;

    inView('.paragraph', ({ target }) => {
      const controls = timeline(sequence);
      return () => controls.stop();
    });
  }
}

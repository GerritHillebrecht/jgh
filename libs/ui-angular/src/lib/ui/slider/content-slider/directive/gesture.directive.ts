import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, zipWith } from 'rxjs/operators';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[sliderGesture]',
  standalone: true,
})
export class GestureDirective {
  @Output() swipeLeft = new EventEmitter();
  @Output() swipeRight = new EventEmitter();
  @Output() swipeUp = new EventEmitter();
  @Output() swipeDown = new EventEmitter();

  @Input() swipeDistance = 30;

  constructor(private el: ElementRef) {
    const element = el.nativeElement;
    const touchStart = fromEvent(element, 'touchstart');
    const touchEnd = fromEvent(element, 'touchend');
    const touchEvent = touchStart.pipe(
      zipWith(touchEnd),
      map(([a, b]) => ({
        start: a as TouchEvent,
        end: b as TouchEvent,
      }))
    );
    touchEvent.subscribe((swipe) => {
      const left =
        swipe.start.targetTouches[0].pageX - swipe.end.changedTouches[0].pageX >
        this.swipeDistance;

      const right =
        swipe.end.changedTouches[0].pageX - swipe.start.targetTouches[0].pageX >
        this.swipeDistance;

      // Emits swipeLeft when the user swipes left
      if (left) {
        this.swipeLeft.emit();
      }

      // Emits swipeRight when the user swipes right
      if (right) {
        this.swipeRight.emit();
      }
    });
  }
}

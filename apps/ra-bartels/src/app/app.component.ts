import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollingService } from './core/service/scrolling/scrolling.service';

@Component({
  selector: 'rab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private scrollService: ScrollingService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollService.maxScrollDistance.set(
          document.body.scrollHeight - window.innerHeight
        );
      }
    });
  }
}

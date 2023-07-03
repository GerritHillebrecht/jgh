import { Component, OnInit, effect, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavigationService } from './core/services';
import { NotificationService } from './core/services/notification/notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackbar = inject(MatSnackBar);
  private readonly navigationService = inject(NavigationService);
  private readonly noficationService = inject(NotificationService);

  private notificationEffect = effect(() => {
    const notification = this.noficationService.notification();
    if (notification) {
      this.snackbar.open(
        notification.message,
        notification.actionLabel ?? 'Danke',
        {
          duration: notification.duration ?? 3000,
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        }
      );
    }
  });

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.route.root.firstChild?.snapshot.data)
      )
      .subscribe((data) => {
        if (data?.['theme']) {
          this.navigationService.theme.set(data['theme']);
        }
      });
  }
}

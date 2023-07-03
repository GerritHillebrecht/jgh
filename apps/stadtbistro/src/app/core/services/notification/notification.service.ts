import { Injectable, signal } from '@angular/core';

interface Notification {
  message: string;
  type: 'success' | 'error';
  duration?: number;
  actionLabel?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  readonly notification = signal<Notification | null>(null);

  setNotification(notification: Notification) {
    this.notification.set(notification);
  }
}

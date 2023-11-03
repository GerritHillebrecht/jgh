import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

const BETTERSTACK_API_KEY = 'Ke4pnz8HRCUC8F1EiBVmmnNP';

@Component({
  selector: 'ciu-status-indicator',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
})
export class StatusIndicatorComponent implements OnInit {
  private readonly httpClient = inject(HttpClient);
  protected readonly status = signal<string>('operational');

  ngOnInit(): void {
    this.httpClient
      .get<Response>('https://uptime.betterstack.com/api/v2/monitors', {
        headers: {
          Authorization: `Bearer ${BETTERSTACK_API_KEY}`,
        },
      })
      .pipe(
        tap((data) => console.log({ res: data })),
        map((data) => data.data[0].attributes.status)
      )
      .subscribe();
  }
}

interface Response {
  data: [
    {
      id: '2';
      type: 'monitor';
      attributes: {
        url: 'https://uptime.betterstack.com';
        pronounceable_name: 'Uptime homepage';
        monitor_type: 'keyword';
        monitor_group_id: '12345';
        last_checked_at: '2020-09-01T14:17:46.000Z';
        status: 'up';
        required_keyword: 'We call you';
        verify_ssl: true;
        check_frequency: 30;
        call: true;
        sms: true;
        email: true;
        push: true;
        team_wait: null;
        http_method: 'get';
        request_timeout: 15;
        recovery_period: 0;
        request_headers: [
          {
            id: '123';
            name: 'Content-Type';
            value: 'application/xml';
          }
        ];
        request_body: '';
        paused_at: null;
        created_at: '2020-02-18T13:38:16.586Z';
        updated_at: '2020-09-08T13:10:20.202Z';
        ssl_expiration: 7;
        domain_expiration: 14;
        regions: ['us', 'eu', 'as', 'au'];
        port: null;
        confirmation_period: 120;
        expected_status_codes: [];
      };
    }
  ];
  pagination: {
    first: 'https://uptime.betterstack.com/api/v2/monitors?page=1';
    last: 'https://uptime.betterstack.com/api/v2/monitors?page=16';
    prev: null;
    next: 'https://uptime.betterstack.com/api/v2/monitors?page=2';
  };
}

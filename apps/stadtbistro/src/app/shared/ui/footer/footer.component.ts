import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sb-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  protected readonly facebookIcon = faFacebook;
  protected readonly instagramIcon = faInstagram;
  protected readonly youtubeIcon = faYoutube;
  protected readonly twitterIcon = faTwitter;

  protected readonly socialMediaLinks = [
    // {
    //   icon: this.facebookIcon,
    //   link: 'https://www.facebook.com/stadtbistro/',
    // },
    {
      icon: this.instagramIcon,
      link: 'https://www.instagram.com/stadtbistro.de/',
    },
    // {
    //   icon: this.youtubeIcon,
    //   link: 'https://www.youtube.com/channel/UCQ6QX5YQ8Z6Z5QX6Z5QX6Z5Q',
    // },
    // {
    //   icon: this.twitterIcon,
    //   link: 'https://twitter.com/stadtbistro',
    // },
  ];
}

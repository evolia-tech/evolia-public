import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { SOCIAL_LINKS } from '../../../../core/constants/social-links';

@Component({
  selector: 'app-about-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ToFaIconPipe
  ]
})
export class HeroBanner {
  socialLinks = SOCIAL_LINKS;
}

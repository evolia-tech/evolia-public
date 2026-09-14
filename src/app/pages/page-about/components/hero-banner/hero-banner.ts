import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { SOCIAL_LINKS } from '../../../../core/constants/social-links';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-about-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  imports: [
    NgOptimizedImage,
    FontAwesomeModule,
    ToFaIconPipe,
    GsapSplitTextFadeInScrollTriggerDirective
  ]
})
export class HeroBanner {
  socialLinks = SOCIAL_LINKS;
}

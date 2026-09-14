import { Component } from '@angular/core';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-portfolio-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  imports: [GsapSplitTextFadeInScrollTriggerDirective]
})
export class PortfolioHeroBanner {}

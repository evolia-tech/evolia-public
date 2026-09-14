import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-page-privacy-policy',
  standalone: true,
  templateUrl: './page-privacy-policy.html',
  styleUrl: './page-privacy-policy.scss',
  imports: [CommonModule, GsapSplitTextFadeInScrollTriggerDirective]
})
export class PagePrivacyPolicy {}

export default PagePrivacyPolicy;

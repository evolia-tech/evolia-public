import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-page-legal-notice',
  standalone: true,
  templateUrl: './page-legal-notice.html',
  styleUrl: './page-legal-notice.scss',
  imports: [CommonModule, GsapSplitTextFadeInScrollTriggerDirective]
})
export class PageLegalNotice {}

export default PageLegalNotice;

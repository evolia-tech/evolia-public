import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faStar, faHandshake, faRocket } from '@fortawesome/free-solid-svg-icons';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-about-values',
  standalone: true,
  templateUrl: './values.html',
  styleUrl: './values.scss',
  imports: [CommonModule, FontAwesomeModule, GsapSplitTextFadeInScrollTriggerDirective]
})
export class AboutValues {
  faCheck = faCheck;
  faStar = faStar;
  faHandshake = faHandshake;
  faRocket = faRocket;
}

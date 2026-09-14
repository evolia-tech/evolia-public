import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-ceo-quote',
  templateUrl: './ceo-quote.html',
  styleUrl: './ceo-quote.scss',
  imports: [CommonModule, FontAwesomeModule, ToFaIconPipe, GsapSplitTextFadeInScrollTriggerDirective],
})
export class CeoQuote {}

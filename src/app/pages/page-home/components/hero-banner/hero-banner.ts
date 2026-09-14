import {
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import { QuoteService } from '../../../../core/services/quote';
import { CalendlyService } from '../../../../core/services/calendly';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../../shared/directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [EvoButton, GsapSplitTextFadeInScrollTriggerDirective],
})
export class HeroBanner {
  public quoteService = inject(QuoteService);
  public calendlyService = inject(CalendlyService);
}

import { Component, inject, OnInit, OnDestroy, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuoteWizardStateService } from './services/quote-wizard-state.service';
import { QuoteWizardHeaderComponent } from './components/quote-wizard-header/quote-wizard-header';
import { QuoteWizardFooterComponent } from './components/quote-wizard-footer/quote-wizard-footer';
import { StepProjectTypeComponent } from './components/steps/step-project-type/step-project-type';
import { StepShowcaseComponent } from './components/steps/step-showcase/step-showcase';
import { StepSaasComponent } from './components/steps/step-saas/step-saas';
import { StepEcommerceComponent } from './components/steps/step-ecommerce/step-ecommerce';
import { StepMobileComponent } from './components/steps/step-mobile/step-mobile';
import { StepContactComponent } from './components/steps/step-contact/step-contact';
import { StepSuccessComponent } from './components/steps/step-success/step-success';
import { StepErrorComponent } from './components/steps/step-error/step-error';

@Component({
  selector: 'app-quote-wizard-modal',
  standalone: true,
  templateUrl: './quote-wizard-modal.html',
  styleUrl: './quote-wizard-modal.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [QuoteWizardStateService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuoteWizardHeaderComponent,
    QuoteWizardFooterComponent,
    StepProjectTypeComponent,
    StepShowcaseComponent,
    StepSaasComponent,
    StepEcommerceComponent,
    StepMobileComponent,
    StepContactComponent,
    StepSuccessComponent,
    StepErrorComponent,
  ],
})
export class QuoteWizardModal implements OnInit, OnDestroy {
  public state = inject(QuoteWizardStateService);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }
}

export default QuoteWizardModal;

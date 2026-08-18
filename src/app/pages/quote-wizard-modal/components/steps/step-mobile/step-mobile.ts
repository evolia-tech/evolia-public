import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from '../../option-card/option-card';
import { 
  MOBILE_TARGETS_OPTIONS, 
  MOBILE_BACKEND_OPTIONS, 
  MOBILE_FEATURES_OPTIONS, 
  MOBILE_CIBLE_OPTIONS, 
  MOBILE_BUDGET_OPTIONS, 
  MOBILE_TIMEFRAME_OPTIONS 
} from '../../../constants/quote-options.data';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-mobile',
  standalone: true,
  imports: [CommonModule, OptionCardComponent],
  templateUrl: './step-mobile.html',
  styleUrl: './step-mobile.scss',
})
export class StepMobileComponent {
  public state = inject(QuoteWizardStateService);

  mobileTargetsOptions = MOBILE_TARGETS_OPTIONS;
  mobileBackendOptions = MOBILE_BACKEND_OPTIONS;
  mobileFeaturesOptions = MOBILE_FEATURES_OPTIONS;
  mobileCibleOptions = MOBILE_CIBLE_OPTIONS;
  mobileBudgetOptions = MOBILE_BUDGET_OPTIONS;
  mobileTimeframeOptions = MOBILE_TIMEFRAME_OPTIONS;
}

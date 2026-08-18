import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from '../../option-card/option-card';
import { 
  SAAS_MATURITY_OPTIONS, 
  SAAS_USERS_OPTIONS, 
  SAAS_FEATURES_OPTIONS, 
  SAAS_INFRA_OPTIONS, 
  SAAS_BUDGET_OPTIONS, 
  SAAS_START_OPTIONS 
} from '../../../constants/quote-options.data';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-saas',
  standalone: true,
  imports: [CommonModule, OptionCardComponent],
  templateUrl: './step-saas.html',
  styleUrl: './step-saas.scss',
})
export class StepSaasComponent {
  public state = inject(QuoteWizardStateService);

  saasMaturityOptions = SAAS_MATURITY_OPTIONS;
  saasUsersOptions = SAAS_USERS_OPTIONS;
  saasFeaturesOptions = SAAS_FEATURES_OPTIONS;
  saasInfraOptions = SAAS_INFRA_OPTIONS;
  saasBudgetOptions = SAAS_BUDGET_OPTIONS;
  saasStartOptions = SAAS_START_OPTIONS;
}

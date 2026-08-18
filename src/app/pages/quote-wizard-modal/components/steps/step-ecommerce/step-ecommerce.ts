import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from '../../option-card/option-card';
import { 
  ECO_MODEL_OPTIONS, 
  ECO_CATALOG_OPTIONS, 
  ECO_PAYMENTS_OPTIONS, 
  ECO_FEATURES_OPTIONS, 
  ECO_BUDGET_OPTIONS, 
  ECO_TIMEFRAME_OPTIONS 
} from '../../../constants/quote-options.data';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-ecommerce',
  standalone: true,
  imports: [CommonModule, OptionCardComponent],
  templateUrl: './step-ecommerce.html',
  styleUrl: './step-ecommerce.scss',
})
export class StepEcommerceComponent {
  public state = inject(QuoteWizardStateService);

  ecoModelOptions = ECO_MODEL_OPTIONS;
  ecoCatalogOptions = ECO_CATALOG_OPTIONS;
  ecoPaymentsOptions = ECO_PAYMENTS_OPTIONS;
  ecoFeaturesOptions = ECO_FEATURES_OPTIONS;
  ecoBudgetOptions = ECO_BUDGET_OPTIONS;
  ecoTimeframeOptions = ECO_TIMEFRAME_OPTIONS;
}

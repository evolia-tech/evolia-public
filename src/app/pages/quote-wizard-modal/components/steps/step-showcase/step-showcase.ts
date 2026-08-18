import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionCardComponent } from '../../option-card/option-card';
import { 
  CREATION_OPTIONS, 
  GOAL_OPTIONS, 
  PAGES_OPTIONS, 
  FEATURES_OPTIONS, 
  BRANDING_OPTIONS, 
  BUDGET_OPTIONS, 
  TIMEFRAME_OPTIONS 
} from '../../../constants/quote-options.data';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-showcase',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, OptionCardComponent],
  templateUrl: './step-showcase.html',
  styleUrl: './step-showcase.scss',
})
export class StepShowcaseComponent {
  public state = inject(QuoteWizardStateService);

  creationOptions = CREATION_OPTIONS;
  goalOptions = GOAL_OPTIONS;
  pagesOptions = PAGES_OPTIONS;
  featuresOptions = FEATURES_OPTIONS;
  brandingOptions = BRANDING_OPTIONS;
  budgetOptions = BUDGET_OPTIONS;
  timeframeOptions = TIMEFRAME_OPTIONS;
}

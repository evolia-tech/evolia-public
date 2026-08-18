import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from '../../option-card/option-card';
import { PROJECT_OPTIONS } from '../../../constants/quote-options.data';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-project-type',
  standalone: true,
  imports: [CommonModule, OptionCardComponent],
  templateUrl: './step-project-type.html',
  styleUrl: './step-project-type.scss',
})
export class StepProjectTypeComponent {
  public state = inject(QuoteWizardStateService);
  options = PROJECT_OPTIONS;
}

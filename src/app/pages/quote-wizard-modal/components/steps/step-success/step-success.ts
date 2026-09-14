import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';
import { EvoButton } from '../../../../../shared/components/ui/evo-button/evo-button';

@Component({
  selector: 'app-step-success',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, EvoButton],
  templateUrl: './step-success.html',
  styleUrl: './step-success.scss',
})
export class StepSuccessComponent {
  public state = inject(QuoteWizardStateService);
  faCheck = faCheck;
}

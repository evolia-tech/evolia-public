import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { QuoteWizardStateService } from '../../services/quote-wizard-state.service';

@Component({
  selector: 'app-quote-wizard-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './quote-wizard-header.html',
  styleUrl: './quote-wizard-header.scss',
})
export class QuoteWizardHeaderComponent {
  public state = inject(QuoteWizardStateService);
  faTimes = faTimes;
}

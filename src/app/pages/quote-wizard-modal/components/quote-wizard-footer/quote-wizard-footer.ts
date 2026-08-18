import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { QuoteWizardStateService } from '../../services/quote-wizard-state.service';

@Component({
  selector: 'app-quote-wizard-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './quote-wizard-footer.html',
  styleUrl: './quote-wizard-footer.scss',
})
export class QuoteWizardFooterComponent {
  public state = inject(QuoteWizardStateService);

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faSpinner = faSpinner;
}

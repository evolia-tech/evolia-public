import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-error',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './step-error.html',
  styleUrl: './step-error.scss',
})
export class StepErrorComponent {
  public state = inject(QuoteWizardStateService);
  faExclamationTriangle = faExclamationTriangle;
  faEnvelope = faEnvelope;
  copied = false;

  public copyEmail() {
    navigator.clipboard.writeText('devis@evolia-tech.com');
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}

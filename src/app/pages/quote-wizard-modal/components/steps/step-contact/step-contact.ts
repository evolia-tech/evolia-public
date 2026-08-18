import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { QuoteWizardStateService } from '../../../services/quote-wizard-state.service';

@Component({
  selector: 'app-step-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './step-contact.html',
  styleUrl: './step-contact.scss',
})
export class StepContactComponent {
  public state = inject(QuoteWizardStateService);

  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGlobe = faGlobe;
}

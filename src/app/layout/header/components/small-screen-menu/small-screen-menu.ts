import { Component, output, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { QuoteService } from '../../../../core/services/quote';
import { CalendlyService } from '../../../../core/services/calendly';

@Component({
  selector: 'app-small-screen-menu',
  templateUrl: './small-screen-menu.html',
  styleUrl: './small-screen-menu.scss',
  imports: [RouterModule, FontAwesomeModule]
})
export class SmallScreenMenu {
  public quoteService = inject(QuoteService);
  public calendlyService = inject(CalendlyService);
  closeMenu = output<void>();

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  onLinkClick() {
    this.closeMenu.emit();
  }

  openQuote() {
    this.closeMenu.emit();
    this.quoteService.openQuoteForm();
  }

  openAudit() {
    this.closeMenu.emit();
    this.calendlyService.openAuditPopup();
  }
}


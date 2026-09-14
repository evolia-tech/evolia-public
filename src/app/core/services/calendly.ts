import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendlyService {
  // Lien Calendly officiel d'Évolia Tech
  private readonly defaultCalendlyUrl = 'https://calendly.com/samuelm-evolia-tech/30min';

  /**
   * Redirige directement vers le lien Calendly dans un nouvel onglet
   * @param customUrl URL Calendly personnalisée si nécessaire
   */
  openAuditPopup(customUrl?: string): void {
    const targetUrl = customUrl || this.defaultCalendlyUrl;
    if (typeof window !== 'undefined') {
      window.open(targetUrl, '_blank');
    }
  }
}

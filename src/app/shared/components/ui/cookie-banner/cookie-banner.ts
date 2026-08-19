import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GtmService } from '../../../../core/services/gtm';

export interface CookiePreferences {
  essential: boolean; // Toujours true
  analytics: boolean;
  timestamp: number;
}

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
  imports: [CommonModule, RouterLink]
})
export class CookieBanner implements OnInit {
  private gtmService = inject(GtmService);
  private platformId = inject(PLATFORM_ID);

  private readonly STORAGE_KEY = 'evolia_cookie_consent';
  private readonly FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000;
  private readonly SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

  protected isVisible = signal(false);
  protected isCustomizeModalOpen = signal(false);

  // États des préférences
  protected analyticsConsent = signal(false);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkExistingConsent();

    // Écoute de l'événement global personnalisation depuis le footer
    window.addEventListener('openCookieBanner', () => this.openBanner());
  }

  private checkExistingConsent(): void {
    try {
      const savedData = localStorage.getItem(this.STORAGE_KEY);
      if (savedData) {
        const preferences: CookiePreferences = JSON.parse(savedData);
        const now = Date.now();

        // 6 mois (180 jours) si accepté, 5 jours si refusé
        const expirationMs = preferences.analytics ? this.SIX_MONTHS_MS : this.FIVE_DAYS_MS;

        if (now - preferences.timestamp < expirationMs) {
          this.analyticsConsent.set(preferences.analytics);
          this.gtmService.updateConsent(preferences.analytics);
          this.isVisible.set(false);
          return;
        }
      }
    } catch (e) {
      console.warn('Erreur lecture consentement cookie:', e);
    }

    // Sinon afficher la bannière
    this.isVisible.set(true);
  }

  acceptAll(): void {
    this.saveConsent(true);
  }

  rejectAll(): void {
    this.saveConsent(false);
  }

  saveCustomPreferences(): void {
    this.saveConsent(this.analyticsConsent());
  }

  private saveConsent(analytics: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const preferences: CookiePreferences = {
      essential: true,
      analytics,
      timestamp: Date.now()
    };

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences));
    } catch (e) {
      console.warn('Erreur sauvegarde consentement cookie:', e);
    }

    this.analyticsConsent.set(analytics);
    this.gtmService.updateConsent(analytics);
    this.isVisible.set(false);
    this.isCustomizeModalOpen.set(false);
  }

  toggleAnalytics(): void {
    this.analyticsConsent.update(val => !val);
  }

  openCustomizeModal(): void {
    this.isCustomizeModalOpen.set(true);
  }

  closeCustomizeModal(): void {
    this.isCustomizeModalOpen.set(false);
  }

  openBanner(): void {
    this.isCustomizeModalOpen.set(false);
    this.isVisible.set(true);
  }
}

export default CookieBanner;

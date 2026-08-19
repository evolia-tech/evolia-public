import { inject, Injectable, PLATFORM_ID, DOCUMENT } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface GtmEventParams {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class GtmService {
  private document = inject(DOCUMENT);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  private isGtmInitialized = false;

  initGtmTracking(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // 1. Initialiser le Google Consent Mode v2 (denied par défaut pour le RGPD)
    this.initConsentMode();

    // 2. Injecter les scripts GTM si l'ID est configuré et non fictif
    const gtmId = environment.gtmId;
    if (gtmId && gtmId !== 'GTM-XXXXXXX') {
      this.injectGtmScript(gtmId);
    }

    // 3. Écouter les changements de routes (SPA Route Change Tracking)
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.pushEvent('page_view', {
          page_path: event.urlAfterRedirects || event.url,
          page_title: this.document.title,
        });
      });
  }

  private initConsentMode(): void {
    const windowObj = this.document.defaultView as any;
    if (!windowObj) return;

    windowObj.dataLayer = windowObj.dataLayer || [];
    function gtag(...args: any[]) {
      windowObj.dataLayer.push(arguments);
    }

    windowObj.gtag = gtag;

    // Par défaut (RGPD), stockage analytique et publicitaire refusé jusqu'à accord
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    });
  }

  private injectGtmScript(gtmId: string): void {
    if (this.isGtmInitialized) return;

    const head = this.document.head;

    // Script principal Google Tag Manager dans le <head>
    const script = this.document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
    head.appendChild(script);

    // Snippet noscript dans le <body>
    const noscript = this.document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    this.document.body.insertBefore(noscript, this.document.body.firstChild);

    this.isGtmInitialized = true;
  }

  // Envoyer un événement personnalisé dans GTM DataLayer (Conversions, clics, etc.)
  pushEvent(eventName: string, eventParams: GtmEventParams = {}): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const windowObj = this.document.defaultView as any;
    if (!windowObj) return;

    windowObj.dataLayer = windowObj.dataLayer || [];
    windowObj.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  // Mettre à jour le consentement une fois la bannière cookie acceptée
  updateConsent(granted: boolean): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const windowObj = this.document.defaultView as any;
    if (!windowObj || typeof windowObj.gtag !== 'function') return;

    const status = granted ? 'granted' : 'denied';
    windowObj.gtag('consent', 'update', {
      analytics_storage: status,
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });
  }
}

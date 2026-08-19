import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-bottom-menu',
  templateUrl: './footer-bottom-menu.html',
  styleUrl: './footer-bottom-menu.scss',
  imports: [
    RouterLink
  ]
})
export class FooterBottomMenu {
  private platformId = inject(PLATFORM_ID);
  protected readonly currentYear = new Date().getFullYear();

  openCookieSettings(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.dispatchEvent(new CustomEvent('openCookieBanner'));
    }
  }
}

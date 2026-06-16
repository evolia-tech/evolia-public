import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvoButton } from '../../shared/components/ui/evo-button/evo-button';
import { QuoteService } from '../../core/services/quote';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [
    CommonModule, 
    RouterModule, 
    EvoButton
  ],
})

export class Header {
  // Signal pour suivre l'état du scroll
  isScrolled = signal(false);
  
  private platformId = inject(PLATFORM_ID);
  public quoteService = inject(QuoteService);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Vérification SSR (Pour ne pas planter côté serveur)
    if (isPlatformBrowser(this.platformId)) {
      // Si on scrolle de plus de 50px, on change l'état
      this.isScrolled.set(window.scrollY > 50);
    }
  }
}
import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvoButton } from '../../shared/components/ui/evo-button/evo-button';
import { QuoteService } from '../../core/services/quote';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [
    CommonModule, 
    RouterModule, 
    EvoButton,
    FontAwesomeModule
  ],
})

export class Header {
  // Signal pour suivre l'état du scroll
  isScrolled = signal(false);
  
  // Signal pour suivre l'état d'ouverture du menu mobile
  isMenuOpen = signal(false);

  // FontAwesome Icons
  faBars = faBars;
  faTimes = faTimes;
  
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

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
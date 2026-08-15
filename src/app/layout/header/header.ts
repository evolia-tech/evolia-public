import { Component, signal, HostListener, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
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
export class Header implements OnInit {
  // Signal pour suivre si la route courante impose un header scrolled par défaut
  isDefaultScrolled = signal(false);

  // Signal pour suivre l'état du scroll
  isScrolled = signal(false);
  
  // Signal pour suivre l'état d'ouverture du menu mobile
  isMenuOpen = signal(false);

  // FontAwesome Icons
  faBars = faBars;
  faTimes = faTimes;
  
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  public quoteService = inject(QuoteService);

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateScrolledState();
    });
  }

  ngOnInit() {
    this.updateScrolledState();
  }

  private updateScrolledState() {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const defaultScrolled = route.snapshot.data['defaultScrolled'] ?? route.snapshot.data['headerScrolled'] ?? route.snapshot.data['isScrolled'] ?? false;
    this.isDefaultScrolled.set(!!defaultScrolled);

    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(this.isDefaultScrolled() || window.scrollY > 50);
    } else {
      this.isScrolled.set(this.isDefaultScrolled());
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(this.isDefaultScrolled() || window.scrollY > 50);
    }
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
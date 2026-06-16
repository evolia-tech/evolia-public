import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { RouterLink } from '@angular/router';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [
    RouterLink
  ]
})
export class Footer implements AfterViewInit, OnDestroy {
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;

  protected readonly currentYear = new Date().getFullYear();

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initFooterAnimation();
    }
  }

  private initFooterAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      this.ctx = gsap.context(() => {
        gsap.from('.company-name', {
          scrollTrigger: {
            trigger: '.brand-container',
            start: 'top bottom', // Quand le haut du footer entre dans l'écran
            end: 'bottom bottom', // Quand le bas du footer est calé au fond
            scrub: 1,
          },
          y: '50%', // On réduit un peu pour éviter les disparitions brutales
          opacity: 0.2,
          scale: 0.6,
          ease: 'power2.out',
        });
      });
    });
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}

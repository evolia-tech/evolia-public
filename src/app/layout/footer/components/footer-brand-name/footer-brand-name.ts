import {
  Component,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer-brand-name',
  templateUrl: './footer-brand-name.html',
  styleUrl: './footer-brand-name.scss',
  standalone: true
})
export class FooterBrandName implements AfterViewInit, OnDestroy {
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;

  @ViewChild('brandSection') brandSection!: ElementRef<HTMLDivElement>;
  @ViewChild('stretchWrapper') stretchWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('companyName') companyName!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initBrandLogic();
    }
  }

  private initBrandLogic(): void {
    this.ngZone.runOutsideAngular(() => {
      this.ctx = gsap.context(() => {

        const resizeTextToFitContainer = () => {
          const container = this.stretchWrapper.nativeElement;
          const textElement = this.companyName.nativeElement;

          // 1. On récupère la zone utile réelle à l'intérieur de la bordure jaune
          const computedStyle = window.getComputedStyle(container);
          const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
          const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
          const usableContainerWidth = container.clientWidth - (paddingLeft + paddingRight);

          // 2. ÉTAPE CRUCIALE : On applique une taille de police test (ex: 10px) 
          // et on retire TOUTE transformation d'échelle (scale) pour mesurer le ratio naturel
          gsap.set(textElement, { fontSize: '10px', scaleX: 1, scaleY: 1 });
          const textWidthAt10px = textElement.offsetWidth;

          if (textWidthAt10px > 0 && usableContainerWidth > 0) {
            // 3. Calcul mathématique du font-size parfait (Produit en croix)
            // (Largeur Cible * Taille de Base) / Largeur Actuelle
            const perfectFontSize = (usableContainerWidth * 10) / textWidthAt10px;

            // 4. On applique la taille de police calculée en pixels.
            // Le navigateur gère la hauteur et la largeur NATURELLEMENT sans écraser.
            gsap.set(textElement, { fontSize: `${perfectFontSize}px` });
          }
        };

        // Exécution initiale et écoute adaptative du redimensionnement de l'écran
        resizeTextToFitContainer();
        ScrollTrigger.addEventListener('refreshInit', resizeTextToFitContainer);

        // Animation ScrollTrigger fluide (on anime le Y sans toucher au scale)
        gsap.from(this.companyName.nativeElement, {
          scrollTrigger: {
            trigger: '.footer__brand-display',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
          y: '25%',
          opacity: 0.1,
          ease: 'power2.out',
        });

      });
    });
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
      ScrollTrigger.removeEventListener('refreshInit', () => { });
    }
  }
}
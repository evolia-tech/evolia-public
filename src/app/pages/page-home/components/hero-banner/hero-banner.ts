import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject,
  PLATFORM_ID,
  computed,
  ViewEncapsulation
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { ProjectModal } from '../../../../shared/components/ui/project-modal/project-modal';
import { ProjectService } from '../../../../core/services/project';

gsap.registerPlugin(Draggable);

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgOptimizedImage, FontAwesomeModule, ToFaIconPipe, EvoButton, ProjectModal],
})
export class HeroBanner implements AfterViewInit, OnDestroy {
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;
  private loop?: gsap.core.Animation;
  private draggable?: Draggable[];
  private observer?: IntersectionObserver;

  // Valeur par défaut (Sera écrasée par matchMedia)
  private scrollSpeed = 1;

  protected projectService = inject(ProjectService);

  protected projectsForCarousel = computed(() => {
    const base = this.projectService.projects();
    return [...base, ...base, ...base];
  });

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initCarouselLogic();
      this.setupIntersectionObserver();
    }
  }

  private initCarouselLogic(): void {
    const container = this.carouselContainer.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      this.ctx = gsap.context(() => {
        let mm = gsap.matchMedia();

        mm.add(
          {
            isMobile: '(max-width: 768px)',
            isDesktop: '(min-width: 769px)',
          },
          (context) => {
            // @ts-ignore
            const { isMobile } = context.conditions;
            this.scrollSpeed = isMobile ? 0.5 : 1;

            const cards = gsap.utils.toArray<HTMLElement>('.work-card');
            const gap = 24;
            const cardWidth = cards[0].offsetWidth;
            const totalIterationWidth = (cardWidth + gap) * this.projectsForCarousel().length;

            // Élément invisible qui sert de référence de position
            const proxy = document.createElement('div');
            let proxyX = 0;

            // Fonction de mise à jour visuelle (unifiée)
            const updateContainer = () => {
              const wrappedX = gsap.utils.wrap(0, -totalIterationWidth, proxyX);

              gsap.set(container, {
                x: wrappedX,
                force3D: true, // Force l'usage du hardware
                z: 0.01, // Hack : un micro-Z force le maintien du calque GPU
                rotationZ: 0.01, // Stabilise le moteur de rendu Chrome
              });
            };

            // 1. AUTO-SCROLL (Synchronisé avec le Proxy)
            this.loop = gsap.to(
              {},
              {
                duration: 1,
                repeat: -1,
                onUpdate: () => {
                  // On ne défile pas si on drag ou si un bouton anime déjà le proxy
                  if (!this.draggable?.[0].isDragging && !gsap.isTweening(proxy)) {
                    proxyX -= this.scrollSpeed;

                    // CRUCIAL : On déplace physiquement le proxy pour que
                    // le Draggable et les Boutons sachent où on en est.
                    gsap.set(proxy, { x: proxyX });
                    updateContainer();
                  }
                },
              },
            );

            // 2. DRAGGABLE
            this.draggable = Draggable.create(proxy, {
              type: 'x',
              trigger: container,
              zIndexBoost: false,
              onDrag: function () {
                // "this.x" est la position réelle du proxy gérée par GSAP
                proxyX = this['x'];
                updateContainer();
              },
              onRelease: function () {
                proxyX = this['x'];
              },
            });

            // 3. NAVIGATION PAR BOUTONS (Recalculée à chaque clic)
            (container as any)._moveFn = (direction: number) => {
              const step = cardWidth + gap;

              // On récupère la position actuelle EXACTE du proxy au moment du clic
              const currentProxyX = gsap.getProperty(proxy, 'x') as number;
              const targetX = currentProxyX + step * direction;

              // On anime le proxy vers la cible
              gsap.to(proxy, {
                duration: 0.8,
                x: targetX,
                ease: 'power3.out',
                overwrite: 'auto', // Annule l'animation précédente si on clique vite
                onUpdate: () => {
                  // On synchronise notre variable locale pendant l'animation
                  proxyX = gsap.getProperty(proxy, 'x') as number;
                  updateContainer();
                },
              });
            };

            // 4. ANIMATION DES VAGUES
            gsap.to(['.latest-works::before', '.latest-works::after'], {
              scaleY: 1.1,
              duration: 4,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              stagger: 0.5,
              force3D: true,
            });

            return () => {
              if (this.draggable) this.draggable.forEach((d) => d.kill());
              this.loop?.kill();
              gsap.killTweensOf(proxy);
            };
          },
        );
      }, container);
    });
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting ? this.loop?.play() : this.loop?.pause();
        });
      },
      { threshold: 0.05 },
    );
    this.observer.observe(this.carouselContainer.nativeElement);
  }

  move(direction: number): void {
    const container = this.carouselContainer.nativeElement;
    if (container._moveFn) {
      container._moveFn(direction);
    }
  }

  pauseGallery(): void {
    this.loop?.pause();
  }

  resumeGallery(): void {
    if (!this.draggable?.[0].isDragging) {
      this.loop?.play();
    }
  }

  onProjectClicked(index: number) {
    this.projectService.selectProject(index);

    this.pauseGallery();
  }

  handleClose() {
    this.projectService.closeModal();
    this.resumeGallery();
  }

  ngOnDestroy(): void {
    // 2. Nettoyage complet
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}

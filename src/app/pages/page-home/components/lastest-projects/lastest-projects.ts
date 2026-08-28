import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, computed, effect, ElementRef, inject, NgZone, OnDestroy, PLATFORM_ID, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { Router } from '@angular/router';
import { ProjectService } from '../../../../core/services/project';
import { ProjectLayoutService } from '../../../../layout/project-layout/services/project-layout';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';

@Component({
  selector: 'app-lastest-projects',
  templateUrl: './lastest-projects.html',
  styleUrl: './lastest-projects.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgOptimizedImage, FontAwesomeModule, ToFaIconPipe],
})
export class LastestProjects implements AfterViewInit, OnDestroy {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private loop: any;
  private draggable: any;
  private observer?: IntersectionObserver;
  private ctx?: gsap.Context;

  // OPTIMISATION : Utilisation d'un signal pour la réactivité de la vitesse
  private scrollSpeed = signal(1);

  protected projectService = inject(ProjectService);
  protected projectLayoutService = inject(ProjectLayoutService);

  protected projectsForCarousel = computed(() => {
    const base = this.projectService.spotlightedProjects().slice(0, 5);
    return [...base, ...base, ...base];
  });

  constructor() {
    const layoutService = inject(ProjectLayoutService);
    effect(() => {
      const isOpen = layoutService.isOpen();
      if (isOpen) {
        this.loop?.pause();
      } else {
        if (this.loop && !this.draggable?.[0].isDragging && !this.draggable?.[0].isThrowing) {
          this.loop.play();
        }
      }
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(Draggable);
      this.initCarouselLogic();
      this.setupIntersectionObserver();
    }
  }

  private initCarouselLogic(): void {
    const container = this.carouselContainer.nativeElement;

    // Sortir de zone.js pour éviter de déclencher le change detection 60 fois par seconde
    this.ngZone.runOutsideAngular(() => {
      this.ctx = gsap.context((context) => {
        const mm = gsap.matchMedia();

        mm.add(
          {
            isMobile: '(max-width: 768px)',
            isDesktop: '(min-width: 769px)',
          },
          (cond) => {
            const { isMobile } = cond.conditions as any;
            this.scrollSpeed.set(isMobile ? 0.5 : 0.8);

            const cards = gsap.utils.toArray<HTMLElement>('.work-card');
            if (cards.length === 0) return;

            const gap = 24;
            const cardWidth = cards[0].offsetWidth;
            // On calcule la largeur d'une seule itération (1/3 du total)
            const totalIterationWidth = (cardWidth + gap) * (this.projectsForCarousel().length / 3);

            const proxy = document.createElement('div');
            let proxyX = 0;

            // OPTIMISATION : QuickSetter (accès direct aux propriétés CSS sans parser)
            const setContainerX = gsap.quickSetter(container, 'x', 'px');
            const setProxyX = gsap.quickSetter(proxy, 'x', 'px');

            const updateContainer = (xValue: number) => {
              // Wrap infini sur la largeur d'une itération
              const wrappedX = gsap.utils.wrap(0, -totalIterationWidth, xValue);
              setContainerX(wrappedX);
            };

            // 1. AUTO-SCROLL
            this.loop = gsap.to(
              {},
              {
                duration: 1,
                repeat: -1,
                onUpdate: () => {
                  // On ne défile pas si on drag ou si le proxy est déjà en train d'animer (boutons)
                  if (
                    !this.draggable?.[0].isDragging &&
                    !this.draggable?.[0].isThrowing &&
                    !gsap.isTweening(proxy)
                  ) {
                    proxyX -= this.scrollSpeed();
                    setProxyX(proxyX);
                    updateContainer(proxyX);
                  }
                },
              },
            );

            // 2. DRAGGABLE (Avec support Inertie si présent)
            this.draggable = Draggable.create(proxy, {
              type: 'x',
              trigger: container,
              inertia: true, // Pour un mouvement "smooth" au relâcher
              onDrag: function () {
                proxyX = this['x'];
                updateContainer(this['x']);
              },
              onThrowUpdate: function () {
                proxyX = this['x'];
                updateContainer(this['x']);
              },
              onRelease: function () {
                proxyX = this['x'];
              },
            });

            // 3. NAVIGATION PAR BOUTONS
            (container as any)._moveFn = (direction: number) => {
              const step = cardWidth + gap;
              const currentProxyX = gsap.getProperty(proxy, 'x') as number;
              const targetX = currentProxyX + step * direction;

              gsap.to(proxy, {
                duration: 0.7,
                x: targetX,
                ease: 'power2.out', // Plus naturel pour une action utilisateur
                overwrite: 'auto',
                onUpdate: () => {
                  proxyX = gsap.getProperty(proxy, 'x') as number;
                  updateContainer(proxyX);
                },
              });
            };

            return () => {
              this.draggable?.forEach((d: any) => d.kill());
              this.loop?.kill();
              gsap.killTweensOf(proxy);
            };
          },
        );
      }, container);
    });
  }

  private setupIntersectionObserver(): void {
    // Sur mobile, le scroll se fait souvent dans un conteneur interne (pas la viewport),
    // ce qui empêche l'IntersectionObserver (root: null) de détecter la visibilité.
    // Solution : on ne met en pause que si l'utilisateur a DÉJÀ vu le carrousel
    // et scrolle vers une autre section. On ne pause PAS lors du chargement initial.
    let hasBeenVisible = false;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Le carrousel est visible → on joue et on mémorise
            hasBeenVisible = true;
            this.loop?.play();
          } else if (hasBeenVisible) {
            // L'utilisateur a déjà vu le carrousel et est reparti → on pause
            this.loop?.pause();
          }
          // Si jamais visible ET hors écran = chargement initial sous le fold
          // → On ne touche pas au loop (il joue déjà, efficace car hors NgZone)
        });
      },
      { threshold: 0.05 },
    );
    this.observer.observe(this.carouselContainer.nativeElement);
  }

  move(direction: number): void {
    const container = this.carouselContainer.nativeElement;
    if ((container as any)._moveFn) {
      (container as any)._moveFn(direction);
    }
  }

  private isMobileDevice(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return window.innerWidth <= 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  }

  pauseGallery(isHover = false): void {
    if (isHover && this.isMobileDevice()) return;
    this.loop?.pause();
  }

  resumeGallery(isHover = false): void {
    if (isHover && this.isMobileDevice()) return;
    // On ne relance que si l'utilisateur n'est pas en train de draguer
    if (!this.draggable?.[0].isDragging && !this.draggable?.[0].isThrowing) {
      this.loop?.play();
    }
  }

  private router = inject(Router);

  onProjectClicked(index: number) {
    const selectedProject = this.projectService.selectProject(index);

    if (selectedProject) {
      this.router.navigate(['/portfolio', selectedProject.slug], { state: { from: '/' } });
    }
  }

  ngOnDestroy(): void {
    // NETTOYAGE COMPLET
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.ctx) {
      this.ctx.revert();
    }
    const container = this.carouselContainer?.nativeElement;
    if (container) {
      delete (container as any)._moveFn;
    }
  }
}

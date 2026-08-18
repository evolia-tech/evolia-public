import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Imports Matter.js
import { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } from 'matter-js';

// Imports GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import { QuoteService } from '../../../../core/services/quote';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services-grid',
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.scss',
  imports: [
    EvoButton
  ],
})
export class ServicesGrid implements AfterViewInit, OnDestroy {
  @ViewChild('tagList') tagList!: ElementRef<HTMLUListElement>;
  @ViewChild('designCard') designCard?: ElementRef<HTMLElement>;
  @ViewChild('logoCard') logoCard?: ElementRef<HTMLElement>;

  public quoteService = inject(QuoteService);
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;
  private engine?: Engine;
  private runner?: Runner;
  private ground?: any;
  private leftWall?: any;
  private rightWall?: any;
  private ceiling?: any;
  private listeners: { element: HTMLElement; event: string; handler: any }[] = [];

  @HostListener('window:resize')
  onResize() {
    this.updatePhysicalBounds();
  }

  readonly toolsWeUse = [
    'Angular',
    'NestJS',
    'Flutter',
    'Keycloak',
    'Docker',
    'Kubernetes',
    'API Rest / GraphQL',
    'AWS',
    'Genkit(AI)',
    'Notion',
    '02Switch',
    'CI / CD'
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initBentoPhysics();
      this.initDesignCardAnimation();
      this.initLogoCardAnimation();
    }
  }

  private initBentoPhysics() {
    const container = this.tagList.nativeElement;
    const tags = container.querySelectorAll('li');

    // On sort d'Angular pour ne pas déclencher la détection de changement 60 fois par seconde
    this.ngZone.runOutsideAngular(() => {
      this.ctx = gsap.context(() => {
        // 1. Initialisation du moteur physique
        this.engine = Engine.create();
        this.engine.gravity.y = 0.8;
        this.runner = Runner.create();

        const wallThickness = 100;
        const width = container.clientWidth || 300;
        const height = Math.max(container.clientHeight, 180);

        // Création des 4 parois (sol, plafond, murs gauche et droite)
        this.ground = Bodies.rectangle(
          width / 2,
          height + wallThickness / 2,
          width + wallThickness * 2,
          wallThickness,
          { isStatic: true }
        );

        this.leftWall = Bodies.rectangle(
          -wallThickness / 2,
          height / 2,
          wallThickness,
          height + wallThickness * 2,
          { isStatic: true }
        );

        this.rightWall = Bodies.rectangle(
          width + wallThickness / 2,
          height / 2,
          wallThickness,
          height + wallThickness * 2,
          { isStatic: true }
        );

        this.ceiling = Bodies.rectangle(
          width / 2,
          -wallThickness / 2,
          width + wallThickness * 2,
          wallThickness,
          { isStatic: true }
        );

        const tagBodies: any[] = [];

        // 2. Création des corps physiques et QuickSetters
        tags.forEach((tag, index) => {
          const rect = tag.getBoundingClientRect();
          const tagWidth = rect.width || 80;
          const tagHeight = rect.height || 30;

          // Calcul de positions de départ sécurisées pour éviter le chevauchement avec les murs
          const minX = tagWidth / 2 + 10;
          const maxX = Math.max(minX + 10, width - tagWidth / 2 - 10);
          const startX = minX + Math.random() * (maxX - minX);
          
          // Démarrage en cascade sous le plafond
          const startY = tagHeight / 2 + 10 + (index % 4) * 15;

          const body = Bodies.rectangle(startX, startY, tagWidth, tagHeight, {
            restitution: 0.5,
            frictionAir: 0.07,
            friction: 0.1,
            chamfer: { radius: 5 },
            angle: (Math.random() - 0.5) * 0.4,
          });

          // OPTIMISATION : Accès direct aux propriétés CSS
          const setX = gsap.quickSetter(tag, 'x', 'px');
          const setY = gsap.quickSetter(tag, 'y', 'px');
          const setRotation = gsap.quickSetter(tag, 'rotation', 'deg');

          (body as any).renderData = { setX, setY, setRotation, element: tag };
          tagBodies.push(body);

          // Masquage initial
          gsap.set(tag, {
            position: 'absolute',
            top: 0,
            left: 0,
            x: startX,
            y: startY,
            opacity: 0,
            visibility: 'hidden',
          });
        });

        // 3. INTERACTION SOURIS (Optimisée pour laisser passer le scroll)
        const mouse = Mouse.create(container);

        // CORRECTION SCROLL : On retire les listeners qui bloquent la roue de la souris
        // @ts-ignore
        mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
        // @ts-ignore
        mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

        const mouseConstraint = MouseConstraint.create(this.engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false },
          },
        });

        // 4. Boucle de rendu Physique -> DOM
        Events.on(this.engine, 'afterUpdate', () => {
          tagBodies.forEach((body) => {
            const { x, y } = body.position;
            const { setX, setY, setRotation, element } = body.renderData;

            setX(x - element.offsetWidth / 2);
            setY(y - element.offsetHeight / 2);
            setRotation(body.angle * (180 / Math.PI));
          });
        });

        // 5. Trigger unique (One-Shot)
        ScrollTrigger.create({
          trigger: container,
          start: 'top 85%',
          once: true, // L'animation ne se joue qu'une fois
          onEnter: () => {
            // Apparition visuelle smooth
            gsap.set(tags, { visibility: 'visible' });
            gsap.to(tags, {
              opacity: 1,
              duration: 0.6,
              stagger: 0.05,
              ease: 'power2.out',
            });

            if (this.engine && this.runner) {
              // Lancement de la simulation avec les 4 parois
              Composite.add(this.engine.world, [
                this.ground,
                this.leftWall,
                this.rightWall,
                this.ceiling,
                mouseConstraint,
                ...tagBodies
              ]);
              Runner.run(this.runner, this.engine);
            }
          },
        });
      }, container);
    });
  }

  private updatePhysicalBounds() {
    if (!this.engine || !this.ground || !this.leftWall || !this.rightWall || !this.ceiling) {
      return;
    }

    const container = this.tagList.nativeElement;
    const width = container.clientWidth || 300;
    const height = Math.max(container.clientHeight, 180);
    const wallThickness = 100;

    // Repositionne le sol
    Body.setPosition(this.ground, {
      x: width / 2,
      y: height + wallThickness / 2,
    });

    // Repositionne le mur de gauche
    Body.setPosition(this.leftWall, {
      x: -wallThickness / 2,
      y: height / 2,
    });

    // Repositionne le mur de droite
    Body.setPosition(this.rightWall, {
      x: width + wallThickness / 2,
      y: height / 2,
    });

    // Repositionne le plafond
    Body.setPosition(this.ceiling, {
      x: width / 2,
      y: -wallThickness / 2,
    });
  }

  private addListener(element: HTMLElement, event: string, handler: any) {
    element.addEventListener(event, handler);
    this.listeners.push({ element, event, handler });
  }

  private initDesignCardAnimation() {
    if (!this.designCard) return;

    const card = this.designCard.nativeElement;
    const cursor = card.querySelector('.figma-cursor') as HTMLElement;
    const wireframe = card.querySelector('.wireframe-svg') as HTMLElement;

    if (!cursor || !wireframe) return;

    // Floating animation
    const floatTween = gsap.to(cursor, {
      x: '+=10',
      y: '+=8',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    this.addListener(card, 'mouseenter', () => {
      // Pause float
      floatTween.pause();

      // Animate cursor to button position
      gsap.to(cursor, {
        x: 140,
        y: 45,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          // Click effect
          gsap.to(cursor, {
            scale: 0.85,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onStart: () => {
              wireframe.classList.add('highlighted');
            }
          });
        }
      });
    });

    this.addListener(card, 'mouseleave', () => {
      wireframe.classList.remove('highlighted');
      // Reset cursor and resume floating
      gsap.to(cursor, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          floatTween.invalidate();
          floatTween.restart();
        }
      });
    });
  }

  private initLogoCardAnimation() {
    if (!this.logoCard) return;

    const card = this.logoCard.nativeElement;
    const canvas = card.querySelector('.card__logo-canvas') as HTMLElement;
    const vectorStudio = card.querySelector('.vector-studio-svg') as HTMLElement;
    const vectorPath = card.querySelector('.vector-path') as SVGPathElement;
    const handleLine1 = card.querySelector('.handle-line-1') as SVGLineElement;
    const handleLine2 = card.querySelector('.handle-line-2') as SVGLineElement;
    const handlePoint1 = card.querySelector('.handle-point-1') as SVGCircleElement;
    const handlePoint2 = card.querySelector('.handle-point-2') as SVGCircleElement;
    const penTool = card.querySelector('.vector-pen-tool') as HTMLElement;

    if (!canvas || !vectorStudio || !vectorPath || !handleLine1 || !handleLine2 || !handlePoint1 || !handlePoint2 || !penTool) return;

    // Current bezier control parameters (viewBox 300x150)
    const controlParams = {
      cx1: 170,
      cy1: 110,
      cx2: 180,
      cy2: 30,
    };

    // Synchronize handles, lines and pen tool position with control parameters
    const updateCurve = () => {
      // Bezier curve update
      vectorPath.setAttribute('d', `M140 110 C${controlParams.cx1} ${controlParams.cy1}, ${controlParams.cx2} ${controlParams.cy2}, 240 30`);

      // Tangent lines update
      handleLine1.setAttribute('x2', controlParams.cx1.toString());
      handleLine1.setAttribute('y2', controlParams.cy1.toString());

      handleLine2.setAttribute('x2', controlParams.cx2.toString());
      handleLine2.setAttribute('y2', controlParams.cy2.toString());

      // Control points update
      handlePoint1.setAttribute('cx', controlParams.cx1.toString());
      handlePoint1.setAttribute('cy', controlParams.cy1.toString());

      handlePoint2.setAttribute('cx', controlParams.cx2.toString());
      handlePoint2.setAttribute('cy', controlParams.cy2.toString());

      // Pen Tool follow point-2
      // Using exact ratios since viewBox is 300x150
      penTool.style.left = `${(controlParams.cx2 / 3) - 2.5}%`;
      penTool.style.top = `${(controlParams.cy2 / 1.5) - 3.5}%`;
    };

    // Initial position call
    updateCurve();

    // Idle floating animation
    const idleTween = gsap.to(controlParams, {
      cx2: '+=10',
      cy2: '+=12',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      onUpdate: updateCurve,
    });

    this.addListener(card, 'mouseenter', () => {
      vectorStudio.classList.add('hovered');
      idleTween.pause();
    });

    this.addListener(card, 'mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const xPercent = (e.clientX - rect.left) / rect.width;
      const yPercent = (e.clientY - rect.top) / rect.height;

      // Map mouse coordinates to control point coordinates within viewBox 300x150
      const targetCx2 = 160 + xPercent * 60; // 160 to 220
      const targetCy2 = 20 + yPercent * 80;   // 20 to 100

      const targetCx1 = 150 + (1 - xPercent) * 40; // 150 to 190
      const targetCy1 = 80 + yPercent * 30;

      gsap.to(controlParams, {
        cx1: targetCx1,
        cy1: targetCy1,
        cx2: targetCx2,
        cy2: targetCy2,
        duration: 0.4,
        ease: 'power2.out',
        onUpdate: updateCurve,
      });
    });

    this.addListener(card, 'mouseleave', () => {
      vectorStudio.classList.remove('hovered');

      // Reset values back to defaults and resume idle float
      gsap.to(controlParams, {
        cx1: 170,
        cy1: 110,
        cx2: 180,
        cy2: 30,
        duration: 0.8,
        ease: 'power2.out',
        onUpdate: updateCurve,
        onComplete: () => {
          idleTween.invalidate();
          idleTween.restart();
        },
      });
    });
  }

  ngOnDestroy(): void {
    // Nettoyage des listeners
    this.listeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });

    // Nettoyage complet (GSAP + ScrollTrigger + Matter.js)
    if (this.runner) {
      Runner.stop(this.runner);
    }
    if (this.engine) {
      Engine.clear(this.engine);
    }
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}

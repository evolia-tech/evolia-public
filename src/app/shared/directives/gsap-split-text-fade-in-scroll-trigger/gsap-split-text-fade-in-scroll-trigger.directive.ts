import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';

import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

@Directive({
  selector: '[appGsapSplitTextFadeInScrollTrigger]',
  standalone: true
})
export class GsapSplitTextFadeInScrollTriggerDirective implements AfterViewInit, OnDestroy {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private el = inject(ElementRef<HTMLElement>);
  private ngZone = inject(NgZone);

  isTextSplit = input<boolean>(true);
  duration = input<number>(0.7);
  delay = input<number>(0);

  private trigger?: ScrollTrigger;
  private splitTextInstance?: SplitText;

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          this.initAnimations();
        });
      });
    }
  }

  private initAnimations(): void {
    const element = this.el.nativeElement;
    let animationTarget: Element | Element[] | HTMLElement | HTMLElement[] = element;

    if (this.isTextSplit()) {
      if (!element.getAttribute('aria-label')) {
        element.setAttribute('aria-label', element.innerText);
      }

      this.splitTextInstance = SplitText.create(element, {
        type: 'lines',
        mask: 'lines'
      });

      animationTarget = this.splitTextInstance.lines;
      gsap.set(element, { opacity: 1 });
    }

    const scrollerElement = element.closest('.content-side') || window;

    this.trigger = ScrollTrigger.create({
      trigger: element,
      scroller: scrollerElement,
      start: 'top 92%',
      toggleActions: 'play none none reverse',
      animation: gsap.fromTo(
        animationTarget,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: this.isTextSplit() ? 0.12 : 0,
          duration: this.duration(),
          delay: this.delay(),
          ease: 'power2.out'
        }
      )
    });
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.trigger?.kill();
      this.splitTextInstance?.revert();
    }
  }
}

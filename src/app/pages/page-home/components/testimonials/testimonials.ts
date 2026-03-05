import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Testimonials as TestimonialsService } from '../../../../core/services/testimonials';
import { Testimonial } from '../../../../shared/models/testimonial';
import gsap from 'gsap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ToFaIconPipe
  ],
})
export class Testimonials {
  private service = inject(TestimonialsService);

  // Données
  testimonials = this.service.getTestimonials();

  // État actuel
  currentIndex = signal(0);
  current = signal<Testimonial>(this.testimonials[0]);

  // Références pour l'animation GSAP
  @ViewChild('contentWrapper') contentWrapper!: ElementRef;

  next() {
    this.animateChange(() => {
      const nextIndex = (this.currentIndex() + 1) % this.testimonials.length;
      this.currentIndex.set(nextIndex);
      this.current.set(this.testimonials[nextIndex]);
    });
  }

  prev() {
    this.animateChange(() => {
      const prevIndex =
        (this.currentIndex() - 1 + this.testimonials.length) % this.testimonials.length;
      this.currentIndex.set(prevIndex);
      this.current.set(this.testimonials[prevIndex]);
    });
  }

  playVideo(url?: string) {
    if (url) {
      window.open(url, '_blank');
      // Idéalement : Ouvrir une modal (dialog) avec la vidéo ici
    }
  }

  // Animation de transition fluide
  private animateChange(updateState: () => void) {
    const el = this.contentWrapper.nativeElement;

    // Timeline GSAP : Fade Out -> Changement donnée -> Fade In
    const tl = gsap.timeline();

    tl.to(el, { opacity: 0, x: -20, duration: 0.3, ease: 'power2.in' })
      .call(updateState) // On change les données quand c'est invisible
      .set(el, { x: 20 }) // On prépare l'arrivée par la droite
      .to(el, { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' });
  }
}

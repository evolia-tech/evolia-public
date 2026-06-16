// core/services/seo.service.ts
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateMeta(data: {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
  }): void {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    this.title.setTitle(data.title);

    // --- BALISES STANDARDS ---
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // --- FACEBOOK / OPEN GRAPH ---
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }

    // --- TWITTER / X CARDS ---
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }
  }

  resetMeta(): void {
    this.updateMeta({
      title: 'Évolia Tech | Agence Digitale & Expertise Web',
      description:
        'Nous transformons vos idées en solutions digitales haute performance : Angular, Node.js, E-commerce et Stratégie IT.',
      keywords: 'Agence web Cameroun, Développement sur mesure, Évolia Tech, Digitalisation',
      image: '/assets/icons/og-default-evolia.png',
    });
  }
}

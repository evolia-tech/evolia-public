import { inject, Injectable, DOCUMENT } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private document = inject(DOCUMENT);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);
  private titleService = inject(Title);

  private readonly baseUrl = environment.siteUrl;
  private readonly defaultTitle = environment.defaultTitle;
  private readonly defaultDescription = environment.defaultDescription;
  private readonly defaultImage = environment.defaultOgImage;

  initCanonicalUrlListener(): void {
    // Premier réglage sur l'URL actuelle
    this.handleRouteChange(this.router.url);

    // Écoute de tous les changements de routes futurs
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.handleRouteChange(event.urlAfterRedirects || event.url);
      });
  }

  private handleRouteChange(url: string): void {
    this.updateCanonicalUrl(url);

    // Extraction dynamique des métadonnées de route (route.data)
    let active = this.route.root;
    while (active.firstChild) {
      active = active.firstChild;
    }

    const routeData = active.snapshot.data;
    if (routeData) {
      const description = routeData['description'] || this.defaultDescription;
      const image = routeData['ogImage'] || routeData['image'] || this.defaultImage;

      this.updateMeta({
        title: active.snapshot.title || this.defaultTitle,
        description,
        image,
      });
    }
  }

  updateCanonicalUrl(path: string): void {
    if (!path) return;

    // Nettoyage du chemin (suppression des paramètres d'URL ? et des ancres #)
    const cleanPath = path.split('?')[0].split('#')[0];
    const canonicalUrl = `${this.baseUrl}${cleanPath === '/' ? '' : cleanPath}`;

    // 1. Balise <link rel="canonical" href="...">
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 2. Balises Méta Réseaux Sociaux (Open Graph et Twitter Card)
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:url', content: canonicalUrl });
  }

  updateMeta(config: SeoConfig): void {
    const title = config.title || this.defaultTitle;
    const description = config.description || this.defaultDescription;
    const image = config.image || this.defaultImage;

    this.titleService.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });
    if (config.keywords) {
      const keywordsStr = Array.isArray(config.keywords) ? config.keywords.join(', ') : config.keywords;
      this.meta.updateTag({ name: 'keywords', content: keywordsStr });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  resetMeta(): void {
    this.updateMeta({
      title: this.defaultTitle,
      description: this.defaultDescription,
      image: this.defaultImage,
    });
  }
}

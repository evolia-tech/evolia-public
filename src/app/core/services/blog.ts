import { Injectable, signal, computed } from '@angular/core';
import { BlogPostItem } from '../../shared/models/blog-post-item';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly _posts = signal<BlogPostItem[]>([
    {
      id: '1',
      title: "L'art des paysages naturels inspire la création moderne",
      slug: 'art-paysages-naturels-inspire-creation-moderne',
      imageUrl: '/images/projects/stella.png', // Remplacez par vos chemins réels
      imageAlt: 'Conceptualisation visuelle avec des formes naturelles texturées',
      description: 'Découvrez comment les textures organiques et brutes façonnent la prochaine génération d’interfaces numériques et d’expériences utilisateur.',
      publishedAt: new Date('2026-06-15'),
      category: 'Design'
    },
    {
      id: '2',
      title: 'Dans les coulisses d’un site de marque : langage visuel et identité',
      slug: 'dans-les-coulisses-site-marque-langage-visuel-identite',
      imageUrl: '/images/projects/liko-auto.png', // Remplacez par vos chemins réels
      imageAlt: 'Ordinateur portable affichant le site de design de marque Studio Anise',
      description: 'Une plongée au cœur de notre méthode pour combiner typographie, ton de marque et stack technique afin de créer des projets d’identité mémorables.',
      publishedAt: new Date('2026-06-20'),
      category: 'Branding'
    },
    {
      id: '3',
      title: 'Entre espaces urbains et récits visuels captivants',
      slug: 'entre-espaces-urbains-recits-visuels-captivants',
      imageUrl: '/images/projects/soprano-vesinet.png', // Remplacez par vos chemins réels
      imageAlt: 'Écran d’ordinateur portable montrant un site de voyage avec des montgolfières',
      description: 'Combler le fossé entre l’échelle architecturale du monde réel et la fluidité des interfaces utilisateur numériques.',
      publishedAt: new Date('2026-06-25'),
      category: 'Développement'
    }
  ]);

  // Signal public exposé en lecture seule pour les composants
  readonly latestPosts = computed(() => this._posts());
}
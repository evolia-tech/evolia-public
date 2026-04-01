import { Injectable, Type, signal, computed } from '@angular/core';
import { Project } from '../../shared/models/project';
import { PageComingSoon } from '../../pages/page-coming-soon/page-coming-soon';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Données privées
  private readonly _projects = signal<Project[]>([
{
      id: 1,
      title: 'E-commerce Mode',
      slug: 'ecommerce-mode',
      image: '/images/projects/1.jpeg',
      modalImage: '/images/projects/1.jpeg',
    },
    {
      id: 2,
      title: 'App Livraison',
      slug: 'app-livraison',
      image: '/images/projects/2.jpeg',
      modalImage: '/images/projects/2.jpeg',
    },
    {
      id: 3,
      title: 'Dashboard RH',
      slug: 'dashboard-rh',
      image: '/images/projects/3.jpeg',
      modalImage: '/images/projects/3.jpeg',
    },
    {
      id: 4,
      title: 'Site Vitrine Corporate',
      slug: 'site-vitrine-corporate',
      image: '/images/projects/4.jpg',
      modalImage: '/images/projects/4.jpg',
    }
  ]);

  // Mapping des pages de projets
  private readonly projectMap: Record<string, Type<any>> = {
    'default': PageComingSoon,
    // 'immo': PageImmoComponent
  };

  // États exposés en lecture seule
  readonly projects = this._projects.asReadonly();
  readonly selectedProject = signal<Project | null>(null);
  readonly isModalVisible = signal(false);

  // Calcul automatique du composant à injecter
  readonly currentComponent = computed(() => {
    const project = this.selectedProject();
    return project ? (this.projectMap[project.slug] || this.projectMap['default']) : null;
  });

  // Actions
  selectProject(index: number) {
    const list = this._projects();
    const project = list[index % list.length]; // Gestion du carrousel infini
    this.selectedProject.set(project);
    this.isModalVisible.set(true);
  }

  closeModal() {
    this.isModalVisible.set(false);
  }
}
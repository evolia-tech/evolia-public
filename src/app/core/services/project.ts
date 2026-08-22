import { inject, Injectable, signal, computed } from '@angular/core';
import { Project } from '../../shared/models/project';
import { PROJECTS_DATA } from '../../shared/constants/projects.data';
import { SeoService } from './seo';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly seoService = inject(SeoService);

  private readonly _projects = signal<Project[]>(
    [...PROJECTS_DATA].sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
  );
  private readonly _selectedProject = signal<Project | null>(null);

  readonly projects = this._projects.asReadonly();
  readonly selectedProject = this._selectedProject.asReadonly();

  // Projets mis en avant pour la page d'accueil (latest-projects)
  readonly spotlightedProjects = computed(() =>
    this._projects().filter((p) => p.isSpotlighted ?? false)
  );

  /**
   * Sélectionne un projet par index (sur la liste des spotlighted), par objet Project ou par slug
   */
  selectProject(target: number | Project | string): Project | null {
    const list = this._projects();
    if (list.length === 0) return null;

    let project: Project | undefined;

    if (typeof target === 'number') {
      const spotlighted = this.spotlightedProjects();
      const searchList = spotlighted.length > 0 ? spotlighted : list;
      const normalizedIndex = target % searchList.length;
      project = searchList[normalizedIndex < 0 ? normalizedIndex + searchList.length : normalizedIndex];
    } else if (typeof target === 'string') {
      project = list.find((p) => p.slug === target);
    } else {
      project = target;
    }

    if (!project) return null;

    this._selectedProject.set(project);

    // Mise à jour SEO
    this.seoService.updateMeta({
      title: project.seoTitle,
      description: project.seoDescription,
      keywords: project.keywords,
      image: project.seoImage || 'https://evolia-tech.com/images/logo-evolia-tech.png',
    });

    return project;
  }

  clearSelection(): void {
    this._selectedProject.set(null);
    this.seoService.resetMeta();
  }
}

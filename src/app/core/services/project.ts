import { inject, Injectable, Type, signal, computed } from '@angular/core';
import { Project } from '../../shared/models/project';
import { PROJECTS_DATA } from '../../shared/constants/projects.data';
import { PageComingSoon } from '../../pages/page-coming-soon/page-coming-soon';
import { SeoService } from './seo';
import { PageProjectMaholDiaspora } from '../../pages/page-project-mahol-diaspora/page-project-mahol-diaspora';
import { PageProjectForYouMediaAfrica } from '../../pages/page-project-for-you-media-africa/page-project-for-you-media-africa';
import { PageProjectSopranoVesinet } from '../../pages/page-project-soprano-vesinet/page-project-soprano-vesinet';
import { PageProjectStella } from '../../pages/page-project-stella/page-project-stella';
import { PageProjectLikoAuto } from '../../pages/page-project-liko-auto/page-project-liko-auto';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly seoService = inject(SeoService);

  private readonly _projects = signal<Project[]>(PROJECTS_DATA);
  private readonly _selectedProject = signal<Project | null>(null);

  readonly projects = this._projects.asReadonly();
  readonly selectedProject = this._selectedProject.asReadonly();

  readonly currentComponent = computed(() => {
    const project = this._selectedProject();
    if (!project) return null;
    return this.projectMap[project.slug] || this.projectMap['default'];
  });

  private readonly projectMap: Record<string, any> = {
    default: PageComingSoon,
    'liko-auto': PageProjectLikoAuto,
    'association-mahol-diaspora': PageProjectMaholDiaspora,
    'for-you-media-africa': PageProjectForYouMediaAfrica,
    'soprano-vesinet': PageProjectSopranoVesinet,
    'stella': PageProjectStella,
  };

  /**
   * Sélectionne un projet (sans ouvrir la modale)
   */
  selectProject(index: number): Project | null {
    const list = this._projects();
    if (list.length === 0) return null;

    const normalizedIndex = index % list.length;
    const project = list[normalizedIndex < 0 ? normalizedIndex + list.length : normalizedIndex];

    this._selectedProject.set(project);

    // Mise à jour SEO
    this.seoService.updateMeta({
      title: project.seoTitle,
      description: project.seoDescription,
      keywords: project.keywords,
      image: project.image,
    });

    return project;
  }

  clearSelection(): void {
    this._selectedProject.set(null);
    this.seoService.resetMeta();
  }
}

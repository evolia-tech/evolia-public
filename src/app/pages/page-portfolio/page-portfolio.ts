import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../core/services/project';
import { ProjectModalService } from '../../shared/components/ui/project-modal/services/project-modal';
import { ProjectModal } from '../../shared/components/ui/project-modal/project-modal';
import { Project } from '../../shared/models/project';
import { PortfolioHeroBanner } from './components/hero-banner/hero-banner';
import { ProjectsList } from './components/projects-list/projects-list';

@Component({
  selector: 'app-page-portfolio',
  standalone: true,
  templateUrl: './page-portfolio.html',
  styleUrl: './page-portfolio.scss',
  imports: [CommonModule, PortfolioHeroBanner, ProjectsList, ProjectModal],
})
export class PagePortfolio {
  private projectService = inject(ProjectService);
  private projectModalService = inject(ProjectModalService);

  projects = this.projectService.projects;

  openProjectModal(project: Project): void {
    this.projectService.selectProject(project);
    this.projectModalService.open(project);
  }
}

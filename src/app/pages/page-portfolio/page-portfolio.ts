import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../../core/services/project';
import { Project } from '../../shared/models/project';
import { PortfolioHeroBanner } from './components/hero-banner/hero-banner';
import { ProjectsList } from './components/projects-list/projects-list';
import { ProjectPendingModal } from '../../shared/components/ui/project-pending-modal/project-pending-modal';

@Component({
  selector: 'app-page-portfolio',
  standalone: true,
  templateUrl: './page-portfolio.html',
  styleUrl: './page-portfolio.scss',
  imports: [CommonModule, PortfolioHeroBanner, ProjectsList, ProjectPendingModal],
})
export class PagePortfolio {
  private projectService = inject(ProjectService);
  private router = inject(Router);

  projects = this.projectService.projects;
  pendingProject = signal<Project | null>(null);

  openProjectModal(project: Project): void {
    if (project.blocks && project.blocks.length > 0) {
      this.router.navigate(['/portfolio', project.slug], { state: { from: '/portfolio' } });
    } else {
      this.pendingProject.set(project);
    }
  }

  closePendingModal(): void {
    this.pendingProject.set(null);
  }
}

export default PagePortfolio;

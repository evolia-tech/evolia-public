import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectService } from '../../core/services/project';
import { Project } from '../../shared/models/project';
import { PortfolioHeroBanner } from './components/hero-banner/hero-banner';
import { ProjectsList } from './components/projects-list/projects-list';

@Component({
  selector: 'app-page-portfolio',
  standalone: true,
  templateUrl: './page-portfolio.html',
  styleUrl: './page-portfolio.scss',
  imports: [CommonModule, PortfolioHeroBanner, ProjectsList],
})
export class PagePortfolio {
  private projectService = inject(ProjectService);
  private router = inject(Router);

  projects = this.projectService.projects;

  openProjectModal(project: Project): void {
    this.router.navigate(['/portfolio', project.slug]);
  }
}

export default PagePortfolio;

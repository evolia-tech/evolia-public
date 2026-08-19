import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { ProjectService } from '../../../core/services/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectLayoutService {
  private readonly _isOpen = signal(true);
  private readonly _currentProject = signal<Project | null>(null);
  private readonly projectService = inject(ProjectService);

  readonly isOpen = this._isOpen.asReadonly();
  readonly currentProject = this._currentProject.asReadonly();

  open(project: Project): void {
    this._currentProject.set(project);
    this._isOpen.set(true);
  }

  close(): void {
    this._isOpen.set(false);
    setTimeout(() => {
      this._currentProject.set(null);
      this.projectService.clearSelection();
    }, 400);
  }
}

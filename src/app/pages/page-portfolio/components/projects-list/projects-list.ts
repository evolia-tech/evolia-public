import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../shared/models/project';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss'
})
export class ProjectsList {
  @Input({ required: true }) projects: Project[] = [];
  @Output() projectSelect = new EventEmitter<Project>();

  onProjectSelect(project: Project): void {
    this.projectSelect.emit(project);
  }
}

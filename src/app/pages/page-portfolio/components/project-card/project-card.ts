import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../shared/models/project';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, EvoButton],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) index!: number;
  @Output() cardClick = new EventEmitter<Project>();

  get hasCaseStudy(): boolean {
    return !!(this.project?.blocks && this.project.blocks.length > 0);
  }

  onCardClick(): void {
    this.cardClick.emit(this.project);
  }
}

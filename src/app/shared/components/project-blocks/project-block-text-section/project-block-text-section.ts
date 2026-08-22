import { Component, input } from '@angular/core';
import { ProjectTextSectionData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-text-section',
  templateUrl: './project-block-text-section.html',
  styleUrl: './project-block-text-section.scss',
})
export class ProjectBlockTextSectionComponent {
  data = input.required<ProjectTextSectionData>();
}

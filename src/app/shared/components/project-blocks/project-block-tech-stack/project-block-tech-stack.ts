import { Component, input } from '@angular/core';
import { ProjectTechStackData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-tech-stack',
  templateUrl: './project-block-tech-stack.html',
  styleUrl: './project-block-tech-stack.scss',
})
export class ProjectBlockTechStackComponent {
  data = input.required<ProjectTechStackData>();
}

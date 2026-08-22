import { Component, input } from '@angular/core';
import { ProjectC4DiagramData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-c4-diagram',
  templateUrl: './project-block-c4-diagram.html',
  styleUrl: './project-block-c4-diagram.scss',
})
export class ProjectBlockC4DiagramComponent {
  data = input.required<ProjectC4DiagramData>();
}

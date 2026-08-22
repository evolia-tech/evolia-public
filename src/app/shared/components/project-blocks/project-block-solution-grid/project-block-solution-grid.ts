import { Component, input } from '@angular/core';
import { ProjectSolutionGridData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-solution-grid',
  templateUrl: './project-block-solution-grid.html',
  styleUrl: './project-block-solution-grid.scss',
})
export class ProjectBlockSolutionGridComponent {
  data = input.required<ProjectSolutionGridData>();
}

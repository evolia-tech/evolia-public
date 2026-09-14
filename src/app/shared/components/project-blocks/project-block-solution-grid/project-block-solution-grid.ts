import { Component, input } from '@angular/core';
import { ProjectSolutionGridData } from '../../../models/project-block';
import { ProjectBlockMediaComponent } from '../project-block-media/project-block-media';

@Component({
  selector: 'app-project-block-solution-grid',
  templateUrl: './project-block-solution-grid.html',
  styleUrl: './project-block-solution-grid.scss',
  imports: [ProjectBlockMediaComponent],
})
export class ProjectBlockSolutionGridComponent {
  data = input.required<ProjectSolutionGridData>();
}

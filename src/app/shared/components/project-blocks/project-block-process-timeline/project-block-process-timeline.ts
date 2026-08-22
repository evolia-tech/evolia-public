import { Component, input } from '@angular/core';
import { ProjectProcessTimelineData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-process-timeline',
  templateUrl: './project-block-process-timeline.html',
  styleUrl: './project-block-process-timeline.scss',
})
export class ProjectBlockProcessTimelineComponent {
  data = input.required<ProjectProcessTimelineData>();
}

import { Component, input } from '@angular/core';
import { ProjectImpactMetricsData } from '../../../models/project-block';
import { ProjectBlockMediaComponent } from '../project-block-media/project-block-media';

@Component({
  selector: 'app-project-block-impact-metrics',
  templateUrl: './project-block-impact-metrics.html',
  styleUrl: './project-block-impact-metrics.scss',
  imports: [ProjectBlockMediaComponent],
})
export class ProjectBlockImpactMetricsComponent {
  data = input.required<ProjectImpactMetricsData>();
}

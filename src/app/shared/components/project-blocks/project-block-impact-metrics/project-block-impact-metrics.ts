import { Component, input } from '@angular/core';
import { ProjectImpactMetricsData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-impact-metrics',
  templateUrl: './project-block-impact-metrics.html',
  styleUrl: './project-block-impact-metrics.scss',
})
export class ProjectBlockImpactMetricsComponent {
  data = input.required<ProjectImpactMetricsData>();
}

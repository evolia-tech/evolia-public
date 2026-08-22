import { Component, input } from '@angular/core';
import { ProjectChallengeData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-challenges',
  templateUrl: './project-block-challenges.html',
  styleUrl: './project-block-challenges.scss',
})
export class ProjectBlockChallengesComponent {
  data = input.required<ProjectChallengeData>();
}

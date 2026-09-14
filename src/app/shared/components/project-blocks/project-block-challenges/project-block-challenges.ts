import { Component, input } from '@angular/core';
import { ProjectChallengeData } from '../../../models/project-block';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-project-block-challenges',
  templateUrl: './project-block-challenges.html',
  styleUrl: './project-block-challenges.scss',
  imports: [GsapSplitTextFadeInScrollTriggerDirective]
})
export class ProjectBlockChallengesComponent {
  data = input.required<ProjectChallengeData>();
}

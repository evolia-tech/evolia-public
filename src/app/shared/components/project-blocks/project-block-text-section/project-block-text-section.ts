import { Component, input } from '@angular/core';
import { ProjectTextSectionData } from '../../../models/project-block';
import { GsapSplitTextFadeInScrollTriggerDirective } from '../../../directives/gsap-split-text-fade-in-scroll-trigger/gsap-split-text-fade-in-scroll-trigger.directive';

@Component({
  selector: 'app-project-block-text-section',
  templateUrl: './project-block-text-section.html',
  styleUrl: './project-block-text-section.scss',
  imports: [GsapSplitTextFadeInScrollTriggerDirective]
})
export class ProjectBlockTextSectionComponent {
  data = input.required<ProjectTextSectionData>();
}

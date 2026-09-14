import { Component, input } from '@angular/core';
import { ProjectHighlightCardsData } from '../../../models/project-block';
import { ProjectBlockMediaComponent } from '../project-block-media/project-block-media';

@Component({
  selector: 'app-project-block-highlight-cards',
  templateUrl: './project-block-highlight-cards.html',
  styleUrl: './project-block-highlight-cards.scss',
  imports: [ProjectBlockMediaComponent],
})
export class ProjectBlockHighlightCardsComponent {
  data = input.required<ProjectHighlightCardsData>();
}

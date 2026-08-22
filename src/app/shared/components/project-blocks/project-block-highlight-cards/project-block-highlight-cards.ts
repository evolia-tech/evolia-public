import { Component, input } from '@angular/core';
import { ProjectHighlightCardsData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-highlight-cards',
  templateUrl: './project-block-highlight-cards.html',
  styleUrl: './project-block-highlight-cards.scss',
})
export class ProjectBlockHighlightCardsComponent {
  data = input.required<ProjectHighlightCardsData>();
}

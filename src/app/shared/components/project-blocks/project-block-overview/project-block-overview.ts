import { Component, input, computed } from '@angular/core';
import { ProjectOverviewData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-overview',
  templateUrl: './project-block-overview.html',
  styleUrl: './project-block-overview.scss',
})
export class ProjectBlockOverviewComponent {
  data = input.required<ProjectOverviewData>();

  displayTitle = computed(() => {
    const d = this.data();
    if (!d) return '';

    // Si le titre contient une balise inline <span class="highlight">
    if (d.title.includes('<')) {
      return d.title;
    }

    // Rétrocompatibilité avec l'ancienne propriété optionnelle highlightedTitle
    if (d.highlightedTitle) {
      return `${d.title} <span class="highlight">${d.highlightedTitle}</span>`;
    }

    return d.title;
  });
}

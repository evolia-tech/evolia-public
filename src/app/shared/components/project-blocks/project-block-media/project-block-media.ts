import { Component, input, computed } from '@angular/core';
import { ProjectMediaData, ProjectMediaItem } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-media',
  templateUrl: './project-block-media.html',
  styleUrl: './project-block-media.scss',
})
export class ProjectBlockMediaComponent {
  data = input.required<ProjectMediaData>();

  items = computed<ProjectMediaItem[]>(() => {
    const d = this.data();
    if (d.images && d.images.length > 0) {
      return d.images;
    }
    if (d.src) {
      return [
        {
          src: d.src,
          alt: d.alt,
          caption: d.caption,
          variant: d.variant,
          hasGlow: d.hasGlow,
        },
      ];
    }
    return [];
  });
}

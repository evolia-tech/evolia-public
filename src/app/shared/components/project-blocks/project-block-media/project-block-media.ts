import { Component, input, computed } from '@angular/core';
import { ProjectMediaData, ProjectMediaItem } from '../../../models/project-block';
import { EvoButton } from '../../ui/evo-button/evo-button';

@Component({
  selector: 'app-project-block-media',
  templateUrl: './project-block-media.html',
  styleUrl: './project-block-media.scss',
  imports: [EvoButton],
})
export class ProjectBlockMediaComponent {
  data = input.required<ProjectMediaData>();
  liveUrl = input<string | undefined>(undefined);

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

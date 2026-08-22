import { Component, input } from '@angular/core';
import { ProjectGalleryData } from '../../../models/project-block';

@Component({
  selector: 'app-project-block-gallery',
  templateUrl: './project-block-gallery.html',
  styleUrl: './project-block-gallery.scss',
})
export class ProjectBlockGalleryComponent {
  data = input.required<ProjectGalleryData>();
}

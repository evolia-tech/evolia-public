import { Component, input, inject } from '@angular/core';
import { ProjectCtaData } from '../../../models/project-block';
import { Router } from '@angular/router';
import { EvoButton } from '../../ui/evo-button/evo-button';

@Component({
  selector: 'app-project-block-cta',
  templateUrl: './project-block-cta.html',
  styleUrl: './project-block-cta.scss',
  imports: [EvoButton],
})
export class ProjectBlockCtaComponent {
  data = input.required<ProjectCtaData>();
  private router = inject(Router);

  onCtaClick(): void {
    const link = this.data().buttonLink || '/contact';
    this.router.navigateByUrl(link);
  }
}

import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { Project } from '../../../../shared/models/project';

@Component({
  selector: 'app-project-layout-sidebar',
  templateUrl: './project-layout-sidebar.html',
  styleUrls: ['./project-layout-sidebar.scss'],
  imports: [FontAwesomeModule, ToFaIconPipe],
})
export class ProjectLayoutSidebar {
  data = input<Partial<Project> | null>(null);
  activeSectionId = input<string>('');

  onScrollTo = input.required<(id: string) => void>();

  scrollTo(sectionId: string): void {
    this.onScrollTo()(sectionId);
  }
}

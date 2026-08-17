import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../../pipes/to-fa-icon-pipe';
import { Project } from '../../../../../models/project';

@Component({
  selector: 'app-project-modal-sidebar',
  templateUrl: './project-modal-sidebar.html',
  styleUrls: ['./project-modal-sidebar.scss'],
  imports: [FontAwesomeModule, ToFaIconPipe],
})

export class ProjectModalSidebar {
  // Input Signals
  data = input<Partial<Project> | null>(null);
  activeSectionId = input<string>('');

  // Callbacks (fonctions passées par le parent)
  onScrollTo = input.required<(id: string) => void>();

  // Méthodes de commodité
  scrollTo(sectionId: string): void {
    this.onScrollTo()(sectionId);
  }
}

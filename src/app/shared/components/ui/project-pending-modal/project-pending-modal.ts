import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faExternalLinkAlt, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-pending-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './project-pending-modal.html',
  styleUrl: './project-pending-modal.scss'
})
export class ProjectPendingModal {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  faXmark = faXmark;
  faExternalLinkAlt = faExternalLinkAlt;
  faClock = faClock;
  faGlobe = faGlobe;

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('pending-modal-overlay')) {
      this.onClose();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.onClose();
  }
}

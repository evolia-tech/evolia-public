import { NgComponentOutlet, NgOptimizedImage } from '@angular/common';
import { Component, Type, ViewEncapsulation, input, output } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FontAwesomeModule,
    ToFaIconPipe,
    NgOptimizedImage,
    DialogModule, 
    NgComponentOutlet
  ]
})
export class ProjectModal {
  isVisible = input<boolean>(false);
  modalImage = input.required<string>();
  contentComponent = input<Type<any> | null>(null);
  componentInputs = input<{ [key: string]: any }>({});

  close = output<void>();

  onModalClosed() {
    this.close.emit();
  }
}

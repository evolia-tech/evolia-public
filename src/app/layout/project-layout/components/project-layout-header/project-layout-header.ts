import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-project-layout-header',
  templateUrl: './project-layout-header.html',
  styleUrls: ['./project-layout-header.scss'],
  imports: [],
})
export class ProjectLayoutHeader {
  title = input.required<string>();
  scrollProgress = input(0);
  estimatedReadTime = input(0);

  close = output<void>();

  onClose() {
    this.close.emit();
  }
}

import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-screen-menu',
  templateUrl: './small-screen-menu.html',
  styleUrl: './small-screen-menu.scss',
  imports: [CommonModule, RouterModule]
})
export class SmallScreenMenu {
  closeMenu = output<void>();

  onLinkClick() {
    this.closeMenu.emit();
  }
}

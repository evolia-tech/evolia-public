import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-bottom-menu',
  templateUrl: './footer-bottom-menu.html',
  styleUrl: './footer-bottom-menu.scss',
  imports: [
    RouterLink
  ]
})

export class FooterBottomMenu {
  protected readonly currentYear = new Date().getFullYear();
}

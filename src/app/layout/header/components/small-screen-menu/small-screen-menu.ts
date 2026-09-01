import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-small-screen-menu',
  templateUrl: './small-screen-menu.html',
  styleUrl: './small-screen-menu.scss',
  imports: [RouterModule, FontAwesomeModule]
})
export class SmallScreenMenu {
  closeMenu = output<void>();

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;

  onLinkClick() {
    this.closeMenu.emit();
  }
}


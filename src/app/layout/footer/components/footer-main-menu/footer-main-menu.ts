import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';
import { SOCIAL_LINKS } from '../../../../core/constants/social-links';

@Component({
  selector: 'app-footer-main-menu',
  templateUrl: './footer-main-menu.html',
  styleUrl: './footer-main-menu.scss',
  imports: [FontAwesomeModule, ToFaIconPipe]
})
export class FooterMainMenu {
  socialLinks = SOCIAL_LINKS;
}

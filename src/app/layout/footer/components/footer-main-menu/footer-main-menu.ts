import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-footer-main-menu',
  templateUrl: './footer-main-menu.html',
  styleUrl: './footer-main-menu.scss',
  imports: [FontAwesomeModule, ToFaIconPipe]
})

export class FooterMainMenu { }

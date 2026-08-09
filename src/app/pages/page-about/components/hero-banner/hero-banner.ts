import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-about-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  imports: [CommonModule, FontAwesomeModule, ToFaIconPipe]
})
export class HeroBanner {

}

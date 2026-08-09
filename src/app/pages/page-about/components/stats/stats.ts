import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  imports: [CommonModule, FontAwesomeModule]
})
export class AboutStats {
  faGear = faGear;
  teamAvatars = [
    { name: 'Steve', url: '/images/team/steve.jpeg' },
    { name: 'Samuel', url: '/images/team/samuel.jpeg' },
    { name: 'Chris', url: '/images/team/chris.jpeg' },
    { name: 'George', url: '/images/team/george.jpeg' }
  ];
}

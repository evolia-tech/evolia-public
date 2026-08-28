import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faStar } from '@fortawesome/free-solid-svg-icons';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';
import { GOOGLE_REVIEWS, getStarFills } from '../../../../shared/constants/company.data';

@Component({
  selector: 'app-about-stats',
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  imports: [CommonModule, RouterModule, FontAwesomeModule, EvoButton]
})
export class AboutStats {
  faGear = faGear;
  faStar = faStar;

  readonly googleReviews = GOOGLE_REVIEWS;

  get starFills(): number[] {
    return getStarFills(this.googleReviews.rating);
  }

  readonly teamAvatars = [
    { name: 'Steve', url: '/images/team/steve.webp' },
    { name: 'Samuel', url: '/images/team/samuel.webp' },
    { name: 'Chris', url: '/images/team/chris.webp' },
    { name: 'George', url: '/images/team/george.webp' }
  ];
}

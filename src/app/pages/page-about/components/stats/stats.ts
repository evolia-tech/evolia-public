import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faStar } from '@fortawesome/free-solid-svg-icons';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';

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

  googleReviews = {
    rating: 3.6,
    count: 3,
    url: 'https://g.page/r/evolia-tech'
  };

  /**
   * Calcule le pourcentage exact de remplissage (0 à 100%) pour chacune des 5 étoiles
   */
  get starFills(): number[] {
    const rating = typeof this.googleReviews.rating === 'number'
      ? this.googleReviews.rating
      : parseFloat(String(this.googleReviews.rating)) || 5;

    return [1, 2, 3, 4, 5].map(i => {
      const fill = rating - (i - 1);
      if (fill >= 1) return 100;
      if (fill <= 0) return 0;
      return Math.round(fill * 100);
    });
  }

  teamAvatars = [
    { name: 'Steve', url: '/images/team/steve.webp' },
    { name: 'Samuel', url: '/images/team/samuel.webp' },
    { name: 'Chris', url: '/images/team/chris.webp' },
    { name: 'George', url: '/images/team/george.webp' }
  ];
}

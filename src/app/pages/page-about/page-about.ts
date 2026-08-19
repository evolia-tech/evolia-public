import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from './components/team/team';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { AboutValues } from './components/values/values';
import { AboutStats } from './components/stats/stats';

@Component({
  selector: 'app-page-about',
  standalone: true,
  templateUrl: './page-about.html',
  styleUrl: './page-about.scss',
  imports: [CommonModule, Team, HeroBanner, AboutValues, AboutStats]
})
export class PageAbout {

}

export default PageAbout;

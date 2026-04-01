import { Component } from '@angular/core';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { ServicesGrid } from './components/services-grid/services-grid';
import { Testimonials } from "./components/testimonials/testimonials";
import { Team } from './components/team/team';
import { Faq } from './components/faq/faq';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.html',
  styleUrl: './page-home.scss',
  imports: [
    HeroBanner,
    ServicesGrid,
    Testimonials,
    Team,
    Faq
]
})
export default class PageHome {

}

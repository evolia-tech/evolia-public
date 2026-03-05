import { Component } from '@angular/core';
import { HeroBanner } from './components/hero-banner/hero-banner';
import { ServicesGrid } from './components/services-grid/services-grid';
import { Testimonials } from "./components/testimonials/testimonials";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.html',
  styleUrl: './page-home.scss',
  imports: [
    HeroBanner,
    ServicesGrid,
    Testimonials
]
})
export default class PageHome {

}

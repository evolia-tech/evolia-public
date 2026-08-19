import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo';
import { GtmService } from './core/services/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    RouterOutlet
  ]
})
export class App implements OnInit {
  private seoService = inject(SeoService);
  private gtmService = inject(GtmService);
  protected readonly title = signal('evolia-tech-public');

  ngOnInit(): void {
    this.seoService.initCanonicalUrlListener();
    this.gtmService.initGtmTracking();
  }
}

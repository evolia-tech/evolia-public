import {
  Component,
  ViewEncapsulation,
  inject,
  signal,
  AfterViewChecked,
  PLATFORM_ID,
  effect,
  computed,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectLayoutSidebar } from './components/project-layout-sidebar/project-layout-sidebar';
import { ProjectLayoutHeader } from './components/project-layout-header/project-layout-header';
import { ProjectService } from '../../core/services/project';
import { ProjectLayoutService } from './services/project-layout';
import { ProjectBlockOverviewComponent } from '../../shared/components/project-blocks/project-block-overview/project-block-overview';
import { ProjectBlockMediaComponent } from '../../shared/components/project-blocks/project-block-media/project-block-media';
import { ProjectBlockTextSectionComponent } from '../../shared/components/project-blocks/project-block-text-section/project-block-text-section';
import { ProjectBlockChallengesComponent } from '../../shared/components/project-blocks/project-block-challenges/project-block-challenges';
import { ProjectBlockSolutionGridComponent } from '../../shared/components/project-blocks/project-block-solution-grid/project-block-solution-grid';
import { ProjectBlockC4DiagramComponent } from '../../shared/components/project-blocks/project-block-c4-diagram/project-block-c4-diagram';
import { ProjectBlockProcessTimelineComponent } from '../../shared/components/project-blocks/project-block-process-timeline/project-block-process-timeline';
import { ProjectBlockImpactMetricsComponent } from '../../shared/components/project-blocks/project-block-impact-metrics/project-block-impact-metrics';
import { ProjectBlockTechStackComponent } from '../../shared/components/project-blocks/project-block-tech-stack/project-block-tech-stack';
import { ProjectBlockHighlightCardsComponent } from '../../shared/components/project-blocks/project-block-highlight-cards/project-block-highlight-cards';
import { ProjectBlockGalleryComponent } from '../../shared/components/project-blocks/project-block-gallery/project-block-gallery';
import { ProjectBlockCtaComponent } from '../../shared/components/project-blocks/project-block-cta/project-block-cta';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.html',
  styleUrls: ['./project-layout.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    ProjectLayoutHeader,
    ProjectLayoutSidebar,
    ProjectBlockOverviewComponent,
    ProjectBlockMediaComponent,
    ProjectBlockTextSectionComponent,
    ProjectBlockChallengesComponent,
    ProjectBlockSolutionGridComponent,
    ProjectBlockC4DiagramComponent,
    ProjectBlockProcessTimelineComponent,
    ProjectBlockImpactMetricsComponent,
    ProjectBlockTechStackComponent,
    ProjectBlockHighlightCardsComponent,
    ProjectBlockGalleryComponent,
    ProjectBlockCtaComponent,
  ],
})
export class ProjectLayout implements OnInit, AfterViewChecked {
  private layoutService = inject(ProjectLayoutService);
  private projectService = inject(ProjectService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  // Mémorise la route d'origine pour le bouton Fermer
  // Défaut : '/' si accès direct via URL partagée
  private originRoute = '/';

  isOpen = this.layoutService.isOpen;
  project = this.layoutService.currentProject;
  sidebarData = computed(() => {
    const proj = this.project();
    if (!proj) return null;

    return {
      keyResults: proj.keyResults,
      sections: proj.sections,
    };
  });

  scrollProgress = signal(0);
  estimatedReadTime = signal(4);
  activeSectionId = signal<string>('');

  private contentElement: HTMLElement | null = null;

  ngOnInit(): void {
    // Lire l'origine de navigation depuis le state du router
    // (passé par page-home et page-portfolio via { state: { from: '...' } })
    // history.state est disponible dès ngOnInit, avant qu'Angular le vide
    const navState = this.isBrowser ? (history.state as { from?: string }) : {};
    this.originRoute = navState?.from ?? '/';

    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const project = this.projectService.selectProject(slug);
      if (project) {
        this.layoutService.open(project);
      }
    }
  }

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;
      if (this.isOpen()) {
        const proj = this.project();
        if (proj?.sections && proj.sections.length > 0) {
          this.activeSectionId.set(proj.sections[0].id);
        }
      }
    });
  }

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    if (!element) return;

    const totalHeight = element.scrollHeight - element.clientHeight;
    if (totalHeight > 0) {
      const progress = (element.scrollTop / totalHeight) * 100;
      this.scrollProgress.set(Math.round(progress));
    }

    const sections = this.project()?.sections;
    if (!sections || sections.length === 0) return;

    const containerTop = element.getBoundingClientRect().top;
    const offsetThreshold = 140;

    let currentActiveId = sections[0].id;

    for (const section of sections) {
      const sectionEl = document.getElementById(section.id);
      if (sectionEl) {
        const rect = sectionEl.getBoundingClientRect();
        if (rect.top - containerTop <= offsetThreshold) {
          currentActiveId = section.id;
        }
      }
    }

    if (this.activeSectionId() !== currentActiveId) {
      this.activeSectionId.set(currentActiveId);
    }
  }

  scrollTo(sectionId: string): void {
    if (!this.isBrowser) return;

    this.activeSectionId.set(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;

    const contentArea = document.querySelector('.content-side') as HTMLElement;
    if (contentArea) contentArea.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeModal(): void {
    this.layoutService.close();
    // Retour intelligent : origine mémorisée ou '/' par défaut (lien partagé)
    this.router.navigate([this.originRoute]);
  }

  ngAfterViewChecked(): void {
    if (this.isOpen() && !this.contentElement) {
      if (!this.isBrowser) return;

      this.contentElement = document.querySelector('.dynamic-content-injector');
      if (this.contentElement) {
        const text = this.contentElement.textContent || '';
        const words = text.trim().split(/\s+/).length;
        const imagesCount = this.contentElement.querySelectorAll('img').length;

        // Base : 220 mots / minute + ~12s (0.2 min) de temps d'observation par image / schéma
        const textMinutes = words / 220;
        const imageMinutes = imagesCount * 0.2;
        const totalMinutes = Math.ceil(textMinutes + imageMinutes);

        this.estimatedReadTime.set(totalMinutes || 4);
      }
    }
  }
}

export default ProjectLayout;

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
import {
  NgComponentOutlet,
  isPlatformBrowser,
} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectLayoutSidebar } from './components/project-layout-sidebar/project-layout-sidebar';
import { ProjectLayoutHeader } from './components/project-layout-header/project-layout-header';
import { ProjectService } from '../../core/services/project';
import { ProjectLayoutService } from './services/project-layout';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.html',
  styleUrls: ['./project-layout.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgComponentOutlet, ProjectLayoutHeader, ProjectLayoutSidebar],
})
export class ProjectLayout implements OnInit, AfterViewChecked {
  private layoutService = inject(ProjectLayoutService);
  private projectService = inject(ProjectService);
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private router = inject(Router);
  private route = inject(ActivatedRoute);

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

  currentComponent = this.projectService.currentComponent;

  scrollProgress = signal(0);
  estimatedReadTime = signal(4);
  activeSectionId = signal<string>('');

  private contentElement: HTMLElement | null = null;

  ngOnInit(): void {
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
    this.router.navigate(['/portfolio']);
  }

  ngAfterViewChecked(): void {
    if (this.isOpen() && !this.contentElement) {
      if (!this.isBrowser) return;

      this.contentElement = document.querySelector('.dynamic-content-injector');
      if (this.contentElement) {
        const text = this.contentElement.textContent || '';
        const words = text.trim().split(/\s+/).length;
        this.estimatedReadTime.set(Math.ceil(words / 230) || 4);
      }
    }
  }
}

export default ProjectLayout;

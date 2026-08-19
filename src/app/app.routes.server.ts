import { RenderMode, ServerRoute } from '@angular/ssr';
import { PROJECTS_DATA } from './shared/constants/projects.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PROJECTS_DATA.map((project) => ({ slug: project.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

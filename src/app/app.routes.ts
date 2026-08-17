import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/page-home/page-home')
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./pages/page-portfolio/page-portfolio').then(m => m.PagePortfolio),
        data: { defaultScrolled: true }
    },
    {
        path: 'realisations',
        redirectTo: 'portfolio',
        pathMatch: 'full'
    },
    {
        path: 'estimation-projet',
        loadComponent: () => import('./pages/quote-wizard-modal/quote-wizard-modal').then(m => m.QuoteWizardModal)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/page-contact/page-contact').then(m => m.PageContact),
        data: { defaultScrolled: true }
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/page-about/page-about').then(m => m.PageAbout),
        data: { defaultScrolled: true }
    }
];

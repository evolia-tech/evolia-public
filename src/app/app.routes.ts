import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/page-home/page-home')
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

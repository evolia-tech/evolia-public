import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/page-home/page-home')
    },
    {
        path: 'estimation-projet',
        loadComponent: () => import('./pages/page-quote-wizard/page-quote-wizard').then(m => m.PageQuoteWizard)
    }
];

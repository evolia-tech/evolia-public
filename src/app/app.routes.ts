import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/main-layout/main-layout'),
        children: [
            {
                path: '',
                title: 'Evolia Tech | Création de Sites Web & Applications Mobiles sur mesure',
                loadComponent: () => import('./pages/page-home/page-home'),
                data: {
                    description: "Evolia Tech est une agence digitale spécialisée dans le développement de sites web sur mesure (SaaS, E-commerce, Vitrine) et d'applications mobiles. Réalisez vos projets avec nos experts.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            },
            {
                path: 'portfolio',
                title: 'Nos Réalisations & Projets | Evolia Tech',
                loadComponent: () => import('./pages/page-portfolio/page-portfolio'),
                data: {
                    defaultScrolled: true,
                    description: "Découvrez nos réalisations et projets web & mobiles développés sur mesure par l'équipe d'Evolia Tech pour nos clients.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            },
            {
                path: 'realisations',
                redirectTo: 'portfolio',
                pathMatch: 'full'
            },
            {
                path: 'contact',
                title: 'Contactez-nous | Evolia Tech',
                loadComponent: () => import('./pages/page-contact/page-contact'),
                data: {
                    defaultScrolled: true,
                    description: "Prenez contact avec l'équipe d'Evolia Tech pour discuter de votre projet web, application mobile ou obtenir des informations.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            },
            {
                path: 'about',
                title: 'À Propos de Nous | Evolia Tech',
                loadComponent: () => import('./pages/page-about/page-about'),
                data: {
                    defaultScrolled: true,
                    description: "En savoir plus sur Evolia Tech, notre histoire, notre équipe d'experts et notre approche sur mesure pour la création web et mobile.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            },
            {
                path: 'mentions-legales',
                title: 'Mentions Légales | Evolia Tech',
                loadComponent: () => import('./pages/page-legal-notice/page-legal-notice'),
                data: {
                    defaultScrolled: true,
                    description: "Mentions légales de l'agence digitale Evolia Tech : informations sur l'éditeur, l'hébergement et la propriété intellectuelle.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            },
            {
                path: 'politique-de-confidentialite',
                title: 'Politique de Confidentialité & RGPD | Evolia Tech',
                loadComponent: () => import('./pages/page-privacy-policy/page-privacy-policy'),
                data: {
                    defaultScrolled: true,
                    description: "Politique de confidentialité et protection des données personnelles (RGPD) du site internet d'Evolia Tech.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            }
        ]
    },

    {
        path: '',
        loadComponent: () => import('./layout/blank-layout/blank-layout'),
        children: [
            {
                path: 'estimation-projet',
                title: 'Devis & Estimation Gratuit | Evolia Tech',
                loadComponent: () => import('./pages/quote-wizard-modal/quote-wizard-modal'),
                data: {
                    description: "Calculez une estimation gratuite et personnalisée pour votre projet web ou mobile grâce à notre outil interactif en quelques clics.",
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            },
            {
                path: 'portfolio/:slug',
                title: 'Projet & Cas Client | Evolia Tech',
                loadComponent: () => import('./layout/project-layout/project-layout'),
                data: {
                    ogImage: 'https://evolia-tech.com/images/og-main.png'
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

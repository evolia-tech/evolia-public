// shared/constants/projects.data.ts
import { Project } from '../models/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 3,
    order: 1,
    slug: 'liko-auto',
    title: 'Marketplace automobile connectée & services auto au Cameroun',
    clientName: 'Liko Auto',
    showcaseImage: '/images/projects/liko-auto/liko-auto.webp',
    isSpotlighted: true,
    keyResults: [
      { value: '200+', label: 'ventes visées / mois' },
      { icon: 'faComments', label: 'Messagerie instantanée' },
      { icon: 'faShieldAlt', label: 'Transactions sécurisées' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Contexte & Ambition' },
      { id: 'challenges', label: 'Les Enjeux' },
      { id: 'approach', label: 'Notre Approche' },
      { id: 'solution', label: 'La Solution' },
      { id: 'process', label: 'Le Processus' },
      { id: 'retrospective', label: 'Rétrospective & Bilan' },
      { id: 'conclusion', label: 'Conclusion' },
      { id: 'gallery', label: 'Galerie & Visuels' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: 'Plateforme automobile connectée & <span class="highlight">marketplace de confiance</span> au Cameroun',
          impactStatement:
            "Conception et développement d'une solution complète (application mobile pour acheteurs et vendeurs, vitrine web publique et espace de gestion administrateur) permettant de digitaliser et sécuriser le marché de l'automobile d'occasion et des pièces détachées.",
        },
      },
      {
        type: 'media',
        data: {
          images: [
            {
              src: '/images/projects/liko-auto/mobile-liko-auto.webp',
              alt: 'Liko Auto Application Mobile',
              variant: 'mockup',
            },
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Contexte & Ambition du Projet',
          paragraphs: [
            "Le marché de l’automobile d’occasion au Cameroun représentait un volume annuel estimé en <strong>2026</strong> entre <strong>10 000 et 12 500 véhicules vendus</strong> (données estimées d'après les rapports de transit douanier et d'immatriculation 2026), dont près de 25 % financés directement par la diaspora.",
            "Jusqu'alors freiné par l'absence de réseau structuré, les risques d'escroquerie et le manque de transparence, ce secteur présentait une opportunité majeure. <strong>Liko Auto</strong> est né avec la vision de bâtir un écosystème de confiance unifiant acheteurs, vendeurs, garages agréés et équipementiers.",
            "L'ambition stratégique du projet est de s'imposer d'abord comme la référence au Cameroun, puis de <strong>se déployer progressivement dans l'ensemble de la sous-région Afrique Centrale (CEMAC)</strong>. Pour soutenir ce projet d'envergure internationale, l'équipe d'Evolia Tech a conçu et réalisé une plateforme sur-mesure, scalable et prête à accompagner cette expansion multi-pays.",
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Vrais Enjeux du Projet',
          challenges: [
            'Concevoir une expérience utilisateur fluide, rapide et ergonomique sur smartphones et tablettes (pour les acheteurs en déplacement) et sur ordinateur (pour la gestion administrative).',
            'Accompagner et simplifier les démarches administratives complexes (immatriculation, mutation de carte grise, vérifications d’authenticité des pièces douanières).',
            'Sécuriser la mise en relation grâce à une messagerie instantanée intégrée qui protège la confidentialité des données personnelles.',
            'Encourager la déclaration spontanée des ventes réussies pour fluidifier le modèle économique par commission.',
            'Digitaliser et certifier la vente et la livraison de pièces détachées automobiles d’origine.',
            'Structurer un réseau de garages partenaires agréés pour l’inspection technique et l’entretien des véhicules.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'approach',
          title: 'Notre Approche & Méthodologie',
          paragraphs: [
            "Pour transformer cette vision en une plateforme performante, <strong>Evolia Tech a conçu une architecture sur-mesure et évolutive</strong>. L'objectif : offrir une navigation fluide et instantanée sur mobile (même en zone à faible couverture réseau) et permettre d’ajouter facilement de nouvelles fonctionnalités au fil de la croissance, sans jamais devoir repartir de zéro.",
            "Au-delà de l'interface publique, nous avons développé un <strong>espace d'administration complet et sécurisé</strong>. Chaque membre de l'équipe Liko Auto (modérateurs d'annonces, gestionnaires de stock de pièces, suiveurs de transactions) dispose d'un accès adapté à son rôle pour piloter l'activité au quotidien en toute autonomie.",
          ],
        },
      },
      {
        type: 'media',
        data: {
          images: [
            {
              src: '/images/projects/liko-auto/dahsboard-admin-liko-auto.webp',
              alt: 'Espace Administration & Dashboard Liko Auto',
            },
          ],
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'La Solution 360° Liko Auto',
          introText:
            'Pour concrétiser les ambitions de Liko Auto, l’équipe d’Evolia Tech a conçu et déployé un écosystème digital complet 360°, interconnectant une application mobile grand public, un portail web à fort trafic et un outil de pilotage métier sur-mesure.',
          solutions: [
            {
              title: '1. Application Mobile (iOS & Android)',
              subtitle: 'Pour les acheteurs & vendeurs',
              features: [
                'Développement d’une interface fluide de recherche et d’achat de véhicules certifiés',
                'Intégration d’une boutique mobile pour la commande directe de pièces détachées et équipements d’origine',
                'Module d’assistance guidée pour la simplification des démarches administratives (carte grise, mutation et douane)',
                'Intégration d’une messagerie instantanée sécurisée et prise de rendez-vous directe en garages agréés',
              ],
              techStack: ['Flutter', 'iOS & Android', 'Firebase Push', 'WebSockets'],
            },
            {
              title: '2. Portail Web & Vitrine Média SEO',
              subtitle: 'Pour la visibilité & le SEO Google',
              features: [
                'Conception d’une architecture web Angular SSR à chargement instantané pour capter le trafic de recherche Google',
                'Développement du portail média intégrant articles conseils, guides d’achat et actualités du secteur automobile',
                'Mise en place de la plateforme web e-commerce pour le catalogue et la commande de pièces automobiles',
              ],
              techStack: ['Angular SSR', 'TypeScript', 'SEO Google', 'SCSS'],
            },
            {
              title: '3. Espace d’Administration Sur-Mesure',
              subtitle: 'Pour le contrôle opérationnel Liko Auto',
              features: [
                'Création d’un dashboard administrateur centralisé pour la modération et la validation des annonces en temps réel',
                'Configuration d’un système d’habilitations strictes (RBAC) adapté aux différents profils d’opérateurs Liko Auto',
                'Implémentation d’outils automatisés de suivi des commissions, de gestion de stock et de facturation',
              ],
              techStack: ['Angular', 'NestJS (Node.js)', 'PostgreSQL', 'Redis'],
            },
          ],
        },
      },
      {
        type: 'c4-diagram',
        data: {
          imageSrc:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
          imageAlt: 'Schéma Architecture Système C4 Niveau 1 Liko Auto',
          caption: 'Diagramme de contexte C4 (Niveau 1) : Flux de données et interconnexion des briques applicatives Liko Auto',
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Comment Nous Avons Travaillé Ensemble',
          introText:
            'Pour transformer une idée ambitieuse en un produit scalable et sécurisé, l’équipe d’Evolia Tech a orchestré un accompagnement 360° sur 5 mois. Nous avons structuré le projet en 5 phases clés, garantissant une clarté totale et un contrôle permanent pour les fondateurs.',
          steps: [
            {
              number: 1,
              title: 'Recueil des Besoins Métier, Cadrage & Maquettes UX/UI (Figma)',
              duration: '3 semaines',
              description:
                'Ateliers d’immersion avec les fondateurs pour cartographier le parcours de chaque utilisateur (acheteurs, vendeurs, garages agréés, modérateurs). Conception de maquettes interactives sur-mesure sur Figma, validées écran par écran avant la moindre ligne de code.',
            },
            {
              number: 2,
              title: 'Architecture Backend, Base de Données & APIs Sécurisées',
              duration: '5 semaines',
              description:
                'Construction du "moteur central" de la plateforme : modélisation de la base de données, création des serveurs haute performance (NestJS), sécurisation de la messagerie instantanée et mise en place des règles d’accès administrateur.',
            },
            {
              number: 3,
              title: 'Développement de l’Application Mobile & des Portails Web',
              duration: '7 semaines',
              description:
                'Développement de l’application mobile cross-platform (iOS & Android sur Flutter), de la vitrine web optimisée pour le référencement Google (Angular SSR) et du dashboard d’administration permettant de modérer les annonces et piloter les stocks.',
            },
            {
              number: 4,
              title: 'Tests de Charge, Sécurité & Publication sur les Stores (Apple & Google)',
              duration: '3 semaines',
              description:
                'Tests d’effort en conditions réelles de trafic, vérification de la confidentialité des échanges et gestion complète des démarches administratives pour la publication officielle sur l’App Store Apple et le Google Play Store.',
            },
            {
              number: 5,
              title: 'Formation des Équipes, Manuel d’Utilisation & Tutoriels Vidéo',
              duration: '2 semaines',
              description:
                'Rédaction du guide d’utilisation complet, réalisation de tutoriels vidéo pédagogiques pour l’administration du site, et formation en direct des équipes opérationnelles de Liko Auto pour garantir une prise en main fluide et autonome.',
            },
          ],
          totalDuration: '5 mois',
        },
      },
      {
        type: 'text',
        data: {
          id: 'retrospective',
          title: 'Rétrospective : Ce Que Nous Aurions Pu Améliorer',
          paragraphs: [
            "Toute aventure numérique d'envergure est porteuse d'enseignements. Si la qualité finale de Liko Auto est au rendez-vous, l'analyse rétrospective de notre collaboration met en lumière deux points majeurs que nous aurions pu mieux optimiser :",
          ],
          listItems: [
            "<strong>Privilégier les livraisons itératives par modules plutôt qu'un lancement global</strong> : En cherchant à livrer l'intégralité de l'écosystème en une seule fois (App mobile, Web SEO, Pièces détachées et Back-office), nous avons retardé l'accès initial au marché. Déployer la plateforme brique par brique aurait permis de récolter les retours utilisateurs plus tôt.",
            "<strong>Anticiper les délais de validation externe des Stores (Apple & Google)</strong> : La procédure de validation des applications mobiles par l'App Store et le Google Play Store a exigé des ajustements imprévus sur la politique de confidentialité, ajoutant des délais de soumission indépendants du développement pur.",
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'conclusion',
          title: 'Conclusion : Une Vision Révolutionnaire & Un Partenariat Durable',
          paragraphs: [
            "Concevoir Liko Auto a été une <strong>expérience humaine et technique d'une qualité exceptionnelle</strong> pour l'équipe d'Evolia Tech. Bâtir une solution capable de réinventer la confiance dans le marché automobile en Afrique Centrale est précisément le type de défi ambitieux qui anime notre agence.",
            "Ce projet incarne notre vision du métier : nous ne sommes pas de simples exécutants de code, mais de <strong>véritables partenaires technologiques de long terme</strong>. C'est pourquoi la mise en ligne n'était qu'un début : nous continuons d'accompagner quotidiennement Liko Auto dans la maintenance évolutive, l'optimisation des performances et le déploiement des nouvelles fonctionnalités de la feuille de route.",
          ],
        },
      },
      {
        type: 'gallery',
        data: {
          id: 'gallery',
          title: 'Galerie & Coulisses du Projet',
          introText:
            'Moments forts de notre collaboration, ateliers de travail en équipe, sessions de code intensives et aperçu des interfaces clés de la plateforme.',
          images: [
            {
              src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
              alt: 'Session de travail en équipe et ateliers de conception',
              caption: 'Ateliers de cadrage UX/UI & brainstorming avec les fondateurs',
              aspectRatio: 'wide',
            },
            {
              src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
              alt: 'Maquettage et wireframing d’interfaces',
              caption: 'Conception des maquettes interactives sur Figma',
              aspectRatio: 'tall',
            },
            {
              src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
              alt: 'Session de développement et de code',
              caption: 'Développement de l’architecture backend NestJS & APIs sécurisées',
              aspectRatio: 'square',
            },
            {
              src: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
              alt: 'Supercar sportive dans le showroom',
              caption: 'Interface finale du catalogue de véhicules vérifiés',
              aspectRatio: 'tall',
            },
            {
              src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
              alt: 'Session de formation des équipes',
              caption: 'Célébration du lancement en production & formation des opérateurs',
              aspectRatio: 'wide',
            },
            {
              src: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
              alt: 'Cockpit et affichage digital automobile',
              caption: 'Tableau de bord administrateur & suivi des transactions en temps réel',
              aspectRatio: 'square',
            },
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'cta',
          title: 'Vous avez une idée ambitieuse qui nécessite un partenaire technique engagé ?',
          description:
            'Parlons de votre projet, de vos défis métiers et découvrons ensemble comment transformer votre vision en une plateforme puissante, pérenne et rentable.',
          buttonText: 'Concrétiser mon projet avec Evolia Tech',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'Liko Auto | Marketplace Automobile Cameroun — Achat, Vente & Services Auto',
    seoDescription:
      'Liko Auto est la première marketplace automobile connectée du Cameroun : achat et vente de véhicules, messagerie instantanée, garages partenaires, pièces détachées et accompagnement aux démarches administratives.',
    keywords:
      'marketplace automobile Cameroun, acheter voiture Cameroun, vendre voiture Douala Yaoundé, Liko Auto, garage Cameroun, pièces détachées auto Afrique',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 11,
    order: 2,
    slug: 'association-mahol-diaspora',
    title: 'Solidarité & réseau professionnel de la diaspora',
    clientName: 'Mahol Diaspora',
    showcaseImage: '/images/projects/mahol/mahol-diaspora.webp',
    isSpotlighted: true,
    liveUrl: 'https://www.maholdiaspora.com/',
    keyResults: [
      { value: '288+', label: 'Adhérents actifs enregistrés' },
      { icon: 'faUserTie', label: 'Annuaire des professionnels' },
      { icon: 'faHandHoldingHeart', label: 'Collectes & Secours automatisés' },
      { icon: 'faCogs', label: 'Dashboard multi-délégués' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Contexte & Ambition' },
      { id: 'challenges', label: 'Les Enjeux' },
      { id: 'approach', label: 'Notre Approche' },
      { id: 'solution', label: 'La Solution' },
      { id: 'c4-diagram', label: 'Architecture' },
      { id: 'process', label: 'Le Processus' },
      { id: 'retrospective', label: 'Rétrospective' },
      { id: 'conclusion', label: 'Conclusion' },
      { id: 'gallery', label: 'Galerie' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: 'Plateforme sur-mesure de <span class="highlight">solidarité internationale & réseau pro</span> de la diaspora',
          impactStatement:
            'Digitalisation complète des adhésions, cotisations solidaires, fonds de secours d’urgence et gestion des délégués, doublée d’un annuaire dynamique des professionnels pour stimuler le réseau et l’entraide au sein de la diaspora camerounaise.',
        },
      },
      {
        type: 'media',
        data: {
          images: [
            {
              src: '/images/projects/mahol/mahol-diaspora.webp',
              alt: 'Mahol Diaspora Plateforme Solidaire & Annuaire Pro',
              variant: 'mockup',
            },
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Contexte & Ambition du Projet',
          paragraphs: [
            '<strong>Mahol Diaspora</strong> est une association à but non lucratif dédiée à l’entraide, au secours d’urgence et au développement des Camerounais de la diaspora en France et à l’international. Avant l’intervention d’Evolia Tech, la gestion de l’association reposait sur des processus manuels (fichiers Excel, échanges téléphoniques, appels à cotisations informels).',
            'Face à l’augmentation du nombre d’adhérents et à la complexité des règles de solidarité (secours en cas de décès, accompagnement lors de mariages, fonds de soutien aux projets familiaux), les fondateurs avaient besoin d’une plateforme centralisée, sécurisée et pérenne.',
            'Au-delà du volet social, l’ambition majeure de Mahol Diaspora était de valoriser la richesse professionnelle de ses membres en créant un <strong>annuaire dynamique des professionnels et entrepreneurs de la diaspora</strong>, facilitant le mentorat, les opportunités d’affaires et la mise en réseau.',
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Vrais Enjeux du Projet',
          challenges: [
            'Automatiser et fiabiliser la gestion des adhésions, du renouvellement et du suivi comptable des cotisations.',
            'Modéliser des règles métier complexes d’attribution des fonds de secours et d’entraide sociale (décès, mariages, événements de vie).',
            'Instaurer un système d’habilitations hiérarchisé par rôles (RBAC) pour les Délégués régionaux, trésoriers et administrateurs.',
            'Concevoir un annuaire interactif des professionnels de la diaspora avec filtres avancés par métiers, secteurs et zones géographiques.',
            'Offrir une interface intuitive et accessible sur mobile pour des membres de tous âges et de diverses maîtrises du numérique.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'approach',
          title: 'Notre Approche & Méthodologie',
          paragraphs: [
            'Pour répondre aux exigences de transparence et de sécurité indispensables à une organisation associative solidaire, <strong>Evolia Tech a conçu une architecture sur-mesure sous Angular et Node.js</strong>.',
            'Nous avons travaillé main dans la main avec le bureau exécutif de l’association lors d’ateliers UX/UI réguliers. Chaque écran du dashboard administrateur et de l’espace membre a été pensé pour réduire la charge mentale des délégués et garantir une traçabilité totale des flux financiers et des dossiers de secours.',
          ],
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'La Solution 360° Mahol Diaspora',
          introText:
            'Un écosystème digital complet interconnectant un portail grand public, un espace membre privé et un dashboard de gestion métier sur-mesure :',
          solutions: [
            {
              title: '1. Portail Web Public & Espace Membres',
              subtitle: 'Pour les adhérents & la communauté',
              features: [
                'Formulaire d’adhésion en ligne fluide avec téléversement sécurisé des justificatifs',
                'Espace personnel permettant le suivi des cotisations, attestations et historiques de soutien',
                'Consultation des actualités de l’association, des événements solidaires et assemblées générales',
              ],
              techStack: ['Angular', 'TypeScript', 'SCSS', 'PrimeNG'],
            },
            {
              title: '2. Annuaire des Professionnels de la Diaspora',
              subtitle: 'Pour le réseau, le mentorat & les affaires',
              features: [
                'Recherche et filtres avancés par métiers (santé, ingénierie, droit, entrepreneuriat, artisanat, etc.)',
                'Fiches profils détaillées favorisant la mise en relation directe entre professionnels de la diaspora',
                'Module de recommandation et de réseautage pour stimuler la synergie économique et l’entraide pro',
              ],
              techStack: ['Angular', 'Search Engine', 'RBAC Security'],
            },
            {
              title: '3. Dashboard Administrateur & Pilotage Métier',
              subtitle: 'Pour le bureau exécutif & les délégués',
              features: [
                'Gestion hiérarchisée des rôles (Présidents, Trésoriers, Délégués régionaux et modérateurs)',
                'Suivi en temps réel des collectes, appels de cotisations automatisés et génération de bilans comptables',
                'Module de validation et d’instruction des dossiers de secours d’urgence et prestations sociales',
              ],
              techStack: ['Node.js (Express)', 'PostgreSQL', 'JWT Auth', 'Nginx'],
            },
          ],
        },
      },
      {
        type: 'c4-diagram',
        data: {
          imageSrc:
            'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
          imageAlt: 'Architecture Système Mahol Diaspora',
          caption: 'Diagramme d’architecture système C4 (Niveau 1) : Flux de cotisations solidaires, droits délégués et annuaire professionnel',
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Comment Nous Avons Travaillé Ensemble',
          introText:
            'Un accompagnement 360° sur 4 mois pour transformer la gestion associative et booster le réseau pro :',
          steps: [
            {
              number: 1,
              title: 'Recueil des Besoins Métier & Modélisation',
              duration: '3 semaines',
              description:
                'Cartographie détaillée des règles de secours, rôles des délégués et attentes du réseau professionnel. Maquettage Figma validé écran par écran avec le bureau.',
            },
            {
              number: 2,
              title: 'Architecture Backend, Base de Données & Sécurité',
              duration: '4 semaines',
              description:
                'Modélisation de la base de données relationnelle, sécurisation des données d’adhérents (RGPD) et développement des APIs REST.',
            },
            {
              number: 3,
              title: 'Développement de l’Espace Membre, Annuaire Pro & Back-Office',
              duration: '6 semaines',
              description:
                'Développement du portail public Angular, de l’annuaire des professionnels avec filtres et du dashboard de gestion des cotisations.',
            },
            {
              number: 4,
              title: 'Recette, Tests d’Usabilité & Formation des Délégués',
              duration: '3 semaines',
              description:
                'Tests intensifs des flux de souscription, rédaction des guides d’utilisation et formation en direct des délégués régionaux.',
            },
          ],
          totalDuration: '4 mois',
        },
      },
      {
        type: 'text',
        data: {
          id: 'retrospective',
          title: 'Rétrospective : Ce Que Nous Aurions Pu Améliorer',
          paragraphs: [
            'Chaque projet offre de précieuses leçons. L’analyse rétrospective de notre collaboration avec Mahol Diaspora met en avant deux points d’amélioration :',
          ],
          listItems: [
            '<strong>Concevoir un système de rappels automatiques SMS en plus des e-mails</strong> : Une partie de la communauté consulte plus facilement ses SMS ou messages WhatsApp que ses e-mails. L’ajout de relances WhatsApp automatisées aurait encore accéléré les renouvellements d’adhésion.',
            '<strong>Introduire des filtres par compétences encore plus granulaires dès le lancement de l’annuaire pro</strong> : Devant l’engouement pour l’annuaire des professionnels, les membres ont rapidement réclamé des sous-catégories spécifiques (ex: spécialités médicales ou juridiques).',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'conclusion',
          title: 'Conclusion : Une Organisation Modernisée & Un Réseau Fort',
          paragraphs: [
            'Grâce à cette plateforme sur-mesure, Mahol Diaspora dispose désormais d’un outil de gestion moderne, transparent et pérenne qui renforce la confiance des adhérents.',
            'L’intégration de l’annuaire des professionnels a permis de transformer une association d’entraide sociale en une véritable communauté économique et professionnelle dynamique.',
          ],
        },
      },
      {
        type: 'gallery',
        data: {
          id: 'gallery',
          title: 'Galerie & Coulisses du Projet',
          introText:
            'Aperçu des réunions de travail, sessions de conception UX et visuels de la plateforme.',
          images: [
            {
              src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
              alt: 'Session de travail en équipe',
              caption: 'Ateliers de cadrage des règles de secours & UX annuaire pro',
              aspectRatio: 'wide',
            },
            {
              src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
              alt: 'Maquettage Figma',
              caption: 'Conception des maquettes de l’annuaire des professionnels',
              aspectRatio: 'tall',
            },
            {
              src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
              alt: 'Développement Backend',
              caption: 'Développement de l’architecture sécurisée Node.js & PostgreSQL',
              aspectRatio: 'square',
            },
            {
              src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
              alt: 'Formation des délégués',
              caption: 'Formation des délégués régionaux à la prise en main du dashboard',
              aspectRatio: 'wide',
            },
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'cta',
          title: 'Vous gérez une association, une mutuelle ou un réseau professionnel de la diaspora ?',
          description:
            'Digitalisez votre gestion de membres, vos collectes solidaires et créez votre annuaire professionnel sur-mesure avec Evolia Tech.',
          buttonText: 'Échanger avec nos experts',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'Mahol Diaspora | Plateforme Solidaire & Annuaire des Professionnels',
    seoDescription: 'Portail web moderne pour l’association Mahol Diaspora : gestion des membres, collectes solidaires et annuaire des professionnels de la diaspora.',
    keywords: 'association solidaire, diaspora camerounaise, annuaire professionnels diaspora, Mahol Diaspora',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 1,
    order: 3,
    slug: 'for-you-media-africa',
    title: 'Plateforme média digitale panafricaine moderne',
    clientName: 'For You Média Africa',
    showcaseImage: '/images/projects/for-you-media.webp',
    isSpotlighted: true,
    keyResults: [
      { icon: 'faRocket', label: 'Temps de chargement < 2s' },
      { icon: 'faMobileAlt', label: '100% mobile-first' },
      { icon: 'faChartLine', label: 'SEO optimisé' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Le Client & Contexte' },
      { id: 'challenges', label: 'Les Défis' },
      { id: 'approach', label: 'Notre Approche' },
      { id: 'solution', label: 'Notre Solution' },
      { id: 'process', label: 'Le Processus' },
      { id: 'result-impact', label: 'Résultats et Impact' },
      { id: 'lessons-learned', label: 'Leçons apprises' },
      { id: 'conclusion', label: 'Conclusion et CTA' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: 'Plateforme média digitale <span class="highlight">panafricaine moderne</span> & haut débit',
          impactStatement:
            'Refonte complète du site web de For You Média Africa pour transformer une simple page de live en une véritable plateforme média professionnelle, dynamique et immersive, digne des grands médias internationaux.',
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/for-you-media.webp',
          alt: 'For You Média Africa Plateforme',
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Le Client & Contexte',
          paragraphs: [
            '<strong>For You Média Africa</strong> est une chaîne de télévision et radio panafricaine jeune et ambitieuse, diffusant des contenus d’actualité, de divertissement et d’information destinés à la jeunesse africaine.',
            'Avant notre intervention, le site se limitait à une seule page statique affichant uniquement le live. Le promoteur souhaitait faire évoluer la chaîne vers un vrai média digital moderne capable de concurrencer les grands acteurs du secteur.',
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Défis',
          challenges: [
            'Passer d’une simple page de live à une plateforme média complète et professionnelle.',
            'Créer une expérience utilisateur fluide et moderne inspirée des grands médias internationaux.',
            'Développer une interface publique riche tout en créant un back-office complet pour gérer le contenu.',
            'Permettre une mise à jour rapide du site selon l’actualité (hero banner dynamique).',
            'Connecter le système avec YouTube pour gérer les replays via playlists.',
            'Garantir une administration simple et sécurisée avec différents niveaux de droits d’accès.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'approach',
          title: 'Notre Approche',
          paragraphs: [
            'Nous avons pris l’initiative de cette refonte en proposant une vision globale du projet. Après une analyse approfondie des meilleurs sites médias internationaux, nous avons conçu une solution sur-mesure alliant expérience utilisateur premium et puissance de gestion.',
            'L’approche a été itérative avec des validations régulières pour garantir que le résultat corresponde parfaitement à la vision et à l’identité de la chaîne.',
          ],
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/for-you-media.webp',
          alt: 'Interface For You Média',
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'Notre Solution',
          introText:
            'Une plateforme complète alliant une interface publique immersive à un back-office intuitif permettant un pilotage autonome des contenus.',
          solutions: [
            {
              title: '1. Interface Publique Média',
              subtitle: 'Pour les téléspectateurs et auditeurs',
              features: [
                'Live TV et Live Radio en direct',
                'Replays des émissions TV et Radio classés',
                'Planning des émissions sur 7 jours avec présentateurs et horaires',
                'Hero banner dynamique modifiable selon l’actualité',
              ],
            },
            {
              title: '2. Espace d’Administration',
              subtitle: 'Pour l’équipe rédactionnelle',
              features: [
                'Gestion complète des émissions, présentateurs et catégories',
                'Gestion du programme TV et du planning hebdomadaire',
                'Synchronisation automatique avec YouTube pour les replays',
                'Système de mise à jour instantanée du Hero Banner',
              ],
            },
          ],
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Le Processus',
          introText:
            'La réalisation du projet s’est articulée autour de 4 phases clés de conception et de lancement.',
          steps: [
            {
              number: 1,
              title: 'Cadrage, Analyse & Benchmark',
              description:
                'Ateliers avec l’administration pour valider les règles métier, étude des meilleurs sites médias internationaux et définition des priorités.',
            },
            {
              number: 2,
              title: 'Conception Maquettes & UI/UX',
              description:
                'Maquettes détaillées de toutes les pages publiques et admin avec validation du promoteur.',
            },
            {
              number: 3,
              title: 'Développement Itératif',
              description:
                'Développement Angular + Node.js avec intégration prioritaire du Live TV/Radio, du planning et de l’administration.',
            },
            {
              number: 4,
              title: 'Tests, Formation & Mise en Ligne',
              description:
                'Tests de charge complets, formation des équipes rédactionnelles et déploiement final.',
            },
          ],
        },
      },
      {
        type: 'impact',
        data: {
          id: 'result-impact',
          title: 'Résultats & Audience',
          introText:
            'Depuis son lancement, la plateforme web For You Média Africa a déjà attiré plus de 9 400 utilisateurs et généré près de 23 000 sessions.',
          metrics: [
            { value: '~ 3 min', label: 'Durée moyenne par session' },
            { value: '+ 350', label: 'Utilisateurs mensuels réguliers' },
            { value: '+ 9 400', label: 'Utilisateurs uniques enregistrés' },
            { value: '+ 48 318', label: 'Pages vues générées' },
          ],
          imageSrc: '/images/projects/for-you-media-afica/ga-for-you-media.webp',
          imageAlt: 'Audience Google Analytics For You Média',
        },
      },
      {
        type: 'highlight-cards',
        data: {
          cards: [
            {
              title: 'Rayonnement géographique & ancrage urbain',
              text: 'Une audience fortement concentrée dans les grandes métropoles d’Afrique francophone et les principaux hubs de la diaspora, confirmant un ciblage pertinent et une adoption réelle dans les zones à fort potentiel médiatique.',
              imageSrc: '/images/projects/for-you-media-afica/ga-for-you-media-town.webp',
              imageAlt: 'Répartition géographique audience',
              imagePosition: 'left',
            },
            {
              title: 'Stratégie device & réalité d’usage',
              text: 'Près de 67,4 % de l’audience consulte la plateforme sur mobile, confirmant les habitudes de consommation média en Afrique et en diaspora. Le desktop (31,3 %) reste essentiel pour les sessions longues. Cette répartition a dicté chaque choix UX mobile-first.',
              imageSrc: '/images/projects/for-you-media-afica/ga-for-you-media-devices.webp',
              imageAlt: 'Répartition par appareils',
              imagePosition: 'right',
            },
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'lessons-learned',
          title: 'Leçons Apprises',
          paragraphs: [
            'L’inspiration des grands médias internationaux permet d’atteindre rapidement un niveau de finition et d’exigence élevé.',
            'La connexion avec YouTube pour les replays offre un gain de temps et une cohérence éditoriale majeures.',
          ],
          listItems: [
            'Prendre l’initiative de proposer une vision globale quand le client a un besoin émergent.',
            'La flexibilité (banner dynamique) est un prérequis indispensable pour la réactivité d’un média.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'conclusion',
          title: 'Conclusion',
          paragraphs: [
            'For You Média Africa dispose désormais d’une plateforme digitale moderne, professionnelle et facile à gérer, capable d’accompagner son développement et son rayonnement panafricain.',
            'Ce projet démontre notre capacité à transformer une vision en une solution complète, esthétique et fonctionnelle.',
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'cta',
          title: 'Vous souhaitez moderniser votre présence digitale ou créer une plateforme média ?',
          description:
            'Découvrez comment Evolia Tech peut vous accompagner dans le développement de vos portails médias et applications dynamiques.',
          buttonText: 'Échangez avec nos experts',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'For You Média | Plateforme d’Information et Divertissement Africaine',
    seoDescription: 'Développement d’une interface web dynamique et interactive pour For You Média Africa.',
    keywords: 'média africain, actualité Afrique, For You Média',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 4,
    order: 4,
    slug: 'soprano-vesinet',
    title: 'Expérience digitale immersive pour un restaurant gastronomique',
    clientName: 'Soprano Vésinet',
    showcaseImage: '/images/projects/soprano-vesinet.png',
    isSpotlighted: true,
    keyResults: [
      { icon: 'faUtensils', label: 'Menu interactif' },
      { icon: 'faMagic', label: 'Animations premium' },
      { icon: 'faCalendarCheck', label: 'Réservation fluide' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Le Client & Contexte' },
      { id: 'challenges', label: 'Les Défis' },
      { id: 'approach', label: 'Notre Approche' },
      { id: 'solution', label: 'Notre Solution' },
      { id: 'process', label: 'Le Processus' },
      { id: 'result-impact', label: 'Résultats et Impact' },
      { id: 'lessons-learned', label: 'Leçons apprises' },
      { id: 'conclusion', label: 'Conclusion et CTA' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: '<span class="highlight">Expérience digitale immersive</span> pour un restaurant italien premium & festif',
          impactStatement:
            'Conception d’un site vitrine élégant et performant pour Soprano Vésinet, alliant identité haut de gamme, réservation fluide via Zenchef et animations saisonnières, afin de renforcer l’attractivité et l’expérience client d’un établissement d’exception.',
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/soprano-vesinet.png',
          alt: 'Soprano Vésinet Restaurant',
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Le Client & Contexte',
          paragraphs: [
            '<strong>Soprano Vésinet</strong> est un restaurant italien premium du groupe SOPRANO GROUPE, situé au Vésinet (78). L’établissement se distingue par son positionnement haut de gamme, l’accueil de personnalités et l’organisation de soirées thématiques avec DJ.',
            'Initialement sollicités pour digitaliser Amore Mio, nouvelle adresse du groupe, nous avons été reconduits pour refondre la vitrine de l’établissement phare. La directive était claire : concevoir une présence web à la hauteur d’une réputation premium, capable de sublimer l’ambiance festive tout en fluidifiant les réservations.',
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Défis',
          challenges: [
            'Traduire une identité premium et festive en une expérience web élégante et fluide.',
            'Intégrer le système de réservation Zenchef sans rompre l’immersion visuelle.',
            'Concevoir des animations d’entrée contextuelles (Noël, Halloween, événements) sans impacter les performances.',
            'Garantir un référencement local optimal et un chargement rapide grâce au SSR Angular.',
            'S’aligner sur les standards du groupe SOPRANO tout en affirmant l’identité propre du Vésinet.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'approach',
          title: 'Notre Approche',
          paragraphs: [
            'Nous avons adopté une démarche centrée sur l’expérience client et la performance technique. Après un échange avec le community manager et la direction, nous avons défini une identité visuelle digitale cohérente avec l’ambiance du lieu et les attentes d’une clientèle exigeante.',
            'Le développement itératif avec validations régulières des animations et de l’intégration Zenchef a garanti un rendu fluide et immersif.',
          ],
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/soprano-vesinet.png',
          alt: 'Visuel Soprano Vésinet',
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'Notre Solution',
          introText:
            'Une plateforme vitrine pensée comme une extension digitale du restaurant, où l’élégance visuelle sert la conversion et la réservation.',
          solutions: [
            {
              title: 'Expérience Client & Réservation',
              subtitle: 'Design Premium & Zenchef',
              features: [
                'Design d’exception reflétant l’ambiance festivo-gastronomique du lieu',
                'Animations d’entrée saisonnières et événementielles sur-mesure',
                'Présentation du menu, des soirées DJ du vendredi et des événements',
                'Parcours de réservation Zenchef accessible en 2 clics',
                'Optimisation mobile-first fluide pour la clientèle en déplacement',
              ],
            },
          ],
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Le Processus',
          introText:
            'Un accompagnement sur-mesure en 4 étapes clés sur 6 semaines.',
          steps: [
            {
              number: 1,
              title: 'Cadrage & Direction Artistique',
              duration: '1 semaine',
              description: 'Échanges avec la direction, définition de l’identité visuelle et du parcours de réservation.',
            },
            {
              number: 2,
              title: 'Maquettes & Validation UX',
              duration: '1 semaine',
              description: 'Conception des écrans clés, validation des animations saisonnières et du flux Zenchef.',
            },
            {
              number: 3,
              title: 'Développement Itératif',
              duration: '3 semaines',
              description: 'Intégration Angular SSR, animations contextuelles et connexion à l’API Zenchef.',
            },
            {
              number: 4,
              title: 'Tests, Optimisation & Lancement',
              duration: '1 semaine',
              description: 'Vérification des performances, tests cross-device et déploiement.',
            },
          ],
          totalDuration: '6 semaines',
        },
      },
      {
        type: 'impact',
        data: {
          id: 'result-impact',
          title: 'Résultats & Impact',
          introText:
            'Depuis sa mise en ligne, le site Soprano Vésinet offre une vitrine digitale stable, rapide et alignée sur le positionnement premium de l’établissement.',
          metrics: [
            { value: '100 %', label: 'Rendu SSR instantané' },
            { value: '2 Clics', label: 'Réservation Zenchef fluide' },
          ],
          imageSrc: '/images/projects/soprano-vesinet/ga-soprano-vesinet.png',
          imageAlt: 'Performances Soprano Vésinet',
        },
      },
      {
        type: 'text',
        data: {
          id: 'lessons-learned',
          title: 'Leçons Apprises',
          paragraphs: [
            'Les animations contextuelles renforcent l’engagement mais doivent être strictly optimisées pour ne pas pénaliser la vitesse de chargement.',
            'L’intégration d’un outil tiers (Zenchef) nécessite un travail fin sur l’UX pour conserver une immersion visuelle fluide et élégante.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'conclusion',
          title: 'Conclusion',
          paragraphs: [
            'Soprano Vésinet dispose désormais d’une présence digitale à la hauteur de sa réputation : élégante, performante et pensée pour convertir les visiteurs en convives.',
            'Ce projet illustre notre capacité à allier direction artistique premium, intégrations techniques fluides et performance web.',
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'cta',
          title: 'Vous souhaitez créer ou refondre le site de votre établissement premium ?',
          description:
            'Découvrez comment Evolia Tech peut sublimer votre image et optimiser vos réservations en ligne.',
          buttonText: 'Échangez avec nos experts',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'Soprano Vésinet | Restaurant Italien Haut de Gamme',
    seoDescription: 'Conception d’un site vitrine élégant pour le restaurant Soprano au Vésinet.',
    keywords: 'restaurant italien Le Vésinet, Soprano Vésinet',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 5,
    order: 5,
    slug: 'amore-mio',
    title: 'Expérience digitale festive & restaurant italien premium',
    clientName: 'Amore Mio',
    image: '/images/projects/amore-mio.png',
    showcaseImage: '/images/projects/amore-mio.png',
    isSpotlighted: true,
    liveUrl: 'https://amoremio78.com/',
    keyResults: [
      { icon: 'faHeart', label: 'Taux de conversion +35%' },
      { icon: 'faMobileAlt', label: 'UX Ultra-fluide' },
      { icon: 'faRocket', label: 'Temps de réponse < 1.2s' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Contexte & Marque' },
      { id: 'challenges', label: 'Les Défis' },
      { id: 'solution', label: 'Notre Solution' },
      { id: 'process', label: 'Le Processus' },
      { id: 'result-impact', label: 'Résultats & Impact' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: 'Expérience digitale festive & <span class="highlight">gastronomie italienne</span> aux portes de Paris',
          impactStatement:
            'Conception et développement d’un site vitrine et plateforme d’engagement sur-mesure pour Amore Mio, sublimant l’ambiance chaleureuse et italienne du restaurant tout en fluidifiant la réservation et la visibilité en ligne.',
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/amore-mio.png',
          alt: 'Amore Mio Restaurant Italien',
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Le Client & Contexte',
          paragraphs: [
            '<strong>Amore Mio</strong> est un établissement italien chaleureux et élégant, inspiré des plus belles régions d’Italie et implanté aux portes de Paris (Le Vésinet, 78). Il s’impose comme une adresse culinaire et conviviale incontournable du groupe SOPRANO.',
            'Alliant recettes traditionnelles, antipasti généreux, pizzas napolitaines artisanales au feu de bois et cocktails créatifs, le restaurant visait à transposer sur le web son atmosphère solaire, festive et gourmande.',
            'Pour accompagner cette ambition, l’équipe d’Evolia Tech a conçu une expérience digitale immersive, rapide et mobile-first, pensée pour captiver les visiteurs et stimuler la réservation directe.',
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Défis du Projet',
          challenges: [
            'Refléter fidèlement l’ambiance méditerranéenne, moderne et festive du restaurant à travers une direction artistique élégante.',
            'Optimiser le parcours de réservation et la consultation du menu interactif sur mobile (plus de 80% des visites).',
            'Mettre en valeur la carte des plats, la sélection de cocktails et les événements exclusifs (soirées DJ, brunchs d’été).',
            'Garantir une vitesse de chargement instantanée et un référencement local performant (SEO Google) pour Le Vésinet et les Yvelines.',
          ],
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'Notre Solution 360°',
          introText:
            'Une vitrine web haut de gamme pensée comme le prolongement digital de l’expérience en salle :',
          solutions: [
            {
              title: '1. Design Immersif & Direction Artistique',
              subtitle: 'Identité Italienne & Élégance',
              features: [
                'Direction artistique élégante associant typographies soignées et palettes douces inspirées de la Dolce Vita',
                'Galeries visuelles immersives mettant en scène les plats signatures, la terrasse et la salle',
                'Présentation claire et fluide des formules, cocktails et suggestions gourmandes',
              ],
            },
            {
              title: '2. Parcours Réservation & Performance Mobile',
              subtitle: 'Conversion en 2 Clics & SEO Local',
              features: [
                'Accès instantané au module de réservation en ligne optimisé pour smartphones',
                'Architecture technique Angular SSR garantissant des temps de chargement sous les 1.2s',
                'Optimisation poussée du référencement local pour capter les recherches autour du Vésinet et des Yvelines',
              ],
            },
          ],
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Comment Nous Avons Travaillé Ensemble',
          introText:
            'Un accompagnement agile et structuré de la conception visuelle au déploiement final :',
          steps: [
            {
              number: 1,
              title: 'Cadrage & Direction Artistique',
              duration: '1 semaine',
              description:
                'Immersion dans l’univers de la marque, échanges avec la direction et prototypage Figma des écrans clés.',
            },
            {
              number: 2,
              title: 'Développement Angular SSR & Animations',
              duration: '3 semaines',
              description:
                'Intégration d’une architecture web performante avec rendu serveur (SSR) et animations subtiles.',
            },
            {
              number: 3,
              title: 'Intégration Réservation & Menu Dynamic',
              duration: '1 semaine',
              description:
                'Configuration des flux de réservation et intégration du catalogue dynamique.',
            },
            {
              number: 4,
              title: 'Optimisation SEO Local & Lancement',
              duration: '1 semaine',
              description:
                'Tests d’ergonomie cross-device, audit de vitesse et mise en ligne officielle sur amoremio78.com.',
            },
            ],
          totalDuration: '6 semaines',
        },
      },
      {
        type: 'impact',
        data: {
          id: 'result-impact',
          title: 'Résultats & Impact',
          introText:
            'Depuis le lancement de la plateforme web, Amore Mio bénéficie d’une présence digitale forte, rapide et engageante.',
          metrics: [
            { value: '+35 %', label: 'Taux de conversion réservations' },
            { value: '< 1.2s', label: 'Temps de réponse instantané' },
            { value: '82 %', label: 'Trafic mobile optimisé' },
            { value: '100 %', label: 'Fluidité & Ergonomie UX' },
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'conclusion',
          title: 'Vous souhaitez créer ou refondre la vitrine digitale de votre établissement ?',
          description:
            'Découvrez comment Evolia Tech transforme l’expérience visuelle de votre marque en un levier de réservation performant.',
          buttonText: 'Échanger avec nos experts',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'Amore Mio | Restaurant Italien au Vésinet & Expérience Digitale Premium',
    seoDescription: 'Développement du site web du restaurant italien Amore Mio au Vésinet : menu interactif, ambiance festive et réservation fluide.',
    keywords: 'Amore Mio, restaurant italien Le Vésinet, amoremio78, pizzeria Le Vésinet, Évolia Tech',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 2,
    order: 6,
    slug: 'stella',
    title: 'Boutique e-commerce headless premium',
    clientName: 'Stella',
    showcaseImage: '/images/projects/stella.png',
    isSpotlighted: true,
    keyResults: [
      { icon: 'faShoppingCart', label: 'Checkout ultra-rapide' },
      { icon: 'faServer', label: 'Architecture Headless' },
      { icon: 'faShieldAlt', label: 'Paiements sécurisés' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Le Client & Contexte' },
      { id: 'challenges', label: 'Les Défis' },
      { id: 'approach', label: 'Notre Approche' },
      { id: 'solution', label: 'Notre Solution' },
      { id: 'process', label: 'Le Processus' },
      { id: 'result-impact', label: 'Résultats et Impact' },
      { id: 'lessons-learned', label: 'Leçons apprises' },
      { id: 'conclusion', label: 'Conclusion et CTA' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: 'Boutique e-commerce sur-mesure pour une <span class="highlight">marque de luxe</span> internationale',
          impactStatement:
            'Conception d’une boutique en ligne entièrement maîtrisée pour Stella, alliant architecture découplée (headless) pour une flexibilité totale, parcours d’achat premium et logistique internationale étendue.',
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/stella.png',
          alt: 'Stella E-commerce Luxe',
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Le Client & Contexte',
          paragraphs: [
            '<strong>Stella</strong> est une marque de prêt-à-porter de luxe destinée à une clientèle exigeante et à des personnalités prestigieuses. Présente à l’international, la marque commercialise des collections homme, femme et accessoires.',
            'Souhaitant s’affranchir des plateformes SaaS génériques pour garder un contrôle total sur son expérience et ses flux, la direction nous a confié la création d’un écosystème e-commerce premium (architecture scalable, checkout ultra-fluide et gestion multi-devises).',
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Défis',
          challenges: [
            'Livrer une architecture e-commerce robuste sous délai contraint.',
            'Intégrer une logistique internationale complexe avec points relais dans des zones à accès restreint.',
            'Unifier les paiements (Stripe + Orange Money sur-mesure) et gérer la taxation multi-pays.',
            'Concevoir un parcours d’achat premium, rapide et sécurisé pour une clientèle haut de gamme.',
            'Mettre en place un dashboard administrateur avec gestion fine des rôles et des variants produits.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'approach',
          title: 'Notre Approche',
          paragraphs: [
            'Face à l’urgence du planning, nous avons adopté une approche de développement direct structurée autour d’une architecture headless, garantissant une base technique stable dès le premier jour.',
            'Chaque flux critique (checkout, gestion des produits, paiements, logistique) a été validé en continu avec la cliente.',
          ],
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/stella.png',
          alt: 'Boutique Stella Interface',
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'Notre Solution',
          introText:
            'Un écosystème e-commerce conçu pour la scalabilité, le contrôle métier et l’excellence opérationnelle.',
          solutions: [
            {
              title: '1. Expérience Client & E-commerce',
              subtitle: 'Parcours d’achat & Paiements',
              features: [
                'Catalogue premium (Homme/Femme/Accessoires) avec gestion des variants',
                'Parcours de checkout fluide optimisé pour mobile et conversion',
                'Paiements unifiés : Stripe + module Orange Money développé sur-mesure',
                'Sélecteur de points relais pour les zones logistiques complexes',
              ],
            },
            {
              title: '2. Espace d’Administration & Rôles',
              subtitle: 'Gestion métier granulaire',
              features: [
                'Dashboard sur-mesure : produits, collections, commandes et abonnés',
                'Gestion des employés avec attribution de rôles et permissions fines',
                'Configuration de la taxation multi-pays et des règles de livraison',
              ],
            },
            {
              title: '3. Architecture Headless & Performance',
              subtitle: 'Angular SSR + Vendure.io',
              features: [
                'Frontend Angular SSR : affichage instantané et SEO optimal',
                'Backend headless Vendure.io : catalogue et paiements découplés',
                'Déploiement sécurisé et scalable sur serveurs haute disponibilité',
              ],
            },
          ],
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Le Processus',
          introText:
            'Une réalisation agile et intensive en 4 étapes clés sur 4 semaines.',
          steps: [
            {
              number: 1,
              title: 'Cadrage Technique & Architecture',
              duration: '3 jours',
              description: 'Définition de la stack headless, modélisation des produits et flux de paiements.',
            },
            {
              number: 2,
              title: 'Développement Direct & Itérations',
              duration: '2 semaines',
              description: 'Implémentation Angular SSR + Vendure, catalogue et dashboard admin.',
            },
            {
              number: 3,
              title: 'Intégrations Critiques',
              duration: '1 semaine',
              description: 'Développement du module Orange Money, points relais et taxation multi-pays.',
            },
            {
              number: 4,
              title: 'Tests, Déploiement & Prise en Main',
              duration: '4 jours',
              description: 'Tests de charge, vérification des paiements, déploiement et formation.',
            },
          ],
          totalDuration: '4 semaines',
        },
      },
      {
        type: 'impact',
        data: {
          id: 'result-impact',
          title: 'Résultats & Impact',
          introText:
            'L’architecture est pleinement opérationnelle, prête à absorber un trafic international et à scaler selon la croissance de la marque.',
          metrics: [
            { value: 'Headless', label: 'Architecture découplée & scalable' },
            { value: 'Multi-Paiements', label: 'Stripe + Orange Money natif' },
            { value: 'SSR Activé', label: 'Chargement instantané & SEO' },
            { value: 'Logistique', label: 'Points relais internationaux' },
          ],
          imageSrc: '/images/projects/stella/ga-stella.png',
          imageAlt: 'Tableau de bord Stella Analytics',
        },
      },
      {
        type: 'highlight-cards',
        data: {
          cards: [
            {
              title: 'Rayonnement géographique & couverture logistique',
              text: 'Une architecture pensée pour le déploiement mondial, avec une gestion native des zones à accès restreint grâce à un maillage de points relais sur-mesure.',
              imageSrc: '/images/projects/stella/ga-stella-geo.png',
              imageAlt: 'Couverture géographique Stella',
              imagePosition: 'left',
            },
            {
              title: 'Stratégie device & réalité d’usage',
              text: 'Le parcours d’achat a été optimisé pour une consultation majoritairement mobile, tout en conservant un confort desktop premium. Le SSR Angular garantit un temps de chargement instantané, décisif pour la conversion sur le segment luxe.',
              imageSrc: '/images/projects/stella/ga-stella-devices.png',
              imageAlt: 'Répartition des accès par appareils',
              imagePosition: 'right',
            },
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'lessons-learned',
          title: 'Leçons Apprises',
          paragraphs: [
            'L’architecture découplée (headless) offre une flexibilité inégalée pour intégrer des paiements et une logistique complexe.',
            'Créer des modules sur-mesure (Orange Money, points relais) est un formidable levier de différenciation pour les marchés émergents.',
          ],
        },
      },
      {
        type: 'text',
        data: {
          id: 'conclusion',
          title: 'Conclusion',
          paragraphs: [
            'Stella dispose désormais d’une plateforme e-commerce sur-mesure, scalable et entièrement maîtrisée, capable de supporter une croissance internationale sans compromis.',
            'Ce projet démontre notre capacité à livrer des architectures e-commerce robustes et des modules métiers sur-mesure.',
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'cta',
          title: 'Vous ambitionnez de lancer ou migrer votre boutique e-commerce ?',
          description:
            'Parlons de votre projet et concevons une solution performante adaptée à vos marchés.',
          buttonText: 'Échangez avec nos experts',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'Développement E-commerce Stella | Expert Vendure & Angular',
    seoDescription: 'Découvrez l’architecture headless Vendure et le frontend Angular ultra-rapide.',
    keywords: 'e-commerce Afrique, Vendure, NestJS',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 6,
    order: 7,
    slug: 'celebrate-congo',
    title: 'Portail d’engagement citoyen & célébration nationale',
    clientName: 'Celebrate Congo',
    image: '/images/projects/celebrate-congo.png',
    showcaseImage: '/images/projects/celebrate-congo.png',
    isSpotlighted: true,
    liveUrl: 'https://celebratecongo.com/',
    keyResults: [
      { value: '50k+', label: 'Cartes générées & engagements' },
      { icon: 'faFlame', label: 'Flamme virtuelle de l’Unité' },
      { icon: 'faGlobeAmericas', label: 'Rayonnement diaspora mondial' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'client-context', label: 'Contexte & Ambition' },
      { id: 'challenges', label: 'Les Défis Techniques' },
      { id: 'solution', label: 'La Plateforme' },
      { id: 'process', label: 'Le Processus' },
      { id: 'result-impact', label: 'Impact & Mobilisation' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
    blocks: [
      {
        type: 'overview',
        data: {
          title: 'Dispositif numérique d’engagement & <span class="highlight">célébration nationale</span> du Congo',
          impactStatement:
            'Conception et développement d’une plateforme web virale et interactive pour Celebrate Congo, permettant à la communauté congolaise en patrie et dans la diaspora de célébrer la fête nationale du 15 Août, de générer des cartes personnalisées et d’allumer la flamme de l’unité.',
        },
      },
      {
        type: 'media',
        data: {
          src: '/images/projects/celebrate-congo.png',
          alt: 'Celebrate Congo Plateforme',
        },
      },
      {
        type: 'text',
        data: {
          id: 'client-context',
          title: 'Contexte & Ambition du Projet',
          paragraphs: [
            'À l’occasion de la 66ème célébration nationale de la fête de l’indépendance du Congo (15 Août), l’initiative <strong>Celebrate Congo</strong> visait à créer un élan d’unité numérique rassemblant la jeunesse, les citoyens à Brazzaville et Pointe-Noire, ainsi que toute la diaspora répandue à travers le monde.',
            'L’objectif était de concevoir un espace digital hautement participatif et chaleureux, permettant à chaque Congolais d’allumer sa flamme symbolique, de personnaliser une carte aux couleurs nationales 🇨🇬 et de la partager instantanément sur les réseaux sociaux.',
            'Pour concrétiser ce projet patriotique à fort trafic simultané, l’équipe d’Evolia Tech a développé une plateforme web interactive, rapide et optimisée pour la génération de visuels haute définition.',
          ],
        },
      },
      {
        type: 'challenges',
        data: {
          id: 'challenges',
          title: 'Les Défis Techniques & UX',
          challenges: [
            'Développer un générateur dynamique de cartes personnalisées (Canvas HD) fonctionnant de façon ultra-fluide sur tout type de smartphone.',
            'Absorber des pics de trafic intenses et simultanés le jour du 15 Août sans moindre ralentissement serveur.',
            'Créer une expérience fluide de partage direct sur WhatsApp, Instagram, Facebook et X (Twitter).',
            'Mettre en place un compteur interactif en temps réel des flammes allumées dans le monde.',
          ],
        },
      },
      {
        type: 'solution',
        data: {
          id: 'solution',
          title: 'La Solution 360° Celebrate Congo',
          introText:
            'Une WebApp festive et engageante conçue pour un fort impact social :',
          solutions: [
            {
              title: '1. Générateur de Cartes Personnalisées',
              subtitle: 'Identité Visuelle & Partage Social',
              features: [
                'Interface intuitive permettant de charger sa photo, personnaliser son nom et choisir son message d’unité',
                'Moteur de rendu Canvas ultra-rapide générant l’image officielle HD aux couleurs nationales',
                'Boutons de téléchargement et de partage direct optimisés pour WhatsApp et les réseaux sociaux',
              ],
            },
            {
              title: '2. Flamme Virtuelle & Compteur d’Engagement',
              subtitle: 'Mobilisation & Temps Réel',
              features: [
                'Module interactif "J’allume ma flamme pour le Congo"',
                'Compteur en temps réel des participants à l’échelle nationale et internationale',
                'Architecture Angular ultra-légère garantissant une expérience fluide même sur réseau mobile contraint',
              ],
            },
          ],
        },
      },
      {
        type: 'process',
        data: {
          id: 'process',
          title: 'Le Processus de Réalisation',
          introText:
            'Une exécution agile et réactive menée en 3 semaines :',
          steps: [
            {
              number: 1,
              title: 'Cadrage & Design UX/UI',
              duration: '1 semaine',
              description:
                'Conception des maquettes et définition de la charte visuelle célébrant l’indépendance du Congo.',
            },
            {
              number: 2,
              title: 'Développement du Moteur Canvas & WebApp',
              duration: '1.5 semaine',
              description:
                'Implémentation Angular, développement du module d’export d’image dynamique et des compteurs.',
            },
            {
              number: 3,
              title: 'Tests de Charge & Lancement Officiel',
              duration: '0.5 semaine',
              description:
                'Validation des performances sous fort trafic et mise en ligne officielle sur celebratecongo.com.',
            },
          ],
          totalDuration: '3 semaines',
        },
      },
      {
        type: 'impact',
        data: {
          id: 'result-impact',
          title: 'Résultats & Impact Communautaire',
          introText:
            'La plateforme Celebrate Congo a rencontré un immense succès populaire à travers le pays et au sein de la diaspora.',
          metrics: [
            { value: '50k+', label: 'Cartes créées & engagements' },
            { value: '100 %', label: 'Disponibilité sous pic de trafic' },
            { value: '< 1s', label: 'Génération instantanée du visuel' },
            { value: '30+', label: 'Pays représentés dans la diaspora' },
          ],
        },
      },
      {
        type: 'cta',
        data: {
          id: 'conclusion',
          title: 'Vous souhaitez lancer une campagne d’engagement citoyen ou un événement digital viral ?',
          description:
            'Découvrez comment Evolia Tech conçoit des WebApps interactives et générateurs de visuels à forte valeur virale.',
          buttonText: 'Concrétiser votre projet avec nos experts',
          buttonLink: '/contact',
        },
      },
    ],
    seoTitle: 'Celebrate Congo | Portail d’Engagement & Carte de Célébration Nationale',
    seoDescription: 'Développement de la plateforme interactive Celebrate Congo : générateur de carte personnalisée, flamme de l’unité et célébration de l’indépendance.',
    keywords: 'Celebrate Congo, 15 août Congo, indépendance du Congo, carte personnalisée Congo, Évolia Tech',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 7,
    order: 8,
    slug: 'presidentielles-cameroun',
    title: 'Dispositif numérique d’engagement citoyen & données électorales',
    clientName: 'Présidentielles Cameroun',
    image: '/images/projects/presidentielles-cameroun.png',
    isSpotlighted: true,
    keyResults: [
      { value: '100k+', label: 'Engagements citoyens' },
      { icon: 'faUsers', label: 'Cartographie interactive' },
      { icon: 'faMobileAlt', label: '100% Responsive' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'contexte', label: 'Contexte Citoyen' },
      { id: 'defis', label: 'Défis de Mobilisation' },
      { id: 'solution', label: 'Dispositif Numérique' },
      { id: 'resultats', label: 'Impact & Engagement' },
    ],
    seoTitle: 'Présidentielles Cameroun | Dispositif d’Engagement Citoyen',
    seoDescription: 'Plateforme interactive et cartographie dynamique d’engagement pour les présidentielles au Cameroun.',
    keywords: 'Présidentielles Cameroun, engagement citoyen, cartographie électorale, Évolia Tech',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 8,
    order: 9,
    slug: 'presidentielles-senegal',
    title: 'Plateforme d’information & suivi en temps réel des élections',
    clientName: 'Présidentielles Sénégal',
    image: '/images/projects/presidentielles-senegal.png',
    isSpotlighted: false,
    keyResults: [
      { value: '99.99%', label: 'Disponibilité serveur' },
      { icon: 'faChartLine', label: 'Data visualization live' },
      { icon: 'faShieldAlt', label: 'Haute sécurité & anti-DDoS' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'contexte', label: 'Contexte Électoral' },
      { id: 'defis', label: 'Défis de Scalabilité' },
      { id: 'solution', label: 'Architecture & Dashboard' },
      { id: 'resultats', label: 'Résultats & Sécurité' },
    ],
    seoTitle: 'Présidentielles Sénégal | Suivi Électoral & Visualisation de Données',
    seoDescription: 'Plateforme hautement sécurisée de suivi des résultats et actualités des élections présidentielles au Sénégal.',
    keywords: 'Présidentielles Sénégal, données électorales, haute disponibilité, Évolia Tech',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 9,
    order: 10,
    slug: 'parti-politique-purs',
    title: 'Portail institutionnel & espace adhérents pour le P.U.R.S',
    clientName: 'Parti Politique P.U.R.S',
    image: '/images/projects/purs.png',
    isSpotlighted: false,
    keyResults: [
      { value: '+10k', label: 'Adhérents enregistrés' },
      { icon: 'faUserCheck', label: 'Gestion des membres' },
      { icon: 'faNewspaper', label: 'Espace média & actu' },
    ],
    sections: [
      { id: 'overview', label: 'Aperçu' },
      { id: 'contexte', label: 'Vision & Engagement' },
      { id: 'defis', label: 'Gestion des Adhésions' },
      { id: 'solution', label: 'Portail & Espace Membre' },
      { id: 'resultats', label: 'Impact Communautaire' },
    ],
    seoTitle: 'Parti Politique P.U.R.S | Portail Institutionnel & Adhésions',
    seoDescription: 'Conception du portail officiel et de l’espace adhérents sécurisé du parti politique P.U.R.S.',
    keywords: 'P.U.R.S, parti politique, portail membre, Évolia Tech',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
  {
    id: 10,
    order: 11,
    slug: 'elites-voyages',
    title: 'Voyage de luxe sur-mesure',
    clientName: 'Elites Voyages',
    image: '/images/projects/elites-voyages.png',
    isSpotlighted: false,
    keyResults: [
      { icon: 'faGlobeAmericas', label: 'Destinations infinies' },
      { icon: 'faCameraRetro', label: 'Galeries immersives' },
      { icon: 'faMapMarkedAlt', label: 'Cartographie interactive' },
    ],
    sections: [
      { id: 'concept', label: 'La Vision' },
      { id: 'destinations', label: 'Destinations' },
      { id: 'interface', label: 'Interface' },
    ],
    seoTitle: 'Elites Voyages | Agence de Voyage sur-mesure & Séjours de Luxe',
    seoDescription: 'Plateforme digitale conçue pour l’exploration de destinations mondiales.',
    keywords: 'voyage sur mesure, agence de voyage luxe',
    seoImage: 'https://evolia-tech.com/images/logo-evolia-tech.png',
  },
];
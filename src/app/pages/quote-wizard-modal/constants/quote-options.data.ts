import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faGlobe, 
  faShoppingCart, 
  faLaptopCode, 
  faMobileScreenButton, 
  faLightbulb, 
  faListCheck, 
  faFileText 
} from '@fortawesome/free-solid-svg-icons';

export interface QuoteOption {
  value: string;
  label: string;
  desc: string;
  icon?: IconDefinition;
}

export const PROJECT_OPTIONS: QuoteOption[] = [
  { value: 'showcase', label: 'Site Vitrine', desc: 'Présentation de votre activité, services et valeurs avec un design soigné et optimisé.', icon: faGlobe },
  { value: 'ecommerce', label: 'E-commerce / Marketplace', desc: 'Boutiques en ligne haut de gamme, architectures headless (Vendure.io) et places de marché multi-vendeurs.', icon: faShoppingCart },
  { value: 'web', label: 'Application Web / SaaS', desc: 'Plateformes d\'entreprise, portails, et architectures complexes.', icon: faLaptopCode },
  { value: 'mobile', label: 'Application Mobile', desc: 'Expérience native double iOS & Android avec Flutter.', icon: faMobileScreenButton }
];

export const CREATION_OPTIONS: QuoteOption[] = [
  { value: 'creation', label: 'Création de zéro', desc: 'Vous n\'avez pas encore de site internet existant.' },
  { value: 'refonte', label: 'Refonte de site existant', desc: 'Vous souhaitez moderniser ou restructurer votre site actuel.' }
];

export const GOAL_OPTIONS: QuoteOption[] = [
  { value: 'present', label: 'Présenter mon activité', desc: 'Faire connaître mes services et mon entreprise en ligne.' },
  { value: 'leads', label: 'Générer des demandes de contact', desc: 'Attirer de nouveaux prospects via des formulaires.' },
  { value: 'appointments', label: 'Générer des rendez-vous', desc: 'Permettre aux visiteurs de réserver un créneau en ligne.' },
  { value: 'brand', label: 'Renforcer mon image de marque', desc: 'Mettre en valeur le professionnalisme et la notoriété.' },
  { value: 'launch', label: 'Lancer mon activité', desc: 'Démarrer avec une présence web propre et moderne.' },
  { value: 'other', label: 'Autre objectif', desc: 'Hésitation ou besoin sur-mesure non listé.' }
];

export const PAGES_OPTIONS: QuoteOption[] = [
  { value: 'one-page', label: 'One-page', desc: 'Toutes les informations essentielles sur une seule page unique.' },
  { value: 'small', label: 'Petit site (2 à 5 pages)', desc: 'Accueil, Services, À propos, Contact, etc.' },
  { value: 'medium-large', label: 'Moyen/Grand site (6 à 15 pages ou +)', desc: 'Pour une structure plus large et riche en contenu.' },
  { value: 'unknown', label: 'Je ne sais pas encore', desc: 'Besoin de conseils pour définir le nombre de pages.' }
];

export const FEATURES_OPTIONS: QuoteOption[] = [
  { value: 'form', label: 'Formulaire avancé', desc: 'Champs conditionnels, téléchargements de fichiers, etc.' },
  { value: 'booking', label: 'Prise de rendez-vous', desc: 'Calendrier interactif synchronisé.' },
  { value: 'blog', label: 'Blog / Actualités', desc: 'Partagez des articles pour attirer du trafic.' },
  { value: 'multilingual', label: 'Multilingue', desc: 'Site traduit en plusieurs langues.' },
  { value: 'members', label: 'Espace membre', desc: 'Accès sécurisé pour vos clients ou partenaires.' },
  { value: 'chat', label: 'Chat en ligne', desc: 'Discutez en direct avec vos visiteurs.' },
  { value: 'chatbot', label: 'Chatbot conversationnel IA', desc: 'Répond 24h/24 et 7j/7 aux questions courantes de vos visiteurs.' },
  { value: 'seo', label: 'SEO avancé', desc: 'Optimisation sémantique et technique poussée.' },
  { value: 'none', label: 'Site simple', desc: 'Aucune fonctionnalité spécifique, un site simple suffit.' }
];

export const BRANDING_OPTIONS: QuoteOption[] = [
  { value: 'full', label: 'J\'ai déjà tout', desc: 'Logo, charte graphique prête et contenus (textes/images) finalisés.' },
  { value: 'partial', label: 'Aide partielle', desc: 'J\'ai mon logo, mais j\'ai besoin d\'aide pour les textes et visuels.' },
  { value: 'none', label: 'Partir de zéro', desc: 'Besoin de création d\'identité visuelle, branding complet et logo.' }
];

export const TIMEFRAME_OPTIONS: QuoteOption[] = [
  { value: 'urgent', label: 'Urgent', desc: 'Mise en ligne souhaitée sous 1 mois.' },
  { value: 'normal', label: 'Normal', desc: 'Développement classique sous 1 à 2 mois.' },
  { value: 'flexible', label: 'Pas pressé', desc: 'Lancement serein sous 3 à 6 mois.' }
];

// SaaS specific options
export const SAAS_MATURITY_OPTIONS: QuoteOption[] = [
  { value: 'idea', label: 'Idée / Concept', desc: 'J\'ai le besoin business, mais rien de rédigé/développé' },
  { value: 'specs', label: 'Cahier des charges prêt', desc: 'J\'ai les spécifications et/ou les maquettes Figma' },
  { value: 'rebuild', label: 'Refonte / Reconstruction', desc: 'J\'ai une application existante à refaire/moderniser' },
  { value: 'scaling', label: 'Scaling / Évolution', desc: 'Mon produit tourne déjà, je veux ajouter des modules complexes/IA' }
];

export const SAAS_USERS_OPTIONS: QuoteOption[] = [
  { value: 'b2b', label: 'B2B (Entreprises)', desc: 'Outil de travail interne, CRM, ERP sur-mesure, Portail Client.' },
  { value: 'b2c', label: 'B2C (Grand Public)', desc: 'Plateforme de services, réseau social, marketplace, SaaS grand public.' },
  { value: 'hybrid', label: 'Mixte (B2B2C)', desc: 'Multi-tenancy (plusieurs organisations avec leurs propres clients).' }
];

export const SAAS_FEATURES_OPTIONS: QuoteOption[] = [
  { value: 'auth', label: 'Authentification & Rôles avancés', desc: 'SSO, Rôles Admin/Manager/User, Multi-tenant' },
  { value: 'billing', label: 'Paiement & Abonnements', desc: 'Stripe, Gestion de factures, récurrence' },
  { value: 'dashboards', label: 'Dashboard & Data Visualization', desc: 'Tableaux de bord interactifs, exports' },
  { value: 'ai', label: 'Moteur d\'IA / Génératif', desc: 'Agent IA, analyse de documents, automatisation Genkit' },
  { value: 'realtime', label: 'Temps réel & Collaboration', desc: 'Notifications instantanées, websockets, chat' },
  { value: 'api', label: 'Connexions API / Interconnexions', desc: 'Lier le SaaS à des outils tiers : HubSpot, Zapier, ERP...' }
];

export const SAAS_INFRA_OPTIONS: QuoteOption[] = [
  { value: 'cloud', label: 'Cloud Haute Disponibilité', desc: 'Google Cloud / AWS - Scalabilité automatique' },
  { value: 'security', label: 'Normes de Sécurité Strictes', desc: 'RGPD renforcé, données de santé, chiffrement' },
  { value: 'performance', label: 'Besoin de performances extrêmes', desc: 'Chargement ultra-rapide, traitement lourd' },
  { value: 'none', label: 'Aucune idée', desc: 'Je vous laisse piloter l\'architecture.' }
];

export const SAAS_BUDGET_OPTIONS: QuoteOption[] = [
  { value: 'low_saas', label: '8 000 € – 15 000 €', desc: 'Petite Web App / MVP ciblé' },
  { value: 'mid_saas', label: '15 000 € – 30 000 €', desc: 'SaaS complet / App Métier avancée' },
  { value: 'high_saas', label: '30 000 € – 60 000 €', desc: 'Plateforme complexe / Multi-modules + IA' },
  { value: 'enterprise_saas', label: '+60 000 €', desc: 'Projet d\'envergure globale' }
];

export const SAAS_START_OPTIONS: QuoteOption[] = [
  { value: 'urgent', label: 'Immédiatement', desc: 'Sous 1 mois' },
  { value: 'normal', label: 'Dans les 2 à 3 mois', desc: 'Cadrage puis démarrage du build' },
  { value: 'flexible', label: 'Phase d\'étude', desc: 'Pas d\'urgence' }
];

// E-commerce & Marketplace options
export const ECO_MODEL_OPTIONS: QuoteOption[] = [
  { value: 'boutique', label: 'Boutique en ligne', desc: 'Je vends mes propres produits et services.' },
  { value: 'multimarques', label: 'Multi-marques', desc: 'Catalogue élargi avec plusieurs marques.' },
  { value: 'marketplace', label: 'Marketplace', desc: 'Plusieurs vendeurs avec gestion de catalogue tiers.' },
  { value: 'b2b', label: 'Plateforme B2B', desc: 'E-commerce professionnel avec grilles de prix dédiées.' },
  { value: 'omnicanal', label: 'Omnicanal', desc: 'Expérience de vente web, mobile et autres canaux.' },
  { value: 'not_sure', label: 'Je ne sais pas encore', desc: 'Besoin d\'accompagnement pour affiner le modèle.' }
];

export const ECO_CATALOG_OPTIONS: QuoteOption[] = [
  { value: 'launch', label: 'Lancement : Moins de 100 références', desc: 'Nouveau projet' },
  { value: 'growth', label: 'Croissance : 100 à 5 000 références', desc: 'Développement d\'activité' },
  { value: 'enterprise', label: 'Grand Catalogue : +5 000 références ou Multi-boutiques', desc: 'Besoins de synchronisation de masse' },
  { value: 'refonte', label: 'Refonte / Migration', desc: 'Nous avons déjà un site (WooCommerce, Shopify, PrestaShop...) et voulons passer sur une architecture plus performante.' }
];

export const ECO_PAYMENTS_OPTIONS: QuoteOption[] = [
  { value: 'classic', label: 'Paiement classique & Abonnements', desc: 'CB, Apple/Google Pay, récurrence Stripe' },
  { value: 'split', label: 'Répartition automatique des paiements', desc: 'Split payment vendeurs & commissions via Stripe Connect' },
  { value: 'b2b_pay', label: 'Paiement B2B & Différé', desc: 'Facturation auto, paiement à 30 jours, virement SEPA' },
  { value: 'intl', label: 'International & Multi-devises', desc: 'Gestion automatique des devises et des règles de TVA' },
  { value: 'escrow', label: 'Système de Séquestre', desc: 'L\'argent est bloqué jusqu\'à la validation de la livraison' }
];

export const ECO_FEATURES_OPTIONS: QuoteOption[] = [
  { value: 'pwa', label: 'Vitesse extrême & Mode Hors-Ligne (PWA)', desc: 'Expérience fluide type application mobile' },
  { value: 'search', label: 'Moteur de recherche intelligent (IA)', desc: 'Recherche sémantique, filtres instantanés' },
  { value: 'recs', label: 'Recommandations personnalisées par IA', desc: 'Moteur d\'Upsell / Cross-sell' },
  { value: 'erp', label: 'Synchronisation ERP / Logistique / Stocks', desc: 'Connexion en temps réel à vos entrepôts' },
  { value: 'vendor', label: 'Espace Vendeur / Merchant Dashboard', desc: 'Pour que vos vendeurs gèrent leurs produits et retraits' }
];

export const ECO_BUDGET_OPTIONS: QuoteOption[] = [
  { value: 'low_eco', label: '8 000 € – 15 000 €', desc: 'E-commerce Headless ciblé / MVP Marketplace' },
  { value: 'mid_eco', label: '15 000 € – 30 000 €', desc: 'Marketplace complète ou E-commerce Headless multi-modules' },
  { value: 'high_eco', label: '30 000 € – 60 000 €', desc: 'Plateforme transactionnelle d\'envergure, B2B complexe' },
  { value: 'enterprise_eco', label: '+60 000 €', desc: 'Projet d\'architecture globale' }
];

export const ECO_TIMEFRAME_OPTIONS: QuoteOption[] = [
  { value: 'urgent', label: 'Urgent', desc: 'Sous 2 mois' },
  { value: 'normal', label: 'Normal', desc: '3 à 5 mois' },
  { value: 'flexible', label: 'Phase de cadrage', desc: 'Pas de date fixée' }
];

// Mobile (Flutter) options
export const MOBILE_TARGETS_OPTIONS: QuoteOption[] = [
  { value: 'both', label: 'iOS (App Store) & Android (Google Play)', desc: 'Lancement simultané sur les deux stores grâce à notre architecture Flutter' },
  { value: 'ios', label: 'iOS uniquement', desc: 'Lancement exclusif iPhone et iPad.' },
  { value: 'android', label: 'Android uniquement', desc: 'Lancement exclusif terminaux Android.' },
  { value: 'digital_product', label: 'Un produit digital principal', desc: 'Nouvelle application autonome ou service principal.' },
  { value: 'connected', label: 'Connectée à une plateforme existante', desc: 'Extension mobile d\'un SaaS, d\'un e-commerce ou outil interne métier.' }
];

export const MOBILE_BACKEND_OPTIONS: QuoteOption[] = [
  { value: 'full_create', label: 'À créer entièrement', desc: 'Développer l\'application mobile Flutter ET le Back-End / API (NestJS + Base de données).' },
  { value: 'existing_api', label: 'Backend existant', desc: 'J\'ai déjà des API web prêtes, il faut développer l\'application Flutter et la connecter.' },
  { value: 'rebuild_app', label: 'Refonte complète', desc: 'J\'ai une application existante à reconstruire sur une technologie moderne.' },
  { value: 'idea_design', label: 'Idée / Maquettes prêtes', desc: 'Le concept est structuré ou des maquettes UX sont déjà prêtes.' }
];

export const MOBILE_FEATURES_OPTIONS: QuoteOption[] = [
  { value: 'push', label: 'Notifications Push', desc: 'Réengagement avec des alertes ciblées et temps réel' },
  { value: 'gps', label: 'Géolocalisation & Cartographie', desc: 'GPS, calcul d\'itinéraires et lieux proches' },
  { value: 'camera', label: 'Appareil photo & Scanner', desc: 'Prise de vue, lecture de QR Codes' },
  { value: 'biometrics', label: 'Sécurité & Biométrie', desc: 'Connexion rapide Face ID / Touch ID' },
  { value: 'offline', label: 'Mode Hors-Ligne (Offline First)', desc: 'Synchronisation automatique après coup' },
  { value: 'inapp', label: 'Paiements In-App & Mobile', desc: 'Apple Pay, Google Pay et abonnements intégrés' },
  { value: 'ai_mobile', label: 'Fonctionnalités IA intégrées', desc: 'Reconnaissance d\'images et assistant vocal' },
  { value: 'social', label: 'Création de compte & Messagerie', desc: 'Authentification simplifiée et chat direct' }
];

export const MOBILE_CIBLE_OPTIONS: QuoteOption[] = [
  { value: 'b2c_launch', label: 'Grand Public & Publication complète', desc: 'Cible large avec publication Apple/Google Stores gérée par nos soins.' },
  { value: 'b2b_standalone', label: 'Professionnels (B2B) & Publication autonome', desc: 'Vous gérez la publication, nous livrons les builds Flutter.' },
  { value: 'internal', label: 'Outil interne d\'entreprise', desc: 'Déploiement interne sécurisé pour vos collaborateurs.' },
  { value: 'validated', label: 'Marché validé', desc: 'Des utilisateurs sont déjà intéressés ou vous avez une communauté active.' },
  { value: 'study', label: 'Phase d\'étude de marché', desc: 'Lancement pilote en cours d\'analyse.' }
];

export const MOBILE_BUDGET_OPTIONS: QuoteOption[] = [
  { value: 'low_mobile', label: '10 000 € – 18 000 €', desc: 'MVP Mobile ciblé / Application de première version' },
  { value: 'mid_mobile', label: '18 000 € – 35 000 €', desc: 'Application iOS/Android complète + Back-office NestJS' },
  { value: 'high_mobile', label: '35 000 € – 60 000 €', desc: 'Application complexe, temps réel, offline-first, IA intégrée' },
  { value: 'enterprise_mobile', label: '+60 000 €', desc: 'Projet mobile d\'envergure entreprise' }
];

export const MOBILE_TIMEFRAME_OPTIONS: QuoteOption[] = [
  { value: 'urgent', label: 'Moins de 3 mois', desc: 'Lancement rapide' },
  { value: 'normal', label: '3 à 5 mois', desc: 'Délai idéal pour le build' },
  { value: 'flexible', label: 'En phase d\'étude', desc: 'Pas de date fixée' }
];

export const BUDGET_OPTIONS: QuoteOption[] = [
  { value: 'low', label: '1 500 € – 3 000 €', desc: 'Idéal pour un site One-page ou une présence en ligne essentielle (jusqu\'à 5 pages).' },
  { value: 'medium', label: '3 000 € – 6 000 €', desc: 'Pour un site vitrine complet, sur-mesure et structuré (6 à 15 pages ou plus).' },
  { value: 'high', label: '+6 000 €', desc: 'Pour les projets complexes nécessitant du multilingue, des intégrations métiers ou un SEO très poussé.' },
  { value: 'undecided', label: 'Je ne sais pas encore / À définir', desc: 'Nous définirons le budget idéal ensemble suite à l\'étude approfondie de mes besoins réels.' }
];

export const MATURITY_OPTIONS: QuoteOption[] = [
  { value: 'idea', label: 'Idée / Cadrage', desc: 'Le concept est défini, besoin d\'accompagnement technique.', icon: faLightbulb },
  { value: 'specs', label: 'Cahier des charges prêt', desc: 'Le besoin est rédigé et prêt à être chiffré.', icon: faListCheck },
  { value: 'dev', label: 'Refonte / Existant', desc: 'Amélioration ou réécriture complète d\'un produit en ligne.', icon: faFileText }
];

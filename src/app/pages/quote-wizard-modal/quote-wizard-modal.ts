import { Component, inject, OnInit, OnDestroy, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuoteService } from '../../core/services/quote';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faArrowLeft, 
  faArrowRight, 
  faCheck, 
  faTimes, 
  faLaptopCode, 
  faMobileScreenButton, 
  faPaintBrush, 
  faRocket, 
  faLightbulb, 
  faListCheck, 
  faFileText,
  faEnvelope,
  faPhone,
  faUser,
  faGlobe,
  faQuestionCircle,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-quote-wizard-modal',
  standalone: true,
  templateUrl: './quote-wizard-modal.html',
  styleUrl: './quote-wizard-modal.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
})
export class QuoteWizardModal implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private quoteService = inject(QuoteService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  
  // DynamicDialogRef might not be present if the component is routed rather than opened as modal
  public dialogRef = inject(DynamicDialogRef, { optional: true });

  // FontAwesome Icons
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faCheck = faCheck;
  faTimes = faTimes;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faGlobe = faGlobe;

  quoteForm!: FormGroup;
  currentStep = 1;
  isSubmitted = false;

  projectOptions = [
    { value: 'showcase', label: 'Site Vitrine', desc: 'Présentation de votre activité, services et valeurs avec un design soigné et optimisé.', icon: faGlobe },
    { value: 'ecommerce', label: 'E-commerce / Marketplace', desc: 'Boutiques en ligne haut de gamme, architectures headless (Vendure.io) et places de marché multi-vendeurs.', icon: faShoppingCart },
    { value: 'web', label: 'Application Web / SaaS', desc: 'Plateformes d\'entreprise, portails, et architectures complexes.', icon: faLaptopCode },
    { value: 'mobile', label: 'Application Mobile', desc: 'Expérience native double iOS & Android avec Flutter.', icon: faMobileScreenButton }
  ];

  // Showcase specific options
  creationOptions = [
    { value: 'creation', label: 'Création de zéro', desc: 'Vous n\'avez pas encore de site internet existant.' },
    { value: 'refonte', label: 'Refonte de site existant', desc: 'Vous souhaitez moderniser ou restructurer votre site actuel.' }
  ];

  goalOptions = [
    { value: 'present', label: 'Présenter mon activité', desc: 'Faire connaître mes services et mon entreprise en ligne.' },
    { value: 'leads', label: 'Générer des demandes de contact', desc: 'Attirer de nouveaux prospects via des formulaires.' },
    { value: 'appointments', label: 'Générer des rendez-vous', desc: 'Permettre aux visiteurs de réserver un créneau en ligne.' },
    { value: 'brand', label: 'Renforcer mon image de marque', desc: 'Mettre en valeur le professionnalisme et la notoriété.' },
    { value: 'launch', label: 'Lancer mon activité', desc: 'Démarrer avec une présence web propre et moderne.' },
    { value: 'other', label: 'Autre objectif', desc: 'Hésitation ou besoin sur-mesure non listé.' }
  ];

  pagesOptions = [
    { value: 'one-page', label: 'One-page', desc: 'Toutes les informations essentielles sur une seule page unique.' },
    { value: 'small', label: 'Petit site (2 à 5 pages)', desc: 'Accueil, Services, À propos, Contact, etc.' },
    { value: 'medium-large', label: 'Moyen/Grand site (6 à 15 pages ou +)', desc: 'Pour une structure plus large et riche en contenu.' },
    { value: 'unknown', label: 'Je ne sais pas encore', desc: 'Besoin de conseils pour définir le nombre de pages.' }
  ];

  featuresOptions = [
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

  brandingOptions = [
    { value: 'full', label: 'J\'ai déjà tout', desc: 'Logo, charte graphique prête et contenus (textes/images) finalisés.' },
    { value: 'partial', label: 'Aide partielle', desc: 'J\'ai mon logo, mais j\'ai besoin d\'aide pour les textes et visuels.' },
    { value: 'none', label: 'Partir de zéro', desc: 'Besoin de création d\'identité visuelle, branding complet et logo.' }
  ];

  timeframeOptions = [
    { value: 'urgent', label: 'Urgent', desc: 'Mise en ligne souhaitée sous 1 mois.' },
    { value: 'normal', label: 'Normal', desc: 'Développement classique sous 1 à 2 mois.' },
    { value: 'flexible', label: 'Pas pressé', desc: 'Lancement serein sous 3 à 6 mois.' }
  ];

  // SaaS specific options
  saasMaturityOptions = [
    { value: 'idea', label: 'Idée / Concept', desc: 'J\'ai le besoin business, mais rien de rédigé/développé' },
    { value: 'specs', label: 'Cahier des charges prêt', desc: 'J\'ai les spécifications et/ou les maquettes Figma' },
    { value: 'rebuild', label: 'Refonte / Reconstruction', desc: 'J\'ai une application existante à refaire/moderniser' },
    { value: 'scaling', label: 'Scaling / Évolution', desc: 'Mon produit tourne déjà, je veux ajouter des modules complexes/IA' }
  ];

  saasUsersOptions = [
    { value: 'b2b', label: 'B2B (Entreprises)', desc: 'Outil de travail interne, CRM, ERP sur-mesure, Portail Client.' },
    { value: 'b2c', label: 'B2C (Grand Public)', desc: 'Plateforme de services, réseau social, marketplace, SaaS grand public.' },
    { value: 'hybrid', label: 'Mixte (B2B2C)', desc: 'Multi-tenancy (plusieurs organisations avec leurs propres clients).' }
  ];

  saasFeaturesOptions = [
    { value: 'auth', label: 'Authentification & Rôles avancés', desc: 'SSO, Rôles Admin/Manager/User, Multi-tenant' },
    { value: 'billing', label: 'Paiement & Abonnements', desc: 'Stripe, Gestion de factures, récurrence' },
    { value: 'dashboards', label: 'Dashboard & Data Visualization', desc: 'Tableaux de bord interactifs, exports' },
    { value: 'ai', label: 'Moteur d\'IA / Génératif', desc: 'Agent IA, analyse de documents, automatisation Genkit' },
    { value: 'realtime', label: 'Temps réel & Collaboration', desc: 'Notifications instantanées, websockets, chat' },
    { value: 'api', label: 'Connexions API / Interconnexions', desc: 'Lier le SaaS à des outils tiers : HubSpot, Zapier, ERP...' }
  ];

  saasInfraOptions = [
    { value: 'cloud', label: 'Cloud Haute Disponibilité', desc: 'Google Cloud / AWS - Scalabilité automatique' },
    { value: 'security', label: 'Normes de Sécurité Strictes', desc: 'RGPD renforcé, données de santé, chiffrement' },
    { value: 'performance', label: 'Besoin de performances extrêmes', desc: 'Chargement ultra-rapide, traitement lourd' },
    { value: 'none', label: 'Aucune idée', desc: 'Je vous laisse piloter l\'architecture.' }
  ];

  saasBudgetOptions = [
    { value: 'low_saas', label: '8 000 € – 15 000 €', desc: 'Petite Web App / MVP ciblé' },
    { value: 'mid_saas', label: '15 000 € – 30 000 €', desc: 'SaaS complet / App Métier avancée' },
    { value: 'high_saas', label: '30 000 € – 60 000 €', desc: 'Plateforme complexe / Multi-modules + IA' },
    { value: 'enterprise_saas', label: '+60 000 €', desc: 'Projet d\'envergure globale' }
  ];

  saasStartOptions = [
    { value: 'urgent', label: 'Immédiatement', desc: 'Sous 1 mois' },
    { value: 'normal', label: 'Dans les 2 à 3 mois', desc: 'Cadrage puis démarrage du build' },
    { value: 'flexible', label: 'Phase d\'étude', desc: 'Pas d\'urgence' }
  ];

  // E-commerce & Marketplace options
  ecoModelOptions = [
    { value: 'boutique', label: 'Boutique en ligne', desc: 'Je vends mes propres produits et services.' },
    { value: 'multimarques', label: 'Multi-marques', desc: 'Catalogue élargi avec plusieurs marques.' },
    { value: 'marketplace', label: 'Marketplace', desc: 'Plusieurs vendeurs avec gestion de catalogue tiers.' },
    { value: 'b2b', label: 'Plateforme B2B', desc: 'E-commerce professionnel avec grilles de prix dédiées.' },
    { value: 'omnicanal', label: 'Omnicanal', desc: 'Expérience de vente web, mobile et autres canaux.' },
    { value: 'not_sure', label: 'Je ne sais pas encore', desc: 'Besoin d\'accompagnement pour affiner le modèle.' }
  ];

  ecoCatalogOptions = [
    { value: 'launch', label: 'Lancement : Moins de 100 références', desc: 'Nouveau projet' },
    { value: 'growth', label: 'Croissance : 100 à 5 000 références', desc: 'Développement d\'activité' },
    { value: 'enterprise', label: 'Grand Catalogue : +5 000 références ou Multi-boutiques', desc: 'Besoins de synchronisation de masse' },
    { value: 'refonte', label: 'Refonte / Migration', desc: 'Nous avons déjà un site (WooCommerce, Shopify, PrestaShop...) et voulons passer sur une architecture plus performante.' }
  ];

  ecoPaymentsOptions = [
    { value: 'classic', label: 'Paiement classique & Abonnements', desc: 'CB, Apple/Google Pay, récurrence Stripe' },
    { value: 'split', label: 'Répartition automatique des paiements', desc: 'Split payment vendeurs & commissions via Stripe Connect' },
    { value: 'b2b_pay', label: 'Paiement B2B & Différé', desc: 'Facturation auto, paiement à 30 jours, virement SEPA' },
    { value: 'intl', label: 'International & Multi-devises', desc: 'Gestion automatique des devises et des règles de TVA' },
    { value: 'escrow', label: 'Système de Séquestre', desc: 'L\'argent est bloqué jusqu\'à la validation de la livraison' }
  ];

  ecoFeaturesOptions = [
    { value: 'pwa', label: 'Vitesse extrême & Mode Hors-Ligne (PWA)', desc: 'Expérience fluide type application mobile' },
    { value: 'search', label: 'Moteur de recherche intelligent (IA)', desc: 'Recherche sémantique, filtres instantanés' },
    { value: 'recs', label: 'Recommandations personnalisées par IA', desc: 'Moteur d\'Upsell / Cross-sell' },
    { value: 'erp', label: 'Synchronisation ERP / Logistique / Stocks', desc: 'Connexion en temps réel à vos entrepôts' },
    { value: 'vendor', label: 'Espace Vendeur / Merchant Dashboard', desc: 'Pour que vos vendeurs gèrent leurs produits et retraits' }
  ];

  ecoBudgetOptions = [
    { value: 'low_eco', label: '8 000 € – 15 000 €', desc: 'E-commerce Headless ciblé / MVP Marketplace' },
    { value: 'mid_eco', label: '15 000 € – 30 000 €', desc: 'Marketplace complète ou E-commerce Headless multi-modules' },
    { value: 'high_eco', label: '30 000 € – 60 000 €', desc: 'Plateforme transactionnelle d\'envergure, B2B complexe' },
    { value: 'enterprise_eco', label: '+60 000 €', desc: 'Projet d\'architecture globale' }
  ];

  ecoTimeframeOptions = [
    { value: 'urgent', label: 'Urgent', desc: 'Sous 2 mois' },
    { value: 'normal', label: 'Normal', desc: '3 à 5 mois' },
    { value: 'flexible', label: 'Phase de cadrage', desc: 'Pas de date fixée' }
  ];

  // Mobile (Flutter) options
  mobileTargetsOptions = [
    { value: 'both', label: 'iOS (App Store) & Android (Google Play)', desc: 'Lancement simultané sur les deux stores grâce à notre architecture Flutter' },
    { value: 'ios', label: 'iOS uniquement', desc: 'Lancement exclusif iPhone et iPad.' },
    { value: 'android', label: 'Android uniquement', desc: 'Lancement exclusif terminaux Android.' },
    { value: 'digital_product', label: 'Un produit digital principal', desc: 'Nouvelle application autonome ou service principal.' },
    { value: 'connected', label: 'Connectée à une plateforme existante', desc: 'Extension mobile d\'un SaaS, d\'un e-commerce ou outil interne métier.' }
  ];

  mobileBackendOptions = [
    { value: 'full_create', label: 'À créer entièrement', desc: 'Développer l\'application mobile Flutter ET le Back-End / API (NestJS + Base de données).' },
    { value: 'existing_api', label: 'Backend existant', desc: 'J\'ai déjà des API web prêtes, il faut développer l\'application Flutter et la connecter.' },
    { value: 'rebuild_app', label: 'Refonte complète', desc: 'J\'ai une application existante à reconstruire sur une technologie moderne.' },
    { value: 'idea_design', label: 'Idée / Maquettes prêtes', desc: 'Le concept est structuré ou des maquettes UX sont déjà prêtes.' }
  ];

  mobileFeaturesOptions = [
    { value: 'push', label: 'Notifications Push', desc: 'Réengagement avec des alertes ciblées et temps réel' },
    { value: 'gps', label: 'Géolocalisation & Cartographie', desc: 'GPS, calcul d\'itinéraires et lieux proches' },
    { value: 'camera', label: 'Appareil photo & Scanner', desc: 'Prise de vue, lecture de QR Codes' },
    { value: 'biometrics', label: 'Sécurité & Biométrie', desc: 'Connexion rapide Face ID / Touch ID' },
    { value: 'offline', label: 'Mode Hors-Ligne (Offline First)', desc: 'Synchronisation automatique après coup' },
    { value: 'inapp', label: 'Paiements In-App & Mobile', desc: 'Apple Pay, Google Pay et abonnements intégrés' },
    { value: 'ai_mobile', label: 'Fonctionnalités IA intégrées', desc: 'Reconnaissance d\'images et assistant vocal' },
    { value: 'social', label: 'Création de compte & Messagerie', desc: 'Authentification simplifiée et chat direct' }
  ];

  mobileCibleOptions = [
    { value: 'b2c_launch', label: 'Grand Public & Publication complète', desc: 'Cible large avec publication Apple/Google Stores gérée par nos soins.' },
    { value: 'b2b_standalone', label: 'Professionnels (B2B) & Publication autonome', desc: 'Vous gérez la publication, nous livrons les builds Flutter.' },
    { value: 'internal', label: 'Outil interne d\'entreprise', desc: 'Déploiement interne sécurisé pour vos collaborateurs.' },
    { value: 'validated', label: 'Marché validé', desc: 'Des utilisateurs sont déjà intéressés ou vous avez une communauté active.' },
    { value: 'study', label: 'Phase d\'étude de marché', desc: 'Lancement pilote en cours d\'analyse.' }
  ];

  mobileBudgetOptions = [
    { value: 'low_mobile', label: '10 000 € – 18 000 €', desc: 'MVP Mobile ciblé / Application de première version' },
    { value: 'mid_mobile', label: '18 000 € – 35 000 €', desc: 'Application iOS/Android complète + Back-office NestJS' },
    { value: 'high_mobile', label: '35 000 € – 60 000 €', desc: 'Application complexe, temps réel, offline-first, IA intégrée' },
    { value: 'enterprise_mobile', label: '+60 000 €', desc: 'Projet mobile d\'envergure entreprise' }
  ];

  mobileTimeframeOptions = [
    { value: 'urgent', label: 'Moins de 3 mois', desc: 'Lancement rapide' },
    { value: 'normal', label: '3 à 5 mois', desc: 'Délai idéal pour le build' },
    { value: 'flexible', label: 'En phase d\'étude', desc: 'Pas de date fixée' }
  ];

  // Inactive / Default fallback options
  budgetOptions = [
    { value: 'low', label: '< 10 000 €', desc: 'Pour les lancements de produits simples ou MVP.' },
    { value: 'medium', label: '10 000 € - 30 000 €', desc: 'Pour les applications sur-mesure à intégration moyenne.' },
    { value: 'high', label: '30 000 € - 100 000 €', desc: 'Pour les plateformes scalables et systèmes robustes.' },
    { value: 'enterprise', label: '> 100 000 €', desc: 'Pour les projets à grande échelle ou de niveau enterprise.' }
  ];

  maturityOptions = [
    { value: 'idea', label: 'Idée / Cadrage', desc: 'Le concept est défini, besoin d\'accompagnement technique.', icon: faLightbulb },
    { value: 'specs', label: 'Cahier des charges prêt', desc: 'Le besoin est rédigé et prêt à être chiffré.', icon: faListCheck },
    { value: 'dev', label: 'Refonte / Existant', desc: 'Amélioration ou réécriture complète d\'un produit en ligne.', icon: faFileText }
  ];

  constructor() { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    this.quoteForm = this.fb.group({
      projectType: ['', Validators.required],
      
      // Showcase path
      creationOrRefonte: [''],
      oldUrl: [''],
      mainGoals: [[]],
      pagesCount: [''],
      features: [[]],
      brandingState: [''],
      timeframe: [''],

      // SaaS path
      saasMaturity: [''],
      saasUsers: [''],
      saasFeatures: [[]],
      saasInfraSec: [''],
      saasBudget: [''],
      saasStartDelay: [''],
      
      // E-commerce / Marketplace path
      ecoModel: [''],
      ecoCatalog: [''],
      ecoPayments: [[]],
      ecoFeatures: [[]],
      ecoBudget: [''],
      ecoTimeframe: [''],

      // Mobile path
      mobileTargets: [''],
      mobileBackend: [''],
      mobileFeatures: [[]],
      mobileCible: [''],
      mobileBudget: [''],
      mobileTimeframe: [''],

      // Common contact fields & Fallback
      firstName: [''],
      lastName: [''],
      ecoCompany: [''],
      maturity: [''],
      budget: [''],
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
    this.updateProgressSteps();
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  get projectType() { return this.quoteForm?.get('projectType'); }
  get budget() { return this.quoteForm?.get('budget'); }
  get maturity() { return this.quoteForm?.get('maturity'); }
  get name() { return this.quoteForm?.get('name'); }
  get email() { return this.quoteForm?.get('email'); }
  get phone() { return this.quoteForm?.get('phone'); }
  get message() { return this.quoteForm?.get('message'); }

  progressSteps: number[] = [];

  get totalSteps(): number {
    const pType = this.projectType?.value;
    if (pType === 'showcase') return 9;
    if (pType === 'web') return 8;
    if (pType === 'ecommerce') return 8;
    if (pType === 'mobile') return 8;
    return 4;
  }

  get totalProgressSteps(): number {
    return this.totalSteps - 1;
  }

  updateProgressSteps() {
    this.progressSteps = Array.from({ length: this.totalProgressSteps }, (_, i) => i + 1);
  }

  selectOption(controlName: string, value: string) {
    this.quoteForm?.get(controlName)?.setValue(value);
    this.quoteForm?.get(controlName)?.markAsDirty();
    if (controlName === 'projectType') {
      this.updateProgressSteps();
    }
  }

  toggleFeature(value: string) {
    const current = this.quoteForm.get('features')?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get('features')?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get('features')?.setValue([...current, value]);
    }
    this.quoteForm.get('features')?.markAsDirty();
  }

  isFeatureSelected(value: string): boolean {
    return (this.quoteForm.get('features')?.value || []).includes(value);
  }

  toggleGoal(value: string) {
    const current = this.quoteForm.get('mainGoals')?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get('mainGoals')?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get('mainGoals')?.setValue([...current, value]);
    }
    this.quoteForm.get('mainGoals')?.markAsDirty();
  }

  isGoalSelected(value: string): boolean {
    return (this.quoteForm.get('mainGoals')?.value || []).includes(value);
  }

  toggleSaasFeature(value: string) {
    const current = this.quoteForm.get('saasFeatures')?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get('saasFeatures')?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get('saasFeatures')?.setValue([...current, value]);
    }
    this.quoteForm.get('saasFeatures')?.markAsDirty();
  }

  isSaasFeatureSelected(value: string): boolean {
    return (this.quoteForm.get('saasFeatures')?.value || []).includes(value);
  }

  toggleEcoPayment(value: string) {
    const current = this.quoteForm.get('ecoPayments')?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get('ecoPayments')?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get('ecoPayments')?.setValue([...current, value]);
    }
    this.quoteForm.get('ecoPayments')?.markAsDirty();
  }

  isEcoPaymentSelected(value: string): boolean {
    return (this.quoteForm.get('ecoPayments')?.value || []).includes(value);
  }

  toggleEcoFeature(value: string) {
    const current = this.quoteForm.get('ecoFeatures')?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get('ecoFeatures')?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get('ecoFeatures')?.setValue([...current, value]);
    }
    this.quoteForm.get('ecoFeatures')?.markAsDirty();
  }

  isEcoFeatureSelected(value: string): boolean {
    return (this.quoteForm.get('ecoFeatures')?.value || []).includes(value);
  }

  toggleMobileFeature(value: string) {
    const current = this.quoteForm.get('mobileFeatures')?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get('mobileFeatures')?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get('mobileFeatures')?.setValue([...current, value]);
    }
    this.quoteForm.get('mobileFeatures')?.markAsDirty();
  }

  isMobileFeatureSelected(value: string): boolean {
    return (this.quoteForm.get('mobileFeatures')?.value || []).includes(value);
  }

  isStepValid(step: number): boolean {
    const pType = this.projectType?.value;

    if (pType === 'showcase') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('creationOrRefonte')?.value;
      if (step === 3) return (this.quoteForm.get('mainGoals')?.value || []).length > 0;
      if (step === 4) return !!this.quoteForm.get('pagesCount')?.value;
      if (step === 5) return true; // optional checklist
      if (step === 6) return !!this.quoteForm.get('brandingState')?.value;
      if (step === 7) return !!this.budget?.value;
      if (step === 8) return !!this.quoteForm.get('timeframe')?.value;
      if (step === 9) return !!this.name?.value && !!this.email?.valid && !!this.message?.valid;
    } else if (pType === 'web') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('saasMaturity')?.value;
      if (step === 3) return !!this.quoteForm.get('saasUsers')?.value;
      if (step === 4) return (this.quoteForm.get('saasFeatures')?.value || []).length > 0;
      if (step === 5) return !!this.quoteForm.get('saasInfraSec')?.value;
      if (step === 6) return !!this.quoteForm.get('saasBudget')?.value;
      if (step === 7) return !!this.quoteForm.get('saasStartDelay')?.value;
      if (step === 8) return !!this.quoteForm.get('lastName')?.value && !!this.quoteForm.get('firstName')?.value && !!this.email?.valid && !!this.message?.valid;
    } else if (pType === 'ecommerce') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('ecoModel')?.value;
      if (step === 3) return !!this.quoteForm.get('ecoCatalog')?.value;
      if (step === 4) return true; // optional payments checklist
      if (step === 5) return true; // optional features checklist
      if (step === 6) return !!this.quoteForm.get('ecoBudget')?.value;
      if (step === 7) return !!this.quoteForm.get('ecoTimeframe')?.value;
      if (step === 8) return !!this.quoteForm.get('lastName')?.value && !!this.quoteForm.get('firstName')?.value && !!this.email?.valid;
    } else if (pType === 'mobile') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm?.get('mobileTargets')?.value;
      if (step === 3) return !!this.quoteForm?.get('mobileBackend')?.value;
      if (step === 4) return true; // optional features checklist
      if (step === 5) return !!this.quoteForm?.get('mobileCible')?.value;
      if (step === 6) return !!this.quoteForm?.get('mobileBudget')?.value;
      if (step === 7) return !!this.quoteForm?.get('mobileTimeframe')?.value;
      if (step === 8) return !!this.quoteForm?.get('lastName')?.value && !!this.quoteForm?.get('firstName')?.value && !!this.email?.valid;
    } else {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.budget?.value;
      if (step === 3) return !!this.maturity?.value;
      if (step === 4) return !!this.name?.value && !!this.email?.valid && !!this.message?.valid;
    }
    return false;
  }

  nextStep() {
    if (this.currentStep < this.totalSteps && this.isStepValid(this.currentStep)) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/']);
    }
  }

  bookCall() {
    window.open('https://calendly.com/evolia-tech', '_blank');
  }

  bookEcommerceCall() {
    window.open('https://calendly.com/evolia-tech/ecommerce', '_blank');
  }

  bookMobileCall() {
    window.open('https://calendly.com/evolia-tech/mobile-diagnostic', '_blank');
  }

  onSubmit() {
    let allStepsValid = true;
    for (let i = 1; i <= this.totalSteps; i++) {
      if (!this.isStepValid(i)) {
        allStepsValid = false;
        break;
      }
    }

    if (allStepsValid) {
      console.log('Devis Soumis:', this.quoteForm.value);
      this.isSubmitted = true;
      
      // Auto-close only for non-complex paths
      if (this.projectType?.value !== 'web' && this.projectType?.value !== 'ecommerce' && this.projectType?.value !== 'mobile') {
        setTimeout(() => {
          this.close();
        }, 3500);
      }
    } else {
      Object.keys(this.quoteForm.controls).forEach(key => {
        this.quoteForm.get(key)?.markAsTouched();
      });
    }
  }
}

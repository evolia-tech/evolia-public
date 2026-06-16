import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-quote-wizard',
  standalone: true,
  templateUrl: './page-quote-wizard.html',
  styleUrl: './page-quote-wizard.scss',
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
})
export class PageQuoteWizard implements OnInit {
  private fb = inject(FormBuilder);
  private quoteService = inject(QuoteService);
  private router = inject(Router);
  
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

  quoteForm!: FormGroup;
  currentStep = 1;
  totalSteps = 4;
  isSubmitted = false;

  projectOptions = [
    { value: 'web', label: 'Application Web / SaaS', desc: 'Plateformes d\'entreprise, portails, et architectures complexes.', icon: faLaptopCode },
    { value: 'mobile', label: 'Application Mobile', desc: 'Expérience native double iOS & Android avec Flutter.', icon: faMobileScreenButton },
    { value: 'design', label: 'UI/UX Design', desc: 'Recherche utilisateurs, wireframes et prototypes Figma.', icon: faPaintBrush },
    { value: 'brand', label: 'Identité & Logo', desc: 'Chartes graphiques, logotypes et image de marque.', icon: faRocket }
  ];

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

  constructor() {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      projectType: ['', Validators.required],
      budget: ['', Validators.required],
      maturity: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  get projectType() { return this.quoteForm.get('projectType'); }
  get budget() { return this.quoteForm.get('budget'); }
  get maturity() { return this.quoteForm.get('maturity'); }
  get name() { return this.quoteForm.get('name'); }
  get email() { return this.quoteForm.get('email'); }
  get phone() { return this.quoteForm.get('phone'); }
  get message() { return this.quoteForm.get('message'); }

  selectOption(controlName: string, value: string) {
    this.quoteForm.get(controlName)?.setValue(value);
    this.quoteForm.get(controlName)?.markAsDirty();
  }

  isStepValid(step: number): boolean {
    if (step === 1) return !!this.projectType?.value;
    if (step === 2) return !!this.budget?.value;
    if (step === 3) return !!this.maturity?.value;
    if (step === 4) return !!this.name?.valid && !!this.email?.valid && !!this.message?.valid;
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

  onSubmit() {
    if (this.quoteForm.valid) {
      console.log('Devis Soumis:', this.quoteForm.value);
      this.isSubmitted = true;
      
      setTimeout(() => {
        this.close();
      }, 3500);
    } else {
      Object.keys(this.quoteForm.controls).forEach(key => {
        this.quoteForm.get(key)?.markAsTouched();
      });
    }
  }
}

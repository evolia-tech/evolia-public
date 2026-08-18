import { inject, Injectable, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmailService } from '../../../core/services/email.service';

@Injectable()
export class QuoteWizardStateService {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private emailService = inject(EmailService);

  // DynamicDialogRef (optional, present if opened in modal)
  public dialogRef = inject(DynamicDialogRef, { optional: true });

  quoteForm: FormGroup = this.fb.group({
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

  // Signals
  currentStep = signal<number>(1);
  isSubmitted = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  isFailed = signal<boolean>(false);

  // Computed signals
  projectType = signal<string>('');

  totalSteps = computed(() => {
    const pType = this.projectType();
    if (pType === 'showcase') return 9;
    if (pType === 'web') return 8;
    if (pType === 'ecommerce') return 8;
    if (pType === 'mobile') return 8;
    return 4;
  });

  totalProgressSteps = computed(() => this.totalSteps() - 1);

  progressSteps = computed(() => {
    return Array.from({ length: this.totalProgressSteps() }, (_, i) => i + 1);
  });

  // Getters for form controls
  get budgetControl() { return this.quoteForm.get('budget'); }
  get maturityControl() { return this.quoteForm.get('maturity'); }
  get nameControl() { return this.quoteForm.get('name'); }
  get emailControl() { return this.quoteForm.get('email'); }
  get phoneControl() { return this.quoteForm.get('phone'); }
  get messageControl() { return this.quoteForm.get('message'); }

  selectOption(controlName: string, value: string) {
    this.quoteForm.get(controlName)?.setValue(value);
    this.quoteForm.get(controlName)?.markAsDirty();
    if (controlName === 'projectType') {
      this.projectType.set(value);
    }
  }

  toggleArrayOption(controlName: string, value: string) {
    const current = this.quoteForm.get(controlName)?.value || [];
    if (current.includes(value)) {
      this.quoteForm.get(controlName)?.setValue(current.filter((val: string) => val !== value));
    } else {
      this.quoteForm.get(controlName)?.setValue([...current, value]);
    }
    this.quoteForm.get(controlName)?.markAsDirty();
  }

  isArrayOptionSelected(controlName: string, value: string): boolean {
    return (this.quoteForm.get(controlName)?.value || []).includes(value);
  }

  isStepValid(step: number): boolean {
    const pType = this.projectType();

    if (pType === 'showcase') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('creationOrRefonte')?.value;
      if (step === 3) return (this.quoteForm.get('mainGoals')?.value || []).length > 0;
      if (step === 4) return !!this.quoteForm.get('pagesCount')?.value;
      if (step === 5) return true;
      if (step === 6) return !!this.quoteForm.get('brandingState')?.value;
      if (step === 7) return !!this.budgetControl?.value;
      if (step === 8) return !!this.quoteForm.get('timeframe')?.value;
      if (step === 9) return !!this.nameControl?.value && !!this.emailControl?.valid && !!this.messageControl?.valid;
    } else if (pType === 'web') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('saasMaturity')?.value;
      if (step === 3) return !!this.quoteForm.get('saasUsers')?.value;
      if (step === 4) return (this.quoteForm.get('saasFeatures')?.value || []).length > 0;
      if (step === 5) return !!this.quoteForm.get('saasInfraSec')?.value;
      if (step === 6) return !!this.quoteForm.get('saasBudget')?.value;
      if (step === 7) return !!this.quoteForm.get('saasStartDelay')?.value;
      if (step === 8) return !!this.quoteForm.get('lastName')?.value && !!this.quoteForm.get('firstName')?.value && !!this.emailControl?.valid && !!this.messageControl?.valid;
    } else if (pType === 'ecommerce') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('ecoModel')?.value;
      if (step === 3) return !!this.quoteForm.get('ecoCatalog')?.value;
      if (step === 4) return true;
      if (step === 5) return true;
      if (step === 6) return !!this.quoteForm.get('ecoBudget')?.value;
      if (step === 7) return !!this.quoteForm.get('ecoTimeframe')?.value;
      if (step === 8) return !!this.quoteForm.get('lastName')?.value && !!this.quoteForm.get('firstName')?.value && !!this.emailControl?.valid && !!this.messageControl?.valid;
    } else if (pType === 'mobile') {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.quoteForm.get('mobileTargets')?.value;
      if (step === 3) return !!this.quoteForm.get('mobileBackend')?.value;
      if (step === 4) return true;
      if (step === 5) return !!this.quoteForm.get('mobileCible')?.value;
      if (step === 6) return !!this.quoteForm.get('mobileBudget')?.value;
      if (step === 7) return !!this.quoteForm.get('mobileTimeframe')?.value;
      if (step === 8) return !!this.quoteForm.get('lastName')?.value && !!this.quoteForm.get('firstName')?.value && !!this.emailControl?.valid && !!this.messageControl?.valid;
    } else {
      if (step === 1) return !!pType;
      if (step === 2) return !!this.budgetControl?.value;
      if (step === 3) return !!this.maturityControl?.value;
      if (step === 4) return !!this.nameControl?.value && !!this.emailControl?.valid && !!this.messageControl?.valid;
    }
    return false;
  }

  private scrollToTop() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      const dialogContent = document.querySelector('.p-dialog-content');
      if (dialogContent) {
        dialogContent.scrollTop = 0;
      }
      const quoteWizard = document.querySelector('.quote-wizard');
      if (quoteWizard) {
        quoteWizard.scrollTop = 0;
      }
    }, 0);
  }

  nextStep() {
    if (this.currentStep() < this.totalSteps() && this.isStepValid(this.currentStep())) {
      this.currentStep.update(s => s + 1);
      this.scrollToTop();
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
      this.scrollToTop();
    }
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/']);
    }
  }

  bookCall(url: string = 'https://calendly.com/evolia-tech') {
    window.open(url, '_blank');
  }

  onSubmit() {
    let allStepsValid = true;
    for (let i = 1; i <= this.totalSteps(); i++) {
      if (!this.isStepValid(i)) {
        allStepsValid = false;
        break;
      }
    }

    if (allStepsValid) {
      this.isLoading.set(true);
      this.isFailed.set(false);
      this.isSubmitted.set(false);

      this.emailService.sendQuote(this.quoteForm.value).subscribe({
        next: (response: any) => {
          console.log('Devis Soumis avec succès:', response);
          this.isLoading.set(false);
          this.isSubmitted.set(true);
        },
        error: (error: any) => {
          console.error('Erreur lors de la soumission du devis:', error);
          this.isLoading.set(false);
          this.isFailed.set(true);
        }
      });
    } else {
      Object.keys(this.quoteForm.controls).forEach(key => {
        this.quoteForm.get(key)?.markAsTouched();
      });
    }
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../shared/pipes/to-fa-icon-pipe';
import { GtmService } from '../../core/services/gtm';
import { EmailService } from '../../core/services/email.service';

export interface PopupState {
  isOpen: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
  emailContact: string;
}

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.html',
  styleUrl: './page-contact.scss',
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, ToFaIconPipe],
})
export class PageContact implements OnInit {
  private fb = inject(FormBuilder);
  private gtmService = inject(GtmService);
  private emailService = inject(EmailService);

  contactForm!: FormGroup;
  isSubmitting = false;

  popupState: PopupState = {
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
    emailContact: 'samuelm@evolia-tech.com',
  };

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[+]?[0-9\s\-()]{7,18}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  // Getters for validation messaging
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }

  onSubmit(): void {
    if (this.contactForm.invalid || this.isSubmitting) {
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    // Protection soumission unique pendant l'attente serveur
    this.isSubmitting = true;

    const payload = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
    };

    this.emailService.sendContact(payload).subscribe({
      next: () => {
        this.isSubmitting = false;

        this.gtmService.pushEvent('contact_form_submitted', {
          subject: payload.subject,
        });

        // Reset complet des données du formulaire
        this.contactForm.reset();

        // Affichage de la popup de succès
        this.popupState = {
          isOpen: true,
          type: 'success',
          title: 'Message bien reçu !',
          message:
            'Nous avons bien reçu votre message et nous vous reviendrons dans les plus brefs délais.',
          emailContact: 'samuelm@evolia-tech.com',
        };
      },
      error: (err) => {
        console.error('Contact Form Submission Error:', err);
        this.isSubmitting = false;

        // Affichage de la popup d'erreur avec option de contact direct par mail
        this.popupState = {
          isOpen: true,
          type: 'error',
          title: 'Une erreur est survenue',
          message:
            "Nous avons rencontré un problème lors de l'envoi de votre message. Vous pouvez nous contacter directement en nous écrivant à l'adresse :",
          emailContact: 'samuelm@evolia-tech.com',
        };
      },
    });
  }

  closePopup(): void {
    this.popupState.isOpen = false;
  }
}

export default PageContact;

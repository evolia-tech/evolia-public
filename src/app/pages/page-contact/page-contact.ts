import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../shared/pipes/to-fa-icon-pipe';
import { GtmService } from '../../core/services/gtm';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.html',
  styleUrl: './page-contact.scss',
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, ToFaIconPipe]
})
export class PageContact implements OnInit {
  private fb = inject(FormBuilder);
  private gtmService = inject(GtmService);

  contactForm!: FormGroup;
  isSubmitted = false;
  isSubmitting = false;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[+]?[0-9\s\-()]{7,18}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(15)]]
    });
  }

  // Getters for validation messaging
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      console.log('Contact Form Submitted:', this.contactForm.value);

      // Simulate API submit
      setTimeout(() => {
        this.gtmService.pushEvent('contact_form_submitted', {
          subject: this.contactForm.value.subject,
        });

        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();

        // Reset success state after a delay
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }, 1500);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}

export default PageContact;

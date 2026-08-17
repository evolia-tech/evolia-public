import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QuoteWizardModal } from '../../pages/quote-wizard-modal/quote-wizard-modal';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private router = inject(Router);
  private dialogService = inject(DialogService);
  private platformId = inject(PLATFORM_ID);

  private dialogRef?: DynamicDialogRef<any> | null;

  openQuoteForm(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      this.router.navigate(['/estimation-projet']);
    } else {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      this.dialogRef = this.dialogService.open(QuoteWizardModal, {
        width: '750px',
        modal: true,
        closable: true,
        dismissableMask: true,
        showHeader: false, // Custom header handled inside the component for perfect aesthetic control
        styleClass: 'quote-dialog-modal',
      });

      this.dialogRef!.onClose.subscribe(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        this.dialogRef = undefined;
      });
    }
  }

  closeQuoteForm(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = undefined;
    }
  }
}

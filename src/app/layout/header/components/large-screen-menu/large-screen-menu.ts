import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuoteService } from '../../../../core/services/quote';

@Component({
  selector: 'app-large-screen-menu',
  templateUrl: './large-screen-menu.html',
  styleUrl: './large-screen-menu.scss',
  imports: [CommonModule, RouterModule]
})
export class LargeScreenMenu {
  public quoteService = inject(QuoteService);
}

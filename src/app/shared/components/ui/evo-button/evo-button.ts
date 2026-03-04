import { Component, input, inject, ElementRef, computed } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

// Types
export type ButtonVariant = 'solid' | 'outline';
export type ButtonPreset = 'green' | 'cream' | 'white' | 'dark'; // Correspond aux mixins

@Component({
  selector: 'app-evo-button',
  templateUrl: './evo-button.html',
  styleUrl: './evo-button.scss',
  imports: [
    CommonModule, 
    RouterModule,
    FontAwesomeModule,
    ToFaIconPipe
  ],
})
export class EvoButton {
  // --- CONTENU & NAVIGATION ---
  text = input.required<string>();
  link = input<string | null>(null);
  icon = input<string | null>(null);
  isExternal = input<boolean>(false);

  // --- STYLE : PRESETS & VARIANTES ---
  // Définit le style global (ex: primary = vert)
  preset = input<ButtonPreset>('green'); // Valeur par défaut
  variant = input<ButtonVariant>('solid');

  // --- STYLE : SURCHARGES (Custom Colors) ---
  // Si définis, ils écrasent le preset
  bgColor = input<string | null>(null);       // Couleur de fond normale
  textColor = input<string | null>(null);     // Couleur texte normale
  borderColor = input<string | null>(null);   // Couleur bordure normale
  
  hoverBgColor = input<string | null>(null);  // Couleur de fond au survol (L'effet de remplissage)
  hoverTextColor = input<string | null>(null);// Couleur texte au survol
  hoverBorderColor = input<string | null>(null); // Couleur bordure au survol

  private viewportScroller = inject(ViewportScroller);

  // --- CALCUL DES STYLES DYNAMIQUES ---
  // On génère les variables CSS seulement si les inputs sont présents
  dynamicStyles = computed(() => {
    const styles: Record<string, string> = {};

    if (this.bgColor()) styles['--btn-bg'] = this.bgColor()!;
    if (this.textColor()) styles['--btn-color'] = this.textColor()!;
    if (this.borderColor()) styles['--btn-border'] = this.borderColor()!;
    
    if (this.hoverBgColor()) styles['--btn-hover-bg'] = this.hoverBgColor()!;
    if (this.hoverTextColor()) styles['--btn-hover-color'] = this.hoverTextColor()!;
    if (this.hoverBorderColor()) styles['--btn-hover-border'] = this.hoverBorderColor()!;

    return styles;
  });

  // --- LOGIQUE DIRECTIONAL HOVER ---
  onMouseEnter(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  onMouseLeave(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  handleClick(e: Event) {
    if (this.link()?.startsWith('#')) {
      e.preventDefault();
      this.viewportScroller.scrollToAnchor(this.link()!.substring(1));
    }
  }
}
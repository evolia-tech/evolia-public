import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-option-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './option-card.html',
  styleUrl: './option-card.scss',
})
export class OptionCardComponent {
  label = input.required<string>();
  desc = input.required<string>();
  icon = input<IconDefinition | undefined>(undefined);
  selected = input<boolean>(false);
  horizontal = input<boolean>(false);

  select = output<void>();

  faCheck = faCheck;
}

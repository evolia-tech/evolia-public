import { Component, input } from '@angular/core';
import { TeamMember } from '../../../../shared/models/team-member';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
  imports: [
    FontAwesomeModule,
    ToFaIconPipe
  ],
})
export class TeamCard {
  member = input.required<TeamMember>();
}

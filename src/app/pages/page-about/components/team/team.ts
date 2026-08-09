import { Component, inject } from '@angular/core';
import { Team as TeamService } from '../../../../core/services/team';
import { TeamCard } from '../team-item/team-card';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
  imports: [
    EvoButton,
    TeamCard
  ]
})

export class Team {
  private teamService = inject(TeamService);
  teamMembers = this.teamService.getTeam();
}

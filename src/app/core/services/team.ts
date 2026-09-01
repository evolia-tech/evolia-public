import { Injectable } from '@angular/core';
import { TeamMember } from '../../shared/models/team-member';

@Injectable({
  providedIn: 'root',
})
export class Team {
  private _team: TeamMember[] = [
    {
      id: 1,
      firstName: 'Samuel', // Mis à jour selon ton profil
      lastName: 'Mandeng',
      role: 'CEO & Lead Fullstack',
      // Pro: Homme d'affaires moderne / Tech
      photoPro:
        '/images/team/samuel.webp',
      // Hobby: Guitare
      photoHobby:
        '/images/team/samuel.webp',
      hobbyLabel: 'Guitariste 🎸',
      mainSkills: ['Angular', 'NestJS', 'Architecture'],
      socials: [
        { platform: 'LinkedIn', icon: 'faLinkedin', url: '#' },
        { platform: 'GitHub', icon: 'faGithub', url: '#' },
        { platform: 'Twitter', icon: 'faTwitter', url: '#' },
      ],
    },
    {
      id: 2,
      firstName: 'Steve',
      lastName: 'Bekou',
      role: 'Expert Backend Developer (Nestjs)',
      // Pro: Développeur backend sérieux
      photoPro:
        '/images/team/steve.webp',
      // Hobby: Exploration / Nature
      photoHobby:
        '/images/team/steve.webp',
      hobbyLabel: 'Explorateur 🔍',
      mainSkills: ['Node.js', 'PostgreSQL', 'Microservices'],
      socials: [{ platform: 'LinkedIn', icon: 'faLinkedin', url: 'https://www.linkedin.com/in/steve-bekou/' }],
    },
    {
      id: 3,
      firstName: 'Chris',
      lastName: '',
      role: 'Mobile Developer',
      // Pro: Développeur mobile
      photoPro:
        '/images/team/chris.webp',
      // Hobby: Gaming
      photoHobby: '/images/team/chris.webp',
      hobbyLabel: 'Gamer 🎮',
      mainSkills: ['Flutter', 'Dart', 'Clean Arch'],
      socials: [{ platform: 'GitHub', icon: 'faGithub', url: '#' }],
    },
    {
      id: 4,
      firstName: 'Bisso',
      lastName: 'Na Bisso',
      role: 'UI/UX Designer',
      // Pro: Créatif / Designer
      photoPro: '/images/team/bisso.webp',
      // Hobby: Boxe
      photoHobby: '/images/team/bisso.webp',
      hobbyLabel: 'Boxeur 🥊',
      mainSkills: ['Figma', 'Prototyping', 'Design System'],
      socials: [
        { platform: 'Instagram', icon: 'faInstagram', url: '#' },
        { platform: 'Portfolio', icon: 'faGlobe', url: '#' },
      ],
    },
    {
      id: 5,
      firstName: 'George',
      lastName: 'Abougou',
      role: 'Coordinateur des opérations',
      // Pro: Professionnel administratif
      photoPro: '/images/team/george.webp',      // Hobby: Football
      photoHobby: '/images/team/george.webp',
      hobbyLabel: 'Footballeur ⚽',
      mainSkills: ['Gestion', 'Communication', 'Agile'],
      socials: [
        { platform: 'LinkedIn', icon: 'faLinkedin', url: 'https://www.linkedin.com/in/george-abougou-abeng-1b51263a9' },
        { platform: 'Email', icon: 'faEnvelope', url: 'mailto:...' },
      ],
    },
  ];

  getTeam() {
    return this._team;
  }
}

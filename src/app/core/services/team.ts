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
        '/images/team/samuel.jpeg',
      // Hobby: Guitare
      photoHobby:
        '/images/team/samuel.jpeg',
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
        '/images/team/steve.jpeg',
      // Hobby: Exploration / Nature
      photoHobby:
        '/images/team/steve.jpeg',
      hobbyLabel: 'Explorateur 🔍',
      mainSkills: ['Node.js', 'PostgreSQL', 'Microservices'],
      socials: [{ platform: 'LinkedIn', icon: 'faLinkedin', url: '#' }],
    },
    {
      id: 3,
      firstName: 'Chris',
      lastName: '',
      role: 'Mobile Developer',
      // Pro: Développeur mobile
      photoPro:
        '/images/team/chris.jpeg',
      // Hobby: Gaming
      photoHobby: '/images/team/chris.jpeg',
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
      photoPro: '/images/team/bisso.jpeg',
      // Hobby: Boxe
      photoHobby: '/images/team/bisso.jpeg',
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
      role: 'Assistant de Direction',
      // Pro: Professionnel administratif
      photoPro: '/images/team/george.jpeg',      // Hobby: Football
      photoHobby: '/images/team/george.jpeg',
      hobbyLabel: 'Footballeur ⚽',
      mainSkills: ['Gestion', 'Communication', 'Agile'],
      socials: [
        { platform: 'LinkedIn', icon: 'faLinkedin', url: '#' },
        { platform: 'Email', icon: 'faEnvelope', url: 'mailto:...' },
      ],
    },
  ];

  getTeam() {
    return this._team;
  }
}

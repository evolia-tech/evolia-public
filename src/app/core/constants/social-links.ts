export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'faLinkedin',
    ariaLabel: 'LinkedIn'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'faFacebook',
    ariaLabel: 'Facebook'
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com',
    icon: 'faTwitter',
    ariaLabel: 'Twitter'
  }
];

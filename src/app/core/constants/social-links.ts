export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/evolia-tech',
    icon: 'faLinkedin',
    ariaLabel: 'LinkedIn'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61579578880270',
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

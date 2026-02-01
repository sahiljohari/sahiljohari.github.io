// Site metadata and owner information
export interface SiteConfig {
  title: string;
  description: string;
  themeColor: string;
  owner: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
  };
  footer: {
    builtWith: string;
    copyright: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'Sahil Johari | Portfolio',
  description: 'Software Engineer portfolio - Building pixel-perfect, scalable web applications',
  themeColor: '#6366f1',
  owner: {
    firstName: 'Sahil',
    lastName: 'Johari',
    fullName: 'Sahil Johari',
    email: 'sahiljohari12@gmail.com',
  },
  footer: {
    builtWith: 'Built with ❤️ using <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a>',
    copyright: '© {year} Sahil Johari. All rights reserved.',
  },
};

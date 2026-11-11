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
  pages: {
    home: {
      title: string;
    };
    work: {
      title: string;
      description: string;
    };
    portfolio: {
      title: string;
      description: string;
    };
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
  pages: {
    home: {
      title: 'Sahil Johari | Software Engineer',
    },
    work: {
      title: 'Timeline | Sahil Johari',
      description: 'My professional journey and career milestones',
    },
    portfolio: {
      title: 'Portfolio | Sahil Johari',
      description: 'Personal projects and side work',
    },
  },
  footer: {
    builtWith: 'Built with ❤️ using <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a>',
    copyright: '© {year} Sahil Johari. All rights reserved.',
  },
};

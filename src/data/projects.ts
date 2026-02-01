// Portfolio projects content
export interface Project {
  name: string;
  summary: string;
  github?: string;
  demo?: string;
  thumbnail: string;
}

export interface ProjectsContent {
  title: string;
  quote: string;
  quoteAuthor: string;
  projects: Project[];
}

export const projectsContent: ProjectsContent = {
  title: 'My spare time looks like...',
  quote: 'Only those who risk going too far can possibly find out how far one can go.',
  quoteAuthor: 'T.S Eliot',
  projects: [
    {
      name: 'ExpiryMinder',
      summary:
        'A basic organizing and tracking web app that helps you keep track of expiration of documents like travel, finance, business, etc.',
      github: 'https://github.com/sahiljohari/document-organizer',
      demo: 'https://document-organizer.vercel.app/',
      thumbnail: '/assets/images/expiryminder.PNG',
    },
    {
      name: 'Visualize Sorting Algorithms',
      summary:
        'A collection of p5.js sketches that simulate various sorting algorithms on randomly generated numbers.',
      demo: 'https://editor.p5js.org/sahiljohari/collections/1O2870r00',
      thumbnail: '/assets/images/sorting.png',
    },
    {
      name: 'Messenger App',
      summary:
        'A simple chat application which allows multiple users to chat in a shared space. The application uses React and Typescript in the front end, and Node paired with Socket-IO library for the server operations.',
      github: 'https://github.com/sahiljohari/messenger-app',
      thumbnail: '/assets/images/messenger-app.png',
    },
    {
      name: 'G.I.S.M.O',
      summary:
        'GISMO simulates a battlefield in which two rival forces compete to win. Using neuro-evolution, the tanks in the game determine their movement and direction of firing, evolving gradually to perform their tasks.',
      github: 'https://github.com/sahiljohari/gismo',
      thumbnail: '/assets/images/gismo.jpg',
    },
    {
      name: 'Snake AI',
      summary:
        'The classic Snake game played by an AI agent which uses Deep Reinforcement Learning technique to learn and play the game.',
      github: 'https://github.com/sahiljohari/thisthinglearns',
      thumbnail: '/assets/images/snake.gif',
    },
    {
      name: 'Wireless Sensor Network',
      summary:
        'An algorithm that models ad-hoc networks of wireless sensors of varying scale across a variety of geographic areas by partitioning randomly generated geometric graphs into bipartite subgraphs.',
      github: 'https://github.com/sahiljohari/wsn',
      thumbnail: '/assets/images/wsn.png',
    },
    {
      name: 'Portfolio Website v1',
      summary: 'Static site written in ReactJS to present myself to the internet.',
      github: 'https://github.com/sahiljohari/portfolio-website',
      thumbnail: '/assets/images/portfolio.png',
    },
  ],
};

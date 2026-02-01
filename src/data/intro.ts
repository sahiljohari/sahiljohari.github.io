// Hero/Intro section content
export interface IntroContent {
  greeting: string;
  name: string;
  title: string;
  description: string;
  resumeUrl: string;
  illustration: string;
}

export const introContent: IntroContent = {
  greeting: "Hi, I'm",
  name: 'Sahil.',
  title: 'Software Engineer',
  description:
    'I am a <span class="highlight">Software Engineer</span> by profession and an artist by passion. Known for my sharp attention to detail and simplification skills, I love to bring astonishing ideas to life. You are looking at one right now!',
  resumeUrl: '/assets/resume.pdf',
  illustration: '/assets/svgs/intro-page-svg.svg',
};

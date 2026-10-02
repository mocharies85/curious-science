import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Topics',
      links: [
        {
          text: 'Cosmos & Astrophysics',
          href: getPermalink('cosmos', 'category'),
        },
        {
          text: 'Quantum & Fundamental Physics',
          href: getPermalink('physics', 'category'),
        },
        {
          text: 'Deep Earth & Abyssal Oceans',
          href: getPermalink('earth', 'category'),
        },
        {
          text: 'Mind, Consciousness & Evolution',
          href: getPermalink('mind', 'category'),
        },
        {
          text: 'Scientific Paradoxes',
          href: getPermalink('anomalies', 'category'),
        },
        {
          text: 'Future Horizons',
          href: getPermalink('future', 'category'),
        },
      ],
    },
    {
      text: 'Articles',
      href: getBlogPermalink(),
    },
    {
      text: 'Popular',
      href: getPermalink('/popular'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Explore', href: getBlogPermalink() }],
};

export const footerData = {
  links: [
    {
      title: 'Topics',
      links: [
        { text: 'Cosmos & Astrophysics', href: getPermalink('cosmos', 'category') },
        { text: 'Quantum & Fundamental Physics', href: getPermalink('physics', 'category') },
        { text: 'Deep Earth & Abyssal Oceans', href: getPermalink('earth', 'category') },
        { text: 'Mind, Consciousness & Evolution', href: getPermalink('mind', 'category') },
        { text: 'Scientific Paradoxes', href: getPermalink('anomalies', 'category') },
        { text: 'Future Horizons', href: getPermalink('future', 'category') },
      ],
    },
    {
      title: 'Publications',
      links: [
        { text: 'All Articles', href: getBlogPermalink() },
        { text: 'Latest Discoveries', href: getBlogPermalink() },
        { text: 'RSS Feed', href: getAsset('/rss.xml') },
      ],
    },
    {
      title: 'Curious Science',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact & Inquiries', href: getPermalink('/contact') },
        { text: 'Terms of Use', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mocharies85/curious-science' },
  ],
  footNote: `
    © 2026 <a class="text-blue-600 underline dark:text-muted" href="https://curious-science.pages.dev">Curious Science</a> · All rights reserved. Exploring the boundaries of human knowledge.
  `,
};
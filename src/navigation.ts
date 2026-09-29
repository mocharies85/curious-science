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
          text: 'Quantum & Physics',
          href: getPermalink('physics', 'category'),
        },
        {
          text: 'Earth & Deep Sea',
          href: getPermalink('earth', 'category'),
        },
        {
          text: 'Mind & Evolution',
          href: getPermalink('mind', 'category'),
        },
        {
          text: 'Scientific Anomalies',
          href: getPermalink('anomalies', 'category'),
        },
      ],
    },
    {
      text: 'Articles',
      href: getBlogPermalink(),
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
        { text: 'Quantum & Physics', href: getPermalink('physics', 'category') },
        { text: 'Earth & Deep Sea', href: getPermalink('earth', 'category') },
        { text: 'Mind & Evolution', href: getPermalink('mind', 'category') },
        { text: 'Scientific Anomalies', href: getPermalink('anomalies', 'category') },
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
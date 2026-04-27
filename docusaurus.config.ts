import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SDM MetricTile',
  tagline: 'Advanced shape tile with effects, drag positioning, and data-driven styling for Power BI',
  favicon: 'img/favicon.svg',

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["fr", "en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  future: {
    v4: true,
  },

  url: 'https://socio-data-management.github.io',
  baseUrl: '/sdmpbimetrics-docs/',

  organizationName: 'Socio-Data-Management',
  projectName: 'sdmpbimetrics-docs',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      // Screenshots are added later — let the build pass with placeholder image refs.
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Socio-Data-Management/sdmpbimetrics-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SDM MetricTile',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://socio-dm.com',
          label: 'Socio DM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Overview', to: '/docs/introduction/overview' },
            { label: 'Quick Start', to: '/docs/getting-started/quick-start' },
            { label: 'Data Roles', to: '/docs/getting-started/data-roles' },
            { label: 'Formatting', to: '/docs/formatting/shape' },
            { label: 'Licensing', to: '/docs/licensing' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'AppSource', href: 'https://appsource.microsoft.com' },
            { label: 'Socio Data Management', href: 'https://socio-dm.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Socio Data Management.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

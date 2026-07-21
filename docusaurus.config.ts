import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SDM Metrics',
  tagline: 'Custom Power BI visuals by Socio-DM — MetricTile and Funnel',
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

  url: 'https://docs-metrics.socio-dm.com',
  baseUrl: '/',

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
      title: 'SDM Metrics',
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
          title: 'MetricTile',
          items: [
            { label: 'Overview', to: '/docs/metrictile/introduction/overview' },
            { label: 'Quick Start', to: '/docs/metrictile/getting-started/quick-start' },
            { label: 'Data Roles', to: '/docs/metrictile/getting-started/data-roles' },
            { label: 'Formatting', to: '/docs/metrictile/formatting/shape' },
            { label: 'Licensing', to: '/docs/metrictile/licensing' },
          ],
        },
        {
          title: 'Funnel Tile',
          items: [
            { label: 'Overview', to: '/docs/funnel/introduction/overview' },
            { label: 'Quick Start', to: '/docs/funnel/getting-started/quick-start' },
            { label: 'Data Roles', to: '/docs/funnel/getting-started/data-roles' },
            { label: 'Formatting', to: '/docs/funnel/formatting/global-settings' },
            { label: 'Licensing', to: '/docs/funnel/licensing' },
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

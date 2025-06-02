import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'not-slop.org',
  tagline: 'An open label for handmade digital content',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://not-slop.org',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'not-slop', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/not-slop/website/blob/main/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'not-slop.org',
      /*
      logo: {
        alt: "Not Slop logo",
        src: "img/not-slop-logo.svg",
      },
      */
      items: [
        {
          href: 'https://github.com/not-slop/website',
          label: 'GitHub',
          position: 'right'
        }
        //{ to: '/docs/about', label: 'About', position: 'right' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'BlueSky',
              href: 'https://bsky.app/profile/not-slop.org'
            },
            {
              label: 'Mastodon',
              href: 'https://fosstodon.org/@not_slop'
            },
            {
              label: 'Twitter',
              href: 'https://x.com/not_slop'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://octogonz.com">Octogonz</a>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Azeret+Mono:ital,wght@0,100..900;1,100..900&family=STIX+Two+Text:ital,wght@0,400..700;1,400..700&display=swap',
      rel: 'stylesheet'
    }
  ]
};

export default config;

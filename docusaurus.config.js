// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: "Farcaster",
  tagline:  "Permissionlessly build and distribute social apps",
  favicon: "img/favicon.ico",
  url: "https://docs.farcaster.xyz/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/undefined/undefined/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Farcaster",
      logo: {
        alt: "Farcaster Logo",
        src: "https://res.cloudinary.com/dfkuxnesz/image/upload/v1740471046/QoG0ZVgH_400x400-ezgif.com-gif-maker_mxishs.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "contractSidebar",
          position: "left",
          label: "Contracts",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const packageJson =  require('./package.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: packageJson.productName,
    tagline: packageJson.productName,
    url: packageJson.homepage,
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'vircadia', // Usually your GitHub org/user name.
    projectName: packageJson.name, // Usually your repo name.

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl: 'https://github.com/vircadia/vircadia-dev-docs/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: 'Developer Documentation',
            logo: {
                alt: 'Vircadia',
                src: 'img/vircadia-banner.png',
            },
            items: [
                {
                    href: 'https://vircadia.com/',
                    position: 'right',
                    label: 'Website',
                },
                {
                    href: 'https://github.com/vircadia/',
                    label: 'Git',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'More Docs',
                    items: [
                        {
                            label: 'User Docs',
                            to: 'https://docs.vircadia.com/'
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Forum',
                            href: 'https://forum.vircadia.com/'
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/Pvx2vke'
                        },
                        {
                            label: 'Matrix',
                            href: 'https://matrix.to/#/#vircadia:matrix.vircadia.org'
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Website',
                            to: 'https://vircadia.com/',
                        },
                        {
                            label: 'Git',
                            href: 'https://github.com/vircadia/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DigiSomni LLC. | Copyright © ${new Date().getFullYear()} Vircadia contributors.`,
        },
        announcementBar: {
            id: 'integration_help',
            content: '<a target="_blank" id="integration_help" rel="noopener noreferrer" href="https://vircadia.com/#contact">Need assistance integrating Vircadia with your company or organization? 🚀</a>',
            backgroundColor: '#001A29',
            textColor: '#CCCCCC',
            isCloseable: false,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;

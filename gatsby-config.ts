import * as dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

dotenv.config({ path: __dirname + `/.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Qape`,
    siteUrl: `https://qape.dev`,
    icon: './favicon.png',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['REACT_APP_SITE_KEY', 'NODE_ENV'],
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-RSJG795GLG',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-RSJG795GLG',
          'UA-44508613-1', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap`,
          },
        ],
      },
    },
    'gatsby-plugin-provide-react',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './favicon.png',
        display: `standalone`,
        start_url: `/`,
        name: `Qape`,
        short_name: `Qape`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-typescript',
  ],
};

export default config;

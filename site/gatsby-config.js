module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'MEBLE NA WYMIAR',
    titleTemplate: 'MAT-DAB | %s',
    description:
      'MATDAB MEBLE NA WYMIAR, oferowane usługi kuchnie, szafy, zabudowy, garderoby.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `dr1o3q1c`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: `dr1o3q1c`,
        dataset: `production`,
      },
    },
  ],
};

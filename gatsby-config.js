module.exports = {
  siteMetadata: {
    title: "Ian and Megan 2019",
    author: "Ian Candy",
    description: "A Wedding Website for Ian and Megan. Using the V2 Starter based on Dimension by HTML5 UP"
  },
  pathPrefix: "wedding-website",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/engaged.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
       trackingId: "UA-134122184-1",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
}

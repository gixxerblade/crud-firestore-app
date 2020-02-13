require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `pntry`,
    description: `Helpful to organize stuff`,
    author: `S. Clark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: true,
          performance: false,
        },
        credentials: {
          apiKey: `${process.env.GATSBY_FIREBASE_API_KEY}`,
          authDomain: `${process.env.GATSBY_FIREBASE_AUTH_DOMAIN}`,
          databaseURL: `${process.env.GATSBY_FIREBASE_DATABASE_URL}`,
          projectId: "pntryapp",
          storageBucket: `${process.env.GATSBY_FIREBASE_STORAGE_BUCKET}`,
          messagingSenderId: `${process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID}`,
          appId: `${process.env.GATSBY_FIREBASE_APP_ID}`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

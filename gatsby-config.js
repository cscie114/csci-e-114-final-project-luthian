/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CSCI E-114 Assignment 4`,
    description: `DDA's Gatsby project for Assignment 4 derived from the Starter Project for CSCI E-114 Assignment 4`,
    course: `CSCI E-114`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // For Tailwind CSS
    'gatsby-plugin-postcss',

    /*    FOR IMAGES LOCATED WITHIN YOUR PROJECT, USING GatsbyImage or StaticImage    */

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
      /*  FOR READING IMAGES FROM FILESYSTEM AND PROCESSING THROUGH THE IMAGE PLUGINS     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/trip-reports/images/`,
      },
    },

    /*  THIS PAIR FOR READING JSON FILES FROM THE FILESYSTEM      */

    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    /*  FOR PROCESSING MARKDOWN FILES INTO HTML    */

    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `trips`,
        path: `${__dirname}/src/data/trip-reports/`,
      },
    },

    /*  FOR PROCESSING LOCAL IMAGES REFERENCED IN MARKDOWN    */

    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
      },
    },

    /* FOR PROCESSING REMOTE IMAGES REFERENCED BY URL
       nodeType is the top-level node type, so if you have an 'allPark' node in graphql, you'd put 'park' here
    */
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     nodeType: 'park',  
    //     imagePath: '[PATH TO IMAGE URL]]',  // navigating from the nodeType down
    //     name: 'localImages',  // name of property in graphql schema to contain the new, cached processed image
    //     silent: true   // ignore 404s
    //   },
    // },
  ],
};

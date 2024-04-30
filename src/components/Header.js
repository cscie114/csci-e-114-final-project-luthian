import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// This is adapted from the course example for Lecture 10
const Header = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          course
        }
      }
    }
  `);

  // gather data to simplify markup below
  const headerData = {
    title: data.site.siteMetadata.title,
    description: data.site.siteMetadata.description,
    keywords: `gatsby, appetizer, Harvard Extension School, HES, ${data.site.siteMetadata.course}`,
  };

  return (
    <>
      <html lang="en" />
      <title>
        {title} - {headerData.title}
      </title>
      <meta name="description" content={headerData.description} />
      <meta name="keywords" content={headerData.keywords}></meta>
    </>
  );
};

export default Header;
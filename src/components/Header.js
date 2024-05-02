import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

// This is adapted from the course example for Lecture 10
function Header({ title }) {
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
    keywords: `gatsby, appetizer, food, Harvard Extension School, HES, ${data.site.siteMetadata.course}`,
  };

  return (
    <>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        {title}
        {' '}
        -
        {headerData.title}
      </title>
      <meta name="description" content={headerData.description} />
      <meta name="keywords" content={headerData.keywords} />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;

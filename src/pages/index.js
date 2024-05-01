import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        This is my submission for the Final Project in{' '}
        <span className="font-semibold">CSCI E-114 Web Application Development with Jamstack</span>. This project is
        very free form, so I decided to create a simple Gatsby site that showcases a few of the appetizer trays I like to make for various occasions.
        Gatsby pulls data from a WordPress site which is being used as a headless CMS.
        The site is hosted on Netlify and the WordPress site is hosted on a nano droplet on Digital Ocean. 
        The site is styled with Tailwind CSS and uses the Gatsby Image plugin to optimize images.
      </p>
      <StaticImage
        src="../images/IMG_0738.jpg"
        alt="An appetizer tray with olives, tomatoes, pickles, celery sticks, and cucumbers."
        className="mt-4"
        layout="constrained"
        width={400}
        aspectRatio={1926 / 2592}
        placeholder="BLURRED"
      />
      <div className="text-xs text-gray-500 mt-2">A simple appetizer tray. Photo Credit: David D'Antonio</div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Header title="Home Page"></Header>;

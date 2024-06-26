import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Layout({ pageTitle, children }) {
  const links = [
    { url: '', name: 'Home' },
    { url: 'allposts', name: 'All Posts' },
  ];
  return (
    <div className="p-4" data-testid="layout">
      <div className="flex justify-between">
        <header>
          <h1 data-testid="page-title" className="text-2xl">
            {pageTitle}
          </h1>
        </header>
        <nav>
          <ul className="flex">
            {links.map((link) => (
              <li key={link.url} className="ml-2">
                <Link className="underline text-blue-500" to={`/${link.url}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr className="border-gray-400 my-2" />
      <main className="h-[85vh] overflow-auto">{children}</main>
      <footer className="text-xs m-3 text-gray-500 absolute inset-x-0 bottom-0">
        <hr className="border-gray-400 mb-2" />
        <span>CSCI E-114 Final Project - Gatsby pulling from a headless WordPress CMS</span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node,
};



export default Layout;

import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { PencilIcon } from '@heroicons/react/24/solid';

import Layout from '../components/Layout';
import Header from '../components/Header';

export default function AllParksPage({ data }) {
  const [onlyTripReport, setOnlyTripReport] = React.useState(false);

  function hasTripReport(parkCode) {
    return data.allMarkdownRemark.edges.some(({ node }) => node.frontmatter.parkCode === parkCode);
  }

  function toggleTripReport() {
    setOnlyTripReport(!onlyTripReport);
  }

  return (
    <Layout pageTitle="All Parks">
      <span>
        <h2 className="mb-3 text-xl inline-block">All the National Parks</h2>
        <label className="cursor-pointer">
          <input type="checkbox" className="ml-5 mr-1" onChange={toggleTripReport}/>
          <span>Only show parks with Trip Reports <PencilIcon className="h-4 w-4 text-blue-500 inline-block ml-2" /></span>
        </label>
        <ul className="columns-4">
          {data.allParks.nodes.map(park => {
            if (onlyTripReport && !hasTripReport(park.parkCode)) {
              return null;
            }
            return (
              <li key={park.parkCode} className="list-[circle] ml-5">
                <Link className="underline text-blue-500" to={`/parks/${park.parkCode}`}>
                  {park.fullName}
                </Link>
                {hasTripReport(park.parkCode) ? <PencilIcon className="h-4 w-4 text-blue-500 inline-block ml-2" /> : ''}
              </li>
            );
          })}
        </ul>
      </span>
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllParksQuery {
    allParks {
      nodes {
        fullName
        parkCode
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt(format: HTML)
          frontmatter {
            parkCode
            title
          }
          html
          id
        }
      }
    }
  }
`;

export const Head = () => <Header title="All Parks"></Header>;

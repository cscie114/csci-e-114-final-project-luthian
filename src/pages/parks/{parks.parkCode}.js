import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Park from '../../components/Park';
import TripReport from '../../components/TripReport';

export default function ParksPage({ data }) {
  // console.log(data);
  const park = data.parks;
  const tripReport = data.markdownRemark;
  return (
    <Layout pageTitle={park.fullName}>
      <Park park={park}/>
      {tripReport ? <TripReport tripReport={tripReport}/> : ''}
    </Layout>
  );
}

export const pageQuery = graphql`
  query ParkQuery($parkCode: String!) {
    parks(parkCode: { eq: $parkCode }) {
      description
      designation
      fullName
      id
      images {
        altText
        caption
        credit
        title
        url
      }
      parkCode
      url
    }
    markdownRemark(frontmatter: {parkCode: {eq: $parkCode}}) {
      excerpt(format: HTML)
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
        parkCode
        credit
      }
      html
    }
  }
`;

export const Head = () => <Header title='Park Page'></Header>;

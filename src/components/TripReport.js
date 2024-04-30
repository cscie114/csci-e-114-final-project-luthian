import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PencilIcon } from '@heroicons/react/24/solid';
import * as TripStyles from './tripreport.module.css';

export default function TripReport({ tripReport }) {
  const [showFullReport, setShowFullReport] = React.useState(false);

  const tripImage = tripReport.frontmatter.image ? getImage(tripReport.frontmatter.image?.childImageSharp?.gatsbyImageData) : null;

  return tripReport ? (
    <section className="mt-2">
      <h2 className="mt-2 text-2xl inline-block">
        Trip Report <PencilIcon className="h-5 w-5 text-blue-500 inline-block" />
      </h2>
      <h3 className="mt-4 mb-2 text-xl font-semibold">{tripReport.frontmatter.title}</h3>
      {showFullReport ? (
        <p className={TripStyles.trip} dangerouslySetInnerHTML={{ __html: tripReport.html }}></p>
      ) : (
        <p className="mt-2" dangerouslySetInnerHTML={{ __html: tripReport.excerpt }}></p>
      )}
      {tripReport.excerpt &&
        (showFullReport ? (
          <button
            onClick={() => setShowFullReport(false)}
            onKeyDown={() => setShowFullReport(false)}
            className="text-blue-500 underline cursor-pointer block"
          >
            Show less
          </button>
        ) : (
          <button
            onClick={() => setShowFullReport(true)}
            onKeyDown={() => setShowFullReport(true)}
            className="text-blue-500 underline cursor-pointer block"
          >
            Show more
          </button>
        ))}
      {tripImage && (
        <>
          <GatsbyImage image={tripImage} alt={tripReport.frontmatter.title} className="mt-4" />
          <div className="text-xs text-gray-500 mt-2"> Photo Credit: {tripReport.frontmatter.credit}</div>
        </>
      )}
    </section>
  ) : null;
}

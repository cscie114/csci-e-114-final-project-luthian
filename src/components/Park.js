import * as React from 'react';
import { Link } from 'gatsby';
import * as parkStyles from './park.module.css';
import DesignationDisplayName from './DesignationDisplayName';

export default function Park({ park }) {
  return (
    <section>
      <p className={parkStyles.largeLineHeight}>{park.description}</p>
      <DesignationDisplayName park={park}/>
    <p className='mt-3'>
        More information at&nbsp;
        <Link className="underline text-blue-500" to={park.url}>nps.gov/{park.parkCode}</Link>
      </p>
      <ul className={parkStyles.tileGrid}>
        {park.images.map(image => (
          <li className={parkStyles.parkTile} key={image.url}>
            <p className={parkStyles.imageTitle}>{image.title}</p>
            <figure>
              <img className={parkStyles.parkImage} src={image.url} alt={image.altText} />
              <figcaption>
                {image.caption}&nbsp;
                <em>{image.credit}</em>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

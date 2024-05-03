import * as React from 'react';
import PropTypes from 'prop-types';

function DesignationDisplayName({ park }) {
  return (
    <p className="mt-3">
      {park.designation ? (
        <span>
          Designated a
          <strong>{park.designation}</strong>
        </span>
      ) : (<em>No designation</em>)}
    </p>
  );
}

export default DesignationDisplayName;
DesignationDisplayName.propTypes = {
  park: PropTypes.object,
};
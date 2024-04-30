import * as React from 'react';

export default function DesignationDisplayName({ park }) {
  return (
    <p className='mt-3'>{park.designation ? (<span>Designated a <strong>{park.designation}</strong></span>) : (<em>No designation</em>)}</p>
  );
}

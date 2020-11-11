import React from 'react';

// Props, Props -> Button
// Reveives callback handler props and a name and returns the button
const InfoEdit = ({ type, name }) => {
  return (
    <button
      onClick={type}
      type='button'
      className='btn btn-sm btn-outline-secondary'>
      {name}
    </button>
  );
};

export default InfoEdit;

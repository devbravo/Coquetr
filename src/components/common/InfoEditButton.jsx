import React from 'react';

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

import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// props props -> button
// Returns a like button
function Like({ liked, onClick }) {
  return (
    <div
      area-hidden='true'
      onClick={onClick}
      style={{ cursor: 'pointer' }}>
      {liked && <FaHeart />}
      {!liked && <FaRegHeart />}
    </div>
  );
}

export default Like;

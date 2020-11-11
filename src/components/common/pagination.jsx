import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
//import PropTypes from 'prop-types';
import _ from 'lodash';

// Props props props props -> maps pagination
// Rendering component
const Paginate = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;

  return (
    <Pagination className='pagination'>
      <Pagination.First />
      <Pagination.Prev />
      {pages.map(page => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}>
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

export default Paginate;

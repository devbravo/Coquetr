import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import _ from 'lodash';

const Paginate = ({ itemsCount, pageSize }) => {
  const pagesCount = itemsCount / pageSize;

  const pages = _.range(1, pagesCount + 1);
  console.log(pages);
  if (pagesCount === 1) return null;
  else
    return (
      <Pagination className='pagination'>
        <Pagination.First />
        <Pagination.Prev />
        {pages.map(page => (
          <Pagination.Item key={page}>{page}</Pagination.Item>
        ))}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
};

export default Paginate;

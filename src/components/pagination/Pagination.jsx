import React from 'react';
import PropTypes from 'prop-types';
import classes from './Pagination.module.scss'

export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];
  const last = Math.ceil(totalPosts / postsPerPage);
  const delta = 1;

  for (let i = Math.max(2, (currentPage - delta)); i <= Math.min((last - 1), (currentPage + delta)); i += 1) {
    pageNumbers.push(i);
  }

  if ((currentPage - delta) > 2) {
    pageNumbers.unshift('...');
  }

  if ((currentPage + delta) < (last - 1)) {
    pageNumbers.push('...');
  }

  pageNumbers.unshift(1);
  if (last !== 1) pageNumbers.push(last);

  const handleClick = (event, number, index) => {
    if (event.target.textContent === "..." && (index === 5 || index === 2 || index === 4 || index === 3)) return paginate(currentPage + 2);
    if (event.target.textContent === "..." && index === 1) return paginate(currentPage - 2);
    return paginate(number);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map((number, index) => (
          <li key={index} className={classes.pageItem}>
            <a onClick={(event) => handleClick(event, number, index)} name='#' className={currentPage === number ? classes.currentPage : null}>
              <span>{number}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};

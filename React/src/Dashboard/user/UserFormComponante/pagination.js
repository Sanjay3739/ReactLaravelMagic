import React from 'react';
import { PreviousIcon, NextIcon }  from "../../../component/icon"; 
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>
            <NextIcon />
        </button>
      )}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>
        <PreviousIcon />
        </button>
      )}
    </div>
  );
};

export default Pagination;

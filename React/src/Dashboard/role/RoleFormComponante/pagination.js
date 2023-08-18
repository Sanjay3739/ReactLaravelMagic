import React from 'react';
import { PreviousIcon, NextIcon } from "../../../component/icon";
const RolePagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">
            {currentPage > 1 && (
                <button onClick={() => handlePageChange(currentPage - 1)}> <NextIcon /></button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                    <button key={page} className={currentPage === page ? "active" : ""} onClick={() => handlePageChange(page)}>  {page} </button>
                )
            )}
            {currentPage < totalPages && (
                <button onClick={() => handlePageChange(currentPage + 1)}><PreviousIcon /> </button>
            )}
        </div>
    );
};

export default RolePagination;

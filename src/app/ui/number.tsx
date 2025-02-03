'use client';
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3; // Number of page buttons to show (excluding ellipsis)

    // Always show the first page
    pages.push(
      <button
        key={1}
        onClick={() => onPageChange(1)}
        className={`px-4 py-2 rounded-md transition ${
          currentPage === 1 ? "bg-amber-300 text-black font-semibold" : "bg-amber-100 text-gray-700 hover:bg-amber-200"
        }`}
      >
        1
      </button>
    );

    // Add ellipsis if currentPage is far from the start
    if (currentPage > maxPagesToShow) {
      pages.push(<span key="start-ellipsis" className="px-4 py-2">...</span>);
    }

    // Calculate the range of pages to show around the current page
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Adjust the range if near the start or end
    if (currentPage <= maxPagesToShow) {
      startPage = 2;
      endPage = Math.min(maxPagesToShow + 1, totalPages - 1);
    } else if (currentPage >= totalPages - maxPagesToShow + 1) {
      startPage = Math.max(2, totalPages - maxPagesToShow);
      endPage = totalPages - 1;
    }

    // Add the middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-4 py-2 rounded-md transition ${
            currentPage === i ? "bg-amber-300 text-black font-semibold" : "bg-amber-100 text-gray-700 hover:bg-amber-200"
          }`}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis if currentPage is far from the end
    if (currentPage < totalPages - maxPagesToShow + 1) {
      pages.push(<span key="end-ellipsis" className="px-4 py-2">...</span>);
    }

    // Always show the last page if there's more than one page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={`px-4 py-2 rounded-md transition ${
            currentPage === totalPages ? "bg-amber-300 text-black font-semibold" : "bg-amber-100 text-gray-700 hover:bg-amber-200"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md transition ${
          currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-amber-100 text-black hover:bg-amber-200"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md transition ${
          currentPage === totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-amber-100 text-black hover:bg-amber-200"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
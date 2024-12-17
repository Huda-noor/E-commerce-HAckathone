import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      {/* Previous Button */}
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md transition ${
          currentPage === 1 ? "bg-gray-100 text-gray-400" : "bg-amber-100 text-black hover:bg-amber-200"
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 rounded-md transition ${
            currentPage === index + 1
              ? "bg-amber-300 text-black font-semibold"
              : "bg-amber-100 text-gray-700 hover:bg-amber-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md transition ${
          currentPage === totalPages ? "bg-gray-100 text-gray-400" : "bg-amber-100 text-black hover:bg-amber-200"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

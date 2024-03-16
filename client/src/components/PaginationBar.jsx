import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const PaginationBar = ({ totalPages, currentPage, onPageChange }) => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const pageFromQuery = searchParams.get('page');

    if (pageFromQuery) {
      onPageChange(Number(pageFromQuery));
    }
  }, [location.search, onPageChange]);

  if (totalPages <= 1) {
    return null;
  }
  const renderPageLinks = () => {
    const pageLinks = [];

    for (let page = 1; page <= totalPages; page++) {
      pageLinks.push(
        <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
          <Link className="page-link" to={`?page=${page}`}>
            {page}
          </Link>
        </li>
      );
    }

    return pageLinks;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <Link className="page-link" to={`?page=${currentPage - 1}`} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {renderPageLinks()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <Link className="page-link" to={`?page=${currentPage + 1}`} aria-label="Next">
            <span className="sr-only">Next</span>
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;

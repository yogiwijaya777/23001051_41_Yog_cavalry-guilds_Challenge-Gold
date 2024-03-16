import { Link } from 'react-router-dom';

const PaginationBar = ({ totalPages, currentPage }) => {
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
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;

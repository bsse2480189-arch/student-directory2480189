function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Student directory pages">
      <ul className="pagination mb-0">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          <li className={`page-item ${currentPage === number ? "active" : ""}`} key={number}>
            <button className="page-link" onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;

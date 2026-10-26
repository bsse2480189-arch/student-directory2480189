// Pagination component: pages ke buttons (Previous, 1, 2, 3, Next) banata hai (is project mein use nahi ho raha)
// props: currentPage (abhi kaun sa page), totalPages (kul pages), onPageChange (page badalne wala function)
function Pagination({ currentPage, totalPages, onPageChange }) {
  // agar sirf 1 ya us se kam page hai to kuch bhi render mat karo (null)
  if (totalPages <= 1) return null;
  // UI return ho rahi hai
  return (
    // nav tag, aria-label screen readers ke liye
    <nav aria-label="Student directory pages">
      {/* Bootstrap pagination list, mb-0 = neeche margin nahi */}
      <ul className="pagination mb-0">
        {/* Previous item: pehle page par ho to "disabled" class lag jati hai (template literal + ternary) */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          {/* Previous button: page 1 par disabled, click par currentPage - 1 wale page par jao */}
          <button className="page-link" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Previous</button>
        {/* Previous li khatam */}
        </li>
        {/* Array.from se 1 se totalPages tak numbers ki array bani, phir map se har number ka button banaya */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
          // har page number ka li; agar ye current page hai to "active" class, key = number
          <li className={`page-item ${currentPage === number ? "active" : ""}`} key={number}>
            {/* number wala button, click par usi page par jao */}
            <button className="page-link" onClick={() => onPageChange(number)}>{number}</button>
          {/* li khatam */}
          </li>
        // map khatam
        ))}
        {/* Next item: aakhri page par ho to "disabled" class */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          {/* Next button: aakhri page par disabled, click par currentPage + 1 wale page par jao */}
          <button className="page-link" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
        {/* Next li khatam */}
        </li>
      {/* ul khatam */}
      </ul>
    {/* nav khatam */}
    </nav>
  );
}
// default export
export default Pagination;

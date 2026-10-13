function Navbar({ search, onSearchChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#directory">🎓 Student Directory</a>
        <form className="d-flex search-form" role="search" onSubmit={(event) => event.preventDefault()}>
          <input
            className="form-control"
            type="search"
            placeholder="Search students..."
            aria-label="Search students"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </form>
      </div>
    </nav>
  );
}
export default Navbar;

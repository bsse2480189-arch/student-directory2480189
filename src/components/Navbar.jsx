import { NavLink } from 'react-router-dom'

// Props: title (comes from the parent component)
function Navbar({ title }) {

  return (

    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">

      <div className="container">

        <NavLink className="navbar-brand fw-bold" to="/">
          {title}
        </NavLink>

        <div className="navbar-nav ms-auto flex-row gap-3">

          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>

          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>

          <NavLink className="nav-link" to="/courses">
            Courses
          </NavLink>

        </div>

      </div>

    </nav>

  )
}

export default Navbar

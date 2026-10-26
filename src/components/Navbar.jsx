// NavLink: link banata hai jo page reload nahi karta aur active page par khud "active" class laga deta hai
import { NavLink } from 'react-router-dom'

// Props: title (comes from the parent component)
// Navbar function component, { title } props se title nikal raha hai (destructuring)
function Navbar({ title }) {

  // UI return kar rahe hain
  return (

    // nav: Bootstrap navbar (dark background, sticky-top = scroll par upar chipki rahe)
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">

      {/* container: content ko center aur margin deta hai */}
      <div className="container">

        {/* Brand/logo link, click karne par "/" (home) par le jata hai */}
        <NavLink className="navbar-brand fw-bold" to="/">
          {/* parent se aaya hua title yahan show hoga */}
          {title}
        </NavLink>

        {/* menu links ka group, ms-auto = right side par, flex-row = ek line mein, gap-3 = darmiyan faasla */}
        <div className="navbar-nav ms-auto flex-row gap-3">

          {/* Home link; "end" ka matlab sirf exact "/" par active ho */}
          <NavLink className="nav-link" to="/" end>
            {/* link ka text */}
            Home
          </NavLink>

          {/* Contact page ka link */}
          <NavLink className="nav-link" to="/contact">
            {/* link ka text */}
            Contact
          </NavLink>

          {/* Courses page ka link */}
          <NavLink className="nav-link" to="/courses">
            {/* link ka text */}
            Courses
          </NavLink>

        {/* menu links wala div khatam */}
        </div>

      {/* container khatam */}
      </div>

    {/* nav khatam */}
    </nav>

  )
}

// default export taake App.jsx mein import ho sake
export default Navbar

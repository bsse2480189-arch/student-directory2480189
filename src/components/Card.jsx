// useState hook import kiya, ye component ke andar data (state) yaad rakhne ke kaam aata hai
import { useState } from 'react'

// Props: id, name, program, semester, email, phone, onDelete (come from the parent)
// Card component, props destructure karke seedha variables bana liye (onDelete = delete karne wala function)
function Card({ id, name, program, semester, email, phone, onDelete }) {

  // State 1: counts profile views
  // views = current value, setViews = value badalne wala function, shuru mein 0
  const [views, setViews] = useState(0)

  // State 2: show or hide extra details
  // showDetails true/false rakhta hai, shuru mein false (details chhupi hui)
  const [showDetails, setShowDetails] = useState(false)

  // View Profile button dabane par chalne wala function
  function handleView() {
    // views mein 1 jama karke state update karo (component dobara render hoga)
    setViews(views + 1)
  }

  // UI return ho rahi hai
  return (
    // Bootstrap card: shadow-sm = halka shadow, h-100 = poori height, student-card = apni CSS class
    <div className="card shadow-sm h-100 student-card">

      {/* card-body: card ke andar ka content area */}
      <div className="card-body">

        {/* student ka naam heading mein */}
        <h4 className="card-title">{name}</h4>

        {/* program ka paragraph, mb-1 = neeche chota margin */}
        <p className="card-text mb-1">
          {/* program ki value */}
          {program}
        </p>

        {/* semester ka paragraph */}
        <p className="card-text mb-1">
          {/* text "Semester" aur uske baad semester ki value */}
          Semester {semester}
        </p>

        {/* views ka paragraph */}
        <p className="card-text">
          {/* views state ki current value dikhao */}
          Profile Views: {views}
        </p>

        {/* View Profile button */}
        <button
          className="btn btn-primary me-2" // blue button, me-2 = right margin
          onClick={handleView} // click par handleView function chale
        >
          {/* button ka text */}
          View Profile
        {/* button khatam */}
        </button>

        {/* Show/Hide button */}
        <button
          className="btn btn-secondary" // grey button
          onClick={() => setShowDetails(!showDetails)} // click par true ko false aur false ko true kar do (toggle)
        >
          {/* agar showDetails true hai to "Hide Details" warna "Show Details" (ternary operator) */}
          {showDetails ? 'Hide Details' : 'Show Details'}
        {/* button khatam */}
        </button>

        {/* Delete button: click par parent ka onDelete function is student ki id ke sath chalta hai */}
        <button
          className="btn btn-danger ms-2" // red button, ms-2 = left margin
          onClick={() => onDelete(id)} // click par parent ko id bheji taake wo list se hata de
        // button ka opening tag band
        >
          {/* button ka text */}
          Delete
        {/* button khatam */}
        </button>

        {/* Conditional Rendering: only visible when showDetails is true */}
        {/* && ka matlab: agar showDetails true hai tabhi aage wala div render hoga */}
        {showDetails && (
          // details ka box, mt-3 = upar margin
          <div className="details-box mt-3">

            {/* email ka paragraph */}
            <p className="mb-1">
              {/* strong = bold text, phir email ki value */}
              <strong>Email:</strong> {email}
            </p>

            {/* phone ka paragraph */}
            <p className="mb-0">
              {/* bold label aur phone ki value */}
              <strong>Phone:</strong> {phone}
            </p>

          {/* details-box khatam */}
          </div>
        )}

      {/* card-body khatam */}
      </div>

    {/* card khatam */}
    </div>
  )
}

// default export taake Home.jsx mein import ho sake
export default Card

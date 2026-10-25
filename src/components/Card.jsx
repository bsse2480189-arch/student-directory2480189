import { useState } from 'react'

// Props: name, program, semester, email, phone (come from the parent)
function Card({ name, program, semester, email, phone }) {

  // State 1: counts profile views
  const [views, setViews] = useState(0)

  // State 2: show or hide extra details
  const [showDetails, setShowDetails] = useState(false)

  function handleView() {
    setViews(views + 1)
  }

  return (
    <div className="card shadow-sm h-100 student-card">

      <div className="card-body">

        <h4 className="card-title">{name}</h4>

        <p className="card-text mb-1">
          {program}
        </p>

        <p className="card-text mb-1">
          Semester {semester}
        </p>

        <p className="card-text">
          Profile Views: {views}
        </p>

        <button
          className="btn btn-primary me-2"
          onClick={handleView}
        >
          View Profile
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {/* Conditional Rendering: only visible when showDetails is true */}
        {showDetails && (
          <div className="details-box mt-3">

            <p className="mb-1">
              <strong>Email:</strong> {email}
            </p>

            <p className="mb-0">
              <strong>Phone:</strong> {phone}
            </p>

          </div>
        )}

      </div>

    </div>
  )
}

export default Card

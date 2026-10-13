
import { useState } from "react";

function StudentCard({ student, onRemove }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">
            {student.name}
          </h5>

          <p className="card-text">
            <strong>Student ID:</strong> {student.id}
          </p>

          <p className="card-text">
            <strong>Major:</strong> {student.major}
          </p>

          <p className="card-text">
            <strong>GPA:</strong> {student.gpa}
          </p>

          <div className="d-flex gap-2 flex-wrap">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setShowProfile(true)}
            >
              View Profile
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemove(student.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      {showProfile && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Student Profile
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowProfile(false)}
                  aria-label="Close"
                />
              </div>

              <div className="modal-body">
                <p>
                  <strong>Name:</strong> {student.name}
                </p>

                <p>
                  <strong>Student ID:</strong> {student.id}
                </p>

                <p>
                  <strong>Major:</strong> {student.major}
                </p>

                <p>
                  <strong>GPA:</strong> {student.gpa}
                </p>

                {student.email && (
                  <p>
                    <strong>Email:</strong> {student.email}
                  </p>
                )}

                {student.year && (
                  <p>
                    <strong>Year:</strong> {student.year}
                  </p>
                )}
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowProfile(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StudentCard;
// Props: items (an array of submitted messages)
function List({ items }) {

  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <h4 className="mb-3">
          Submitted Messages ({items.length})
        </h4>

        {/* Conditional Rendering: empty message or the list */}
        {items.length === 0 ? (

          <div className="alert alert-warning mb-0">
            No messages submitted yet.
          </div>

        ) : (

          <ul className="list-group">

            {/* Mapping: one <li> for every item in the array */}
            {items.map((item) => (

              <li
                className="list-group-item"
                key={item.id}
              >

                <h5 className="mb-1">
                  {item.name}
                </h5>

                <p className="mb-1">
                  <strong>Email:</strong> {item.email}
                </p>

                <p className="mb-1">
                  <strong>Program:</strong> {item.program}
                </p>

                <p className="mb-0">
                  <strong>Message:</strong> {item.message}
                </p>

              </li>

            ))}

          </ul>

        )}

      </div>

    </div>
  )
}

export default List

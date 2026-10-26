// Props: items (an array of submitted messages)
// List component, parent se items (array) prop mein milta hai
function List({ items }) {

  // UI return ho rahi hai
  return (
    // Bootstrap card
    <div className="card shadow-sm">

      {/* card ka body */}
      <div className="card-body">

        {/* heading, mb-3 = neeche margin */}
        <h4 className="mb-3">
          {/* heading mein array ki length (kitne messages hain) dikhayi */}
          Submitted Messages ({items.length})
        {/* h4 khatam */}
        </h4>

        {/* Conditional Rendering: empty message or the list */}
        {/* ternary: agar array khali hai (length 0) to pehla part, warna doosra part */}
        {items.length === 0 ? (

          // yellow warning box
          <div className="alert alert-warning mb-0">
            {/* khali hone par ye message dikhta hai */}
            No messages submitted yet.
          {/* warning box khatam */}
          </div>

        ) : (

          // Bootstrap list-group (messages ki list)
          <ul className="list-group">

            {/* Mapping: one <li> for every item in the array */}
            {/* map: array ke har item ke liye ek <li> banata hai */}
            {items.map((item) => (

              // har list item; key = unique id jo React ko batati hai kaun sa item kaun sa hai
              <li
                className="list-group-item" // Bootstrap list item styling
                key={item.id} // key prop mapping mein zaroori hai
              // li ka opening tag band
              >

                {/* sender ka naam */}
                <h5 className="mb-1">
                  {/* item ka name */}
                  {item.name}
                {/* h5 khatam */}
                </h5>

                {/* email ka paragraph */}
                <p className="mb-1">
                  {/* bold label aur email ki value */}
                  <strong>Email:</strong> {item.email}
                </p>

                {/* program ka paragraph */}
                <p className="mb-1">
                  {/* bold label aur program ki value */}
                  <strong>Program:</strong> {item.program}
                </p>

                {/* message ka paragraph */}
                <p className="mb-0">
                  {/* bold label aur message ki value */}
                  <strong>Message:</strong> {item.message}
                </p>

              {/* li khatam */}
              </li>

            // map ka callback khatam
            ))}

          {/* ul khatam */}
          </ul>

        )}

      {/* card-body khatam */}
      </div>

    {/* card khatam */}
    </div>
  )
}

// default export
export default List

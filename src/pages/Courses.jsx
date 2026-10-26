
// Courses page ka component (is mein koi state ya props nahi, sirf static UI)
function Courses() {

  // UI return ho rahi hai
  return (

    // container, mt-5 = upar bara margin
    <div className="container mt-5">

      {/* page ki heading */}
      <h1>Courses</h1>

      {/* Bootstrap row (columns ka group) */}
      <div className="row">

        {/* pehla column: medium screen par 4/12 width */}
        <div className="col-md-4">

          {/* pehla course card */}
          <div className="card">

            {/* card ka body */}
            <div className="card-body">

              {/* course ka title */}
              <h5 className="card-title">
                {/* title ka text */}
                Software Construction
              {/* h5 khatam */}
              </h5>

              {/* course ki description */}
              <p className="card-text">
                {/* description ka text */}
                React and ASP.NET Core
              {/* p khatam */}
              </p>

            {/* card-body khatam */}
            </div>

          {/* card khatam */}
          </div>

        {/* column khatam */}
        </div>

        {/* doosra column: 4/12 width */}
        <div className="col-md-4">

          {/* doosra course card */}
          <div className="card">

            {/* card ka body */}
            <div className="card-body">

              {/* course ka title */}
              <h5 className="card-title">
                {/* title ka text */}
                Database Systems
              {/* h5 khatam */}
              </h5>

              {/* course ki description */}
              <p className="card-text">
                {/* description ka text */}
                Database design and SQL
              {/* p khatam */}
              </p>

            {/* card-body khatam */}
            </div>

          {/* card khatam */}
          </div>

        {/* column khatam */}
        </div>

      {/* row khatam */}
      </div>

    {/* container khatam */}
    </div>

  )
}

// default export taake App.jsx mein import ho sake
export default Courses

// Props: text (comes from the parent component)
// Footer function component, props se text nikal raha hai (destructuring)
function Footer({ text }) {

  // UI return ho rahi hai
  return (

    // footer tag: dark background, light text, center align, upar neeche padding, upar margin
    <footer className="bg-dark text-light text-center py-3 mt-5">

      {/* container: content ko center rakhta hai */}
      <div className="container">
        {/* small: chota text */}
        <small>
          {/* &copy; copyright ka symbol hai, phir saal aur parent se aaya hua text */}
          &copy; 2026 {text}
        {/* small khatam */}
        </small>
      {/* container khatam */}
      </div>

    {/* footer khatam */}
    </footer>

  )
}

// default export taake dusri files import kar sakein
export default Footer

// Props: text (comes from the parent component)
function Footer({ text }) {

  return (

    <footer className="bg-dark text-light text-center py-3 mt-5">

      <div className="container">
        <small>
          &copy; 2026 {text}
        </small>
      </div>

    </footer>

  )
}

export default Footer

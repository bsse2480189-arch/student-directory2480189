// useState hook import kiya (state banane ke liye)
import { useState } from 'react'

// Props: onSubmitData (a function sent by the parent)
// Form component, parent se onSubmitData function prop ke taur par mila
function Form({ onSubmitData }) {

  // Controlled inputs: every input value is stored in state
  // formData ek object hai jis mein form ki saari fields ki values hain, shuru mein sab khali
  const [formData, setFormData] = useState({
    name: '', // naam ki khali value
    email: '', // email ki khali value
    program: '', // program ki khali value
    message: '' // message ki khali value
  // object aur useState khatam
  })

  // error message ki state, shuru mein khali string (matlab koi error nahi)
  const [error, setError] = useState('')

  // jab bhi koi input/select/textarea badle to ye function chalta hai
  function handleChange(event) {

    // event.target se us field ka name aur value nikala (destructuring)
    const { name, value } = event.target

    // naya object bana ke state update karo
    setFormData({
      ...formData, // purani saari values copy karo (spread operator)
      [name]: value // sirf badli hui field ki value overwrite karo ([name] = dynamic key)
    })

    // user type kare to purana error hata do
    setError('')
  }

  // form submit hone par ye function chalta hai
  function handleSubmit(event) {

    // preventDefault: browser ko page reload karne se roko
    event.preventDefault()

    // Basic validation
    // agar koi bhi field khali hai (! = khali/false) to if chalega
    if (!formData.name || !formData.email || !formData.program || !formData.message) {
      // error message set karo
      setError('Please fill in all the fields.')
      // return: function yahin ruk jaye, aage data nahi bhejna
      return
    }

    // Send the data to the parent component
    // parent ke function ko call karke data bheja
    onSubmitData({
      id: Date.now(), // current time (milliseconds) ko unique id bana diya
      ...formData // form ki saari fields is object mein copy
    })

    // Clear the form
    // form dobara khali kar diya
    setFormData({
      name: '', // naam khali
      email: '', // email khali
      program: '', // program khali
      message: '' // message khali
    })
  }

  // UI return ho rahi hai
  return (
    // Bootstrap card
    <div className="card shadow-sm">

      {/* card ka andar wala area, p-4 = padding */}
      <div className="card-body p-4">

        {/* heading, mb-4 = neeche margin */}
        <h2 className="mb-4">
          {/* heading ka text */}
          Contact Form
        {/* h2 khatam */}
        </h2>

        {/* form tag, submit hone par handleSubmit chalega */}
        <form onSubmit={handleSubmit}>

          {/* Name */}

          {/* ek field ka wrapper, mb-3 = neeche margin */}
          <div className="mb-3">

            {/* label: field ka naam dikhata hai */}
            <label className="form-label">
              {/* label ka text */}
              Full Name
            {/* label khatam */}
            </label>

            {/* naam ka input */}
            <input
              type="text" // text type ka input
              name="name" // formData ki "name" key se match karta hai (handleChange isi se pehchanta hai)
              className="form-control" // Bootstrap input styling
              placeholder="Enter your name" // khali hone par halka text
              value={formData.name} // value state se aati hai (controlled input)
              onChange={handleChange} // type karne par handleChange chale
            // input yahan band hota hai
            />

          {/* wrapper div khatam */}
          </div>


          {/* Email */}

          {/* email field ka wrapper */}
          <div className="mb-3">

            {/* email ka label */}
            <label className="form-label">
              {/* label ka text */}
              Email
            {/* label khatam */}
            </label>

            {/* email ka input */}
            <input
              type="email" // email type (browser format check karta hai)
              name="email" // formData ki "email" key
              className="form-control" // Bootstrap styling
              placeholder="Enter your email" // placeholder text
              value={formData.email} // state se value
              onChange={handleChange} // change par handler
            // input band
            />

          {/* wrapper khatam */}
          </div>


          {/* Program */}

          {/* program field ka wrapper */}
          <div className="mb-3">

            {/* program ka label */}
            <label className="form-label">
              {/* label ka text */}
              Program
            {/* label khatam */}
            </label>

            {/* dropdown (select) */}
            <select
              name="program" // formData ki "program" key
              className="form-select" // Bootstrap select styling
              value={formData.program} // selected value state se
              onChange={handleChange} // select badalne par handler
            // select ka opening tag yahan band hota hai
            >

              {/* pehli option: khali value, default dikhne wala text */}
              <option value="">
                {/* option ka text */}
                Select Program
              {/* option khatam */}
              </option>

              {/* option jiski value "Computer Science" hai */}
              <option value="Computer Science">
                {/* user ko dikhne wala text */}
                Computer Science
              {/* option khatam */}
              </option>

              {/* Software Engineering ka option */}
              <option value="Software Engineering">
                {/* dikhne wala text */}
                Software Engineering
              {/* option khatam */}
              </option>

              {/* Information Technology ka option */}
              <option value="Information Technology">
                {/* dikhne wala text */}
                Information Technology
              {/* option khatam */}
              </option>

            {/* select khatam */}
            </select>

          {/* wrapper khatam */}
          </div>


          {/* Message */}

          {/* message field ka wrapper */}
          <div className="mb-3">

            {/* message ka label */}
            <label className="form-label">
              {/* label ka text */}
              Message
            {/* label khatam */}
            </label>

            {/* textarea: lamba text likhne ki jagah */}
            <textarea
              name="message" // formData ki "message" key
              className="form-control" // Bootstrap styling
              rows="3" // 3 lines ki height
              placeholder="Write your message" // placeholder text
              value={formData.message} // state se value
              onChange={handleChange} // change par handler
            // textarea band
            />

          {/* wrapper khatam */}
          </div>


          {/* Conditional Rendering: error is shown only when it exists */}

          {/* agar error khali nahi hai to hi neeche wala alert dikhao */}
          {error && (
            // lal (danger) alert box
            <div className="alert alert-danger">
              {/* error ka message dikhao */}
              {error}
            {/* alert khatam */}
            </div>
          )}


          {/* submit button */}
          <button
            type="submit" // click par form submit hota hai (handleSubmit chalta hai)
            className="btn btn-primary" // blue button
          // button ka opening tag band
          >
            {/* button ka text */}
            Submit
          {/* button khatam */}
          </button>

        {/* form khatam */}
        </form>

      {/* card-body khatam */}
      </div>

    {/* card khatam */}
    </div>
  )
}

// default export taake Contact.jsx mein import ho sake
export default Form

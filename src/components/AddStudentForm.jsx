// useState hook import kiya (state banane ke liye)
import { useState } from 'react'

// Props: onAddStudent (a function sent by the parent)
// AddStudentForm component, parent se onAddStudent function milta hai
function AddStudentForm({ onAddStudent }) {

  // formData: form ki saari fields ki values ka object, shuru mein sab khali
  const [formData, setFormData] = useState({
    name: '', // naam khali
    program: '', // program khali
    semester: '', // semester khali
    email: '', // email khali
    phone: '' // phone khali
  // object aur useState khatam
  })

  // error message ki state, shuru mein khali
  const [error, setError] = useState('')

  // har field badalne par ye function chalta hai
  function handleChange(event) {

    // jis field mein change hua uska name aur value nikala
    const { name, value } = event.target

    // state ko naye object se update karo
    setFormData({
      ...formData, // purani saari values copy (spread operator)
      [name]: value // sirf badli hui field overwrite ([name] dynamic key hai)
    })

    // type karne par purana error hata do
    setError('')
  }

  // form submit hone par ye function chalta hai
  function handleSubmit(event) {

    // page reload hone se roko
    event.preventDefault()

    // agar koi bhi field khali hai to if chalega
    if (!formData.name || !formData.program || !formData.semester || !formData.email || !formData.phone) {
      // error message set karo
      setError('Please fill in all the fields.')
      // function yahin rok do
      return
    }

    // parent ke function ko naya student bheja
    onAddStudent({
      id: Date.now(), // current time se unique id
      ...formData // form ki saari fields copy
    })

    // submit ke baad form dobara khali kar do
    setFormData({
      name: '', // naam khali
      program: '', // program khali
      semester: '', // semester khali
      email: '', // email khali
      phone: '' // phone khali
    })
  }

  // UI return ho rahi hai
  return (
    // Bootstrap card, mb-5 = neeche bara margin
    <div className="card shadow-sm mb-5">

      {/* card ka body, p-4 = padding */}
      <div className="card-body p-4">

        {/* heading, mb-4 = neeche margin */}
        <h3 className="mb-4">
          {/* heading ka text */}
          Add Student
        {/* h3 khatam */}
        </h3>

        {/* form tag, submit par handleSubmit chale */}
        <form onSubmit={handleSubmit}>

          {/* Bootstrap grid ki row, g-3 = fields ke darmiyan gap */}
          <div className="row g-3">

            {/* column: medium screen par aadhi chaurai (6/12) */}
            <div className="col-md-6">
              {/* naam ka input */}
              <input
                type="text" // text input
                name="name" // formData ki "name" key
                className="form-control" // Bootstrap styling
                placeholder="Student name" // placeholder text
                value={formData.name} // state se value (controlled input)
                onChange={handleChange} // change par handler
              // input band
              />
            {/* column khatam */}
            </div>

            {/* program ka column (6/12) */}
            <div className="col-md-6">
              {/* program ka dropdown */}
              <select
                name="program" // formData ki "program" key
                className="form-select" // Bootstrap select styling
                value={formData.program} // selected value state se
                onChange={handleChange} // badalne par handler
              // select ka opening tag band
              >
                {/* default khali option */}
                <option value="">Select Program</option>
                {/* Computer Science ka option (value, aur dikhne wala text) */}
                <option value="Computer Science">Computer Science</option>
                {/* Software Engineering ka option */}
                <option value="Software Engineering">Software Engineering</option>
                {/* Information Technology ka option */}
                <option value="Information Technology">Information Technology</option>
              {/* select khatam */}
              </select>
            {/* column khatam */}
            </div>

            {/* semester ka column: medium screen par 4/12 */}
            <div className="col-md-4">
              {/* semester ka dropdown */}
              <select
                name="semester" // formData ki "semester" key
                className="form-select" // Bootstrap select styling
                value={formData.semester} // selected value state se
                onChange={handleChange} // badalne par handler
              // select ka opening tag band
              >
                {/* default khali option */}
                <option value="">Select Semester</option>
                {/* semester 1 ka option */}
                <option value="1">Semester 1</option>
                {/* semester 2 ka option */}
                <option value="2">Semester 2</option>
                {/* semester 3 ka option */}
                <option value="3">Semester 3</option>
                {/* semester 4 ka option */}
                <option value="4">Semester 4</option>
                {/* semester 5 ka option */}
                <option value="5">Semester 5</option>
                {/* semester 6 ka option */}
                <option value="6">Semester 6</option>
                {/* semester 7 ka option */}
                <option value="7">Semester 7</option>
                {/* semester 8 ka option */}
                <option value="8">Semester 8</option>
              {/* select khatam */}
              </select>
            {/* column khatam */}
            </div>

            {/* email ka column (4/12) */}
            <div className="col-md-4">
              {/* email ka input */}
              <input
                type="email" // email type (format check hota hai)
                name="email" // formData ki "email" key
                className="form-control" // Bootstrap styling
                placeholder="Email" // placeholder text
                value={formData.email} // state se value
                onChange={handleChange} // change par handler
              // input band
              />
            {/* column khatam */}
            </div>

            {/* phone ka column (4/12) */}
            <div className="col-md-4">
              {/* phone ka input */}
              <input
                type="text" // text input
                name="phone" // formData ki "phone" key
                className="form-control" // Bootstrap styling
                placeholder="Phone" // placeholder text
                value={formData.phone} // state se value
                onChange={handleChange} // change par handler
              // input band
              />
            {/* column khatam */}
            </div>

          {/* row khatam */}
          </div>

          {/* agar error maujood hai to hi alert dikhao (conditional rendering) */}
          {error && (
            // lal alert, mt-3 = upar margin, mb-0 = neeche margin nahi
            <div className="alert alert-danger mt-3 mb-0">
              {/* error ka message */}
              {error}
            {/* alert khatam */}
            </div>
          )}

          {/* submit button */}
          <button
            type="submit" // click par form submit hota hai
            className="btn btn-primary mt-3" // blue button, upar margin
          // button ka opening tag band
          >
            {/* button ka text */}
            Add Student
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

// default export taake Home.jsx mein import ho sake
export default AddStudentForm

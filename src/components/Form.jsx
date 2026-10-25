import { useState } from 'react'

// Props: onSubmitData (a function sent by the parent)
function Form({ onSubmitData }) {

  // Controlled inputs: every input value is stored in state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: ''
  })

  const [error, setError] = useState('')

  function handleChange(event) {

    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })

    setError('')
  }

  function handleSubmit(event) {

    event.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.program || !formData.message) {
      setError('Please fill in all the fields.')
      return
    }

    // Send the data to the parent component
    onSubmitData({
      id: Date.now(),
      ...formData
    })

    // Clear the form
    setFormData({
      name: '',
      email: '',
      program: '',
      message: ''
    })
  }

  return (
    <div className="card shadow-sm">

      <div className="card-body p-4">

        <h2 className="mb-4">
          Contact Form
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="mb-3">

            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>


          {/* Email */}

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>


          {/* Program */}

          <div className="mb-3">

            <label className="form-label">
              Program
            </label>

            <select
              name="program"
              className="form-select"
              value={formData.program}
              onChange={handleChange}
            >

              <option value="">
                Select Program
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="Software Engineering">
                Software Engineering
              </option>

              <option value="Information Technology">
                Information Technology
              </option>

            </select>

          </div>


          {/* Message */}

          <div className="mb-3">

            <label className="form-label">
              Message
            </label>

            <textarea
              name="message"
              className="form-control"
              rows="3"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            />

          </div>


          {/* Conditional Rendering: error is shown only when it exists */}

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}


          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  )
}

export default Form

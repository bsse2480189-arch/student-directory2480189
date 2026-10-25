import { useState } from 'react'

// Props: onAddStudent (a function sent by the parent)
function AddStudentForm({ onAddStudent }) {

  const [formData, setFormData] = useState({
    name: '',
    program: '',
    semester: '',
    email: '',
    phone: ''
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

    if (!formData.name || !formData.program || !formData.semester || !formData.email || !formData.phone) {
      setError('Please fill in all the fields.')
      return
    }

    onAddStudent({
      id: Date.now(),
      ...formData
    })

    setFormData({
      name: '',
      program: '',
      semester: '',
      email: '',
      phone: ''
    })
  }

  return (
    <div className="card shadow-sm mb-5">

      <div className="card-body p-4">

        <h3 className="mb-4">
          Add Student
        </h3>

        <form onSubmit={handleSubmit}>

          <div className="row g-3">

            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Student name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <select
                name="program"
                className="form-select"
                value={formData.program}
                onChange={handleChange}
              >
                <option value="">Select Program</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Information Technology">Information Technology</option>
              </select>
            </div>

            <div className="col-md-4">
              <select
                name="semester"
                className="form-select"
                value={formData.semester}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
                <option value="7">Semester 7</option>
                <option value="8">Semester 8</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

          </div>

          {error && (
            <div className="alert alert-danger mt-3 mb-0">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary mt-3"
          >
            Add Student
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddStudentForm
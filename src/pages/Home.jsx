import { useState } from 'react'
import Card from '../components/Card'
import AddStudentForm from '../components/AddStudentForm'
import students from '../data/students'

function Home() {

  // State: the students array is now stored in state, so it can change
  const [studentList, setStudentList] = useState(students)

  function handleAddStudent(newStudent) {
    setStudentList([
      ...studentList,
      newStudent
    ])
  }

  return (

    <div className="container mt-4">

      <div className="hero p-5 mb-5 text-center">

        <h1 className="display-5 fw-bold">
          Welcome to Student Portal
        </h1>

        <p className="lead mb-0">
          Manage students and contact the university office.
        </p>

      </div>


      <AddStudentForm onAddStudent={handleAddStudent} />


      <h2 className="mb-4">
        Our Students ({studentList.length})
      </h2>

      <div className="row g-4">

        {studentList.map((student) => (

          <div
            className="col-12 col-md-6 col-lg-3"
            key={student.id}
          >

            <Card
              name={student.name}
              program={student.program}
              semester={student.semester}
              email={student.email}
              phone={student.phone}
            />

          </div>

        ))}

      </div>

    </div>

  )
}

export default Home
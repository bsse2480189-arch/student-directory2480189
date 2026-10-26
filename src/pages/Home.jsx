// useState hook import kiya (state ke liye)
import { useState } from 'react'
// Card component import kiya (ek student ka card)
import Card from '../components/Card'
// AddStudentForm component import kiya (naya student add karne ka form)
import AddStudentForm from '../components/AddStudentForm'
// Students ka dummy data import kiya (file ka naam Students.jsx hai, isi case mein likhna zaroori hai)
import students from '../data/Students'

// Home page ka component
function Home() {

  // State: the students array is now stored in state, so it can change
  // studentList = current list, shuru mein dummy data wali array
  const [studentList, setStudentList] = useState(students)

  // AddStudentForm naya student bheje to ye function chalta hai
  function handleAddStudent(newStudent) {
    // naya array bana ke state update karo
    setStudentList([
      ...studentList, // purane saare students copy (spread operator)
      newStudent // naya student aakhir mein
    ])
  }

  // Delete function: jis student ki id mile usay list se hata do
  function handleDeleteStudent(id) {
    // filter: sirf wo students rakho jin ki id match nahi karti, phir state update
    setStudentList(studentList.filter((student) => student.id !== id))
  }

  // UI return ho rahi hai
  return (

    // container: content center, mt-4 = upar margin
    <div className="container mt-4">

      {/* hero section (welcome banner), p-5 = bara padding, text-center = beech mein */}
      <div className="hero p-5 mb-5 text-center">

        {/* bari bold heading */}
        <h1 className="display-5 fw-bold">
          {/* heading ka text */}
          Welcome to Student Portal
        {/* h1 khatam */}
        </h1>

        {/* lead = thora bara paragraph, mb-0 = neeche margin nahi */}
        <p className="lead mb-0">
          {/* paragraph ka text */}
          Manage students and contact the university office.
        {/* p khatam */}
        </p>

      {/* hero khatam */}
      </div>


      {/* naya student add karne ka form, handleAddStudent function prop (onAddStudent) ke taur par bheja */}
      <AddStudentForm onAddStudent={handleAddStudent} />


      {/* heading jis mein students ki total ginti dikhti hai */}
      <h2 className="mb-4">
        {/* text aur array ki length */}
        Our Students ({studentList.length})
      {/* h2 khatam */}
      </h2>

      {/* Bootstrap row, g-4 = cards ke darmiyan gap */}
      <div className="row g-4">

        {/* map: studentList ke har student ke liye ek column aur card banata hai */}
        {studentList.map((student) => (

          // har card ka column: chhoti screen par 1, medium par 2, large par 4 cards ek row mein
          <div
            className="col-12 col-md-6 col-lg-3" // responsive column classes
            key={student.id} // key: har item ki unique pehchan (map mein zaroori)
          // div ka opening tag band
          >

            {/* Card component, har cheez prop ke zariye bheji */}
            <Card
              id={student.id} // id (delete ke liye zaroori)
              name={student.name} // naam
              program={student.program} // program
              semester={student.semester} // semester
              email={student.email} // email
              phone={student.phone} // phone
              onDelete={handleDeleteStudent} // delete function parent se child ko bheja
            // Card yahan band hota hai
            />

          {/* column khatam */}
          </div>

        // map ka callback khatam
        ))}

      {/* row khatam */}
      </div>

    {/* container khatam */}
    </div>

  )
}

// default export taake App.jsx mein import ho sake
export default Home

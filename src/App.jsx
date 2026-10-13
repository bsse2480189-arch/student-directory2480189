import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import StudentCard from "./components/StudentCard";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

const initialStudents = [
  { id: 101, name: "Asad abdul sattar", major: "Computer Science", year: 2, gpa: 3.8 },
  { id: 102, name: "noor mustafa", major: "Software Engineering", year: 3, gpa: 3.5 },
  { id: 103, name: "wasiq", major: "Data Science", year: 1, gpa: 3.9 },
  { id: 104, name: "Mia Chen", major: "Cybersecurity", year: 2, gpa: 3.7 },
  { id: 105, name: "Tom Ray", major: "Computer Science", year: 4, gpa: 3.2 },
  { id: 106, name: "Nour Ali", major: "Software Engineering", year: 1, gpa: 4.0 },
  { id: 107, name: "Zara Fox", major: "Data Science", year: 2, gpa: 3.4 },
  { id: 108, name: "Sam Park", major: "Computer Science", year: 4, gpa: 3.1 },
];

const PER_PAGE = 4;

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState("Welcome to the Student Directory.");

  const filteredStudents = useMemo(
    () => students.filter((student) =>
      `${student.name} ${student.major} ${student.id}`.toLowerCase().includes(search.toLowerCase())
    ),
    [students, search]
  );
  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visibleStudents = filteredStudents.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  function addStudent() {
    const name = window.prompt("Enter student name:");
    if (!name || !name.trim()) return;
    const major = window.prompt("Enter student major:", "Software Engineering");
    if (!major || !major.trim()) return;
    const newStudent = { id: Date.now(), name: name.trim(), major: major.trim(), year: 1, gpa: 0 };
    setStudents((oldStudents) => [newStudent, ...oldStudents]);
    setSearch("");
    setPage(1);
    setAlert(`${newStudent.name} was added successfully.`);
  }

  function deleteStudent(student) {
    setStudents((oldStudents) => oldStudents.filter((item) => item.id !== student.id));
    setAlert(`${student.name} was removed from the directory.`);
  }

  return (
    <div className="app-shell">
      <Navbar search={search} onSearchChange={(value) => { setSearch(value); setPage(1); }} />
      <Breadcrumb />
      <main className="container py-4 flex-grow-1" id="directory">
        <div className="page-heading">
          <div>
            <p className="eyebrow">CAMPUS DIRECTORY</p>
            <h1>Student Directory</h1>
            <p className="subheading">Browse and manage student records.</p>
          </div>
          <button className="btn btn-primary" onClick={addStudent}>+ Add Student</button>
        </div>

        {alert && (
          <div className="alert alert-info alert-dismissible fade show" role="alert">
            {alert}
            <button className="btn-close" type="button" aria-label="Close" onClick={() => setAlert("")}></button>
          </div>
        )}

        <div className="directory-summary">
          <strong>{filteredStudents.length} students</strong>
          <span>Page {currentPage} of {totalPages}</span>
        </div>

        {visibleStudents.length > 0 ? (
          <div className="row g-3">
            {visibleStudents.map((student) => (
              <div className="col-12 col-sm-6 col-lg-3" key={student.id}>
                <StudentCard student={student} onDelete={deleteStudent} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">No students found. Try another search.</div>
        )}

        <div className="d-flex justify-content-center mt-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

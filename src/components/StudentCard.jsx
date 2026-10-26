
// useState hook import kiya (state banane ke liye)
import { useState } from "react";

// StudentCard component (is project mein use nahi ho raha), props: student (object) aur onRemove (function)
function StudentCard({ student, onRemove }) {
  // showProfile: modal (popup) dikhana hai ya nahi, shuru mein false (band)
  const [showProfile, setShowProfile] = useState(false);

  // UI return ho rahi hai
  return (
    // <> </> Fragment: do alag elements (card aur modal) ko bina extra div ke return karne ke liye
    <>
      {/* Bootstrap card */}
      <div className="card h-100 shadow-sm">
        {/* card ka body */}
        <div className="card-body">
          {/* student ka naam */}
          <h5 className="card-title">
            {/* student object ka name */}
            {student.name}
          {/* h5 khatam */}
          </h5>

          {/* ID ka paragraph */}
          <p className="card-text">
            {/* bold label aur student ki id */}
            <strong>Student ID:</strong> {student.id}
          </p>

          {/* major ka paragraph */}
          <p className="card-text">
            {/* bold label aur major */}
            <strong>Major:</strong> {student.major}
          </p>

          {/* GPA ka paragraph */}
          <p className="card-text">
            {/* bold label aur gpa */}
            <strong>GPA:</strong> {student.gpa}
          </p>

          {/* buttons ka group: d-flex = ek line mein, gap-2 = faasla, flex-wrap = jagah kam ho to neeche chale jaye */}
          <div className="d-flex gap-2 flex-wrap">
            {/* View Profile button */}
            <button
              className="btn btn-primary btn-sm" // chota blue button
              onClick={() => setShowProfile(true)} // click par modal dikhao (state true)
            // button ka opening tag band
            >
              {/* button ka text */}
              View Profile
            {/* button khatam */}
            </button>

            {/* Remove button */}
            <button
              className="btn btn-danger btn-sm" // chota red button
              onClick={() => onRemove(student.id)} // click par parent ka onRemove function is student ki id ke sath chalao
            // button ka opening tag band
            >
              {/* button ka text */}
              Remove
            {/* button khatam */}
            </button>
          {/* buttons ka div khatam */}
          </div>
        {/* card-body khatam */}
        </div>
      {/* card khatam */}
      </div>

      {/* agar showProfile true hai to hi modal render hoga */}
      {showProfile && (
        // modal: d-block se modal zabardasti nazar aata hai
        <div
          className="modal d-block" // Bootstrap modal class + display block
          tabIndex="-1" // keyboard focus ke liye
          role="dialog" // accessibility: ye dialog box hai
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }} // piche halka kala parda (inline style object)
        // modal ka opening tag band
        >
          {/* modal-dialog-centered: popup ko screen ke center mein rakhta hai */}
          <div className="modal-dialog modal-dialog-centered">
            {/* modal ka asal dabba */}
            <div className="modal-content">
              {/* modal ka upar wala hissa (title + close button) */}
              <div className="modal-header">
                {/* modal ka title */}
                <h5 className="modal-title">
                  {/* title ka text */}
                  Student Profile
                {/* h5 khatam */}
                </h5>

                {/* cross (X) close button */}
                <button
                  type="button" // normal button, form submit nahi karega
                  className="btn-close" // Bootstrap ka X icon
                  onClick={() => setShowProfile(false)} // click par modal band (state false)
                  aria-label="Close" // screen reader ke liye naam
                // self-closing button yahan band hota hai
                />
              {/* modal-header khatam */}
              </div>

              {/* modal ka beech wala hissa (student ki details) */}
              <div className="modal-body">
                {/* naam ka paragraph */}
                <p>
                  {/* bold label aur naam */}
                  <strong>Name:</strong> {student.name}
                </p>

                {/* ID ka paragraph */}
                <p>
                  {/* bold label aur id */}
                  <strong>Student ID:</strong> {student.id}
                </p>

                {/* major ka paragraph */}
                <p>
                  {/* bold label aur major */}
                  <strong>Major:</strong> {student.major}
                </p>

                {/* GPA ka paragraph */}
                <p>
                  {/* bold label aur gpa */}
                  <strong>GPA:</strong> {student.gpa}
                </p>

                {/* agar email maujood hai to hi email dikhao (conditional rendering) */}
                {student.email && (
                  // email ka paragraph
                  <p>
                    {/* bold label aur email */}
                    <strong>Email:</strong> {student.email}
                  </p>
                )}

                {/* agar year maujood hai to hi year dikhao */}
                {student.year && (
                  // year ka paragraph
                  <p>
                    {/* bold label aur year */}
                    <strong>Year:</strong> {student.year}
                  </p>
                )}
              {/* modal-body khatam */}
              </div>

              {/* modal ka neeche wala hissa */}
              <div className="modal-footer">
                {/* Close button */}
                <button
                  className="btn btn-secondary" // grey button
                  onClick={() => setShowProfile(false)} // click par modal band
                // button ka opening tag band
                >
                  {/* button ka text */}
                  Close
                {/* button khatam */}
                </button>
              {/* modal-footer khatam */}
              </div>
            {/* modal-content khatam */}
            </div>
          {/* modal-dialog khatam */}
          </div>
        {/* modal khatam */}
        </div>
      )}
    {/* Fragment khatam */}
    </>
  );
}

// default export
export default StudentCard;

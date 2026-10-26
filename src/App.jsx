
// BrowserRouter (poori app ko routing deta hai), Routes (routes ka group), Route (ek single page ka rasta)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// App ki apni CSS file import ki
import './App.css';

// Navbar component import kiya (upar wali menu bar)
import Navbar from './components/Navbar';
// Footer component import kiya (neeche wali bar)
import Footer from './components/Footer';

// Home page import kiya
import Home from './pages/Home';
// Contact page import kiya
import Contact from './pages/Contact';
// Courses page import kiya
import Courses from './pages/Courses';

// App naam ka function component banaya
function App() {
  // component ki UI return ho rahi hai
  return (
    // BrowserRouter: iske andar ke sab components routing use kar sakte hain
    <BrowserRouter>
      {/* d-flex flex-column min-vh-100: page ko vertical flex banata hai taake footer hamesha neeche rahe */}
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar component, title prop ke zariye "Student Portal" bheja */}
        <Navbar title="Student Portal" />

        {/* main: page ka asal content, flex-grow-1 bachi hui jagah le leta hai */}
        <main className="flex-grow-1">
          {/* Routes: URL ke hisab se sirf ek matching Route dikhata hai */}
          <Routes>
            {/* Route shuru */}
            <Route
              path="/" // URL "/" ho to (home page)
              element={<Home />} // ye component dikhao
            />

            {/* Route shuru */}
            <Route
              path="/contact" // URL "/contact" ho to
              element={<Contact />} // Contact page dikhao
            />

            {/* Route shuru */}
            <Route
              path="/courses" // URL "/courses" ho to
              element={<Courses />} // Courses page dikhao
            />
          {/* Routes khatam */}
          </Routes>
        {/* main khatam */}
        </main>

        {/* Footer component, text prop ke zariye text bheja */}
        <Footer text="Student Portal - React Assignment" />
      {/* flex wrapper div khatam */}
      </div>
    {/* BrowserRouter khatam */}
    </BrowserRouter>
  );
}

// App ko default export kiya taake main.jsx isay import kar sake
export default App;

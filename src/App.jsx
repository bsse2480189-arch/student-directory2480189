
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Courses from './pages/Courses';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar title="Student Portal" />

        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />
          </Routes>
        </main>

        <Footer text="Student Portal - React Assignment" />
      </div>
    </BrowserRouter>
  );
}

export default App;

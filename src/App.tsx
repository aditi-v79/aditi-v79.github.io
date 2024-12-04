import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Main from './components/Main';
import ResumePDF from './assets/Aditi_Vakeel-Resume.pdf';

function App() {
  return (
      <Router>
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-10 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white text-lg font-bold rounded-full">
                AV
              </div>
              <span className="text-2xl font-semibold text-purple-500"><i>Aditi Vakeel</i></span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8">
              <Link to="/" className="text-gray-700 hover:text-purple-500">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-500">
                About
              </Link>
              <a
                  href={ResumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-purple-500"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
  );
}

export default App;

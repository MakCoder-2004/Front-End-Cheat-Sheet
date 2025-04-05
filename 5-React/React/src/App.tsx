import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ComponentLifeCyclePage from "./components/pages/ComponentLifeCyclePage";
import HooksPage from "./components/pages/HooksPage";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-800">Learning React</span>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2">
                  Home
                </Link>
                <Link to="/about" className="text-gray-800 hover:text-blue-600 px-3 py-2">
                  About
                </Link>
                <Link to="/products" className="text-gray-800 hover:text-blue-600 px-3 py-2">
                  Component Life Cycle
                </Link>
                <Link to="/hooks" className="text-gray-800 hover:text-blue-600 px-3 py-2">
                  Hooks
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ComponentLifeCyclePage />} />
          <Route path="/hooks" element={<HooksPage />} />
        </Routes>
        
      </div>
    </Router> 
  );
};

export default App;
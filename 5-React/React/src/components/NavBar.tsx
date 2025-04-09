import { NavLink } from 'react-router-dom'; // Note: Use 'react-router-dom' not 'react-router'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-800">Learning React</span>
              </div>
              <div className="flex items-center space-x-4"> 
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2" 
                      : "text-gray-800 hover:text-blue-600 px-3 py-2"
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/routing" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2" 
                      : "text-gray-800 hover:text-blue-600 px-3 py-2"
                  }
                >
                  Routing
                </NavLink>
                <NavLink 
                  to="/ComponentLifeCycle" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2" 
                      : "text-gray-800 hover:text-blue-600 px-3 py-2"
                  }
                >
                  Component Life Cycle
                </NavLink>
                <NavLink 
                  to="/hooks" 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-blue-600 border-b-2 border-blue-600 px-3 py-2" 
                      : "text-gray-800 hover:text-blue-600 px-3 py-2"
                  }
                >
                  Hooks
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar;
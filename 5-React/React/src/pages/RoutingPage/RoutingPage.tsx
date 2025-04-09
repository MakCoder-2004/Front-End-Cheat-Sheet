import { NavLink, Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

const RoutingPage = () => {
  const location = useLocation();

  const showInline =
    location.pathname.endsWith("/login") ||
    location.pathname.endsWith("/ReportAnIssue");

  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    `block hover:text-blue-500 transition duration-200 ${
      isActive ? "text-blue-600 font-medium" : "text-gray-600"
    }`;

  return (
    <>
      <NavBar />

      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4">Routing Page</h1>
        <p className="mb-4">This page demonstrates routing concepts.</p>
      </div>

      <div className="max-w-4xl mx-auto flex gap-8">
        <div className="flex-1 space-y-4">
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Main Content</h2>
            <p>This is the main content area of the routing page.</p>
            {!showInline && <Outlet />}
          </div>

          <div className="flex flex-col gap-4 border p-4 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <NavLink
                  to="ReportAnIssue"
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg 
                      hover:bg-gray-700 transition duration-200 shadow-sm
                      focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-30"
                >
                  Report An Issue
                </NavLink>

                <NavLink
                  to="login"
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg 
                      hover:bg-gray-700 transition duration-200 shadow-sm
                      focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-opacity-30"
                >
                  Login
                </NavLink>
              </div>

              <div
                className={`${
                  showInline ? "block" : "hidden"
                } transition-all duration-200`}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>

        <aside className="w-64 flex-shrink-0">
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/routing" end className={linkClass}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={linkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="settings" className={linkClass}>
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </> 
  );
};

export default RoutingPage;

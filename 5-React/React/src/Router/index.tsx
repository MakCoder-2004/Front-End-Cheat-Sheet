import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import RoutingPage from "../pages/RoutingPage/RoutingPage";
import ComponentLifeCyclePage from "../pages/ComponentLifeCyclePage";
import HooksPage from "../pages/HooksPage";
import RootLayout from "../RootLayout";
import About from "../pages/RoutingPage/About";
import Contact from "../pages/RoutingPage/Contact";
import Settings from "../pages/RoutingPage/Settings";
import Projects from "../pages/RoutingPage/Projects";
import Login from "../pages/RoutingPage/Login";
import ReportAnIssue from "../pages/RoutingPage/ReportAnIssue";
import ProtectedRoutes from "../components/auth/ProtectedRoutes";
import ErrorHandler from "../components/error/ErrorHandler";

const isLoggedin = true;

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="ComponentLifeCycle" element={<ComponentLifeCyclePage />} />
        <Route path="hooks" element={<HooksPage />} />
      </Route>

      {/* Routing Page */}
      <Route path="routing" element={<RoutingPage />}>
        <Route index element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="settings" element={<Settings />} />

        <Route path="login" element={<Login />} />
        {/* Navigate to another root according to the condition */}
        <Route
          path="ReportAnIssue"
          element={
            <ProtectedRoutes
              isAllowed={isLoggedin}
              redirectPath="/routing/login"
            >
              <ReportAnIssue />
            </ProtectedRoutes>
          }
          errorElement={<ErrorHandler />}
        />
      </Route>

      {/* Page Not Found */}
      <Route
        path="*"
        element={
          <ErrorHandler
            statusCode={404}
            title="Page Not Found"
            message="The page you are looking for does not exist."
          />
        }
      />
    </>
  )
);

export default Router;

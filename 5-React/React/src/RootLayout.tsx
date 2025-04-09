import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> {/* Route components */}
    </>
  );
};

export default RootLayout;

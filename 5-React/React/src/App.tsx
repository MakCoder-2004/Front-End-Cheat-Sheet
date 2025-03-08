import { useState } from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  // ** States
  const [isLoggedIn, changeLoginState] = useState(false);
  const [userData, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      {isLoggedIn ? (
        <h3>Welcome User</h3>
      ) : (
        <Login
          isLoggedIn={isLoggedIn}
          changeLoginState={changeLoginState}
          userData={userData}
          setData={setData}
        />
      )}
    </>
  );
}

export default App;

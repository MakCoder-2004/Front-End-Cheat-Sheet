import React, { useState } from "react";

// ** Data
import { formInputList } from "../data/formInputList";

// ** Interfaces
import { IUserData, IProps } from "../interfaces/index";

const Login = ({ isLoggedIn, changeLoginState, userData, setData }: IProps) => {
  // ** State for filtering inputs
  const [filteredData, setFilteredData] = useState(formInputList);

  // ** Handler
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData({
      ...userData,
      [name]: value,
    });
  }

  const renderInputList = filteredData.map((input, index) => (
    <div key={index}>
      <label htmlFor={input.name}>{input.label}:</label>
      <br />
      <input
        type={input.type}
        id={input.id}
        name={input.name}
        value={userData[input.name as keyof IUserData]}
        onChange={changeHandler}
      />
      <button
        onClick={() => {
          const updatedFilteredData = filteredData.filter((item) => item.name !== input.name);
          setFilteredData(updatedFilteredData);
        }}
      >
        ❌
      </button>
      <br />
    </div>
  ));

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        {renderInputList}
        <br />
        <button onClick={() => changeLoginState(!isLoggedIn)}>
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </form>
    </>
  );
};

export default Login;

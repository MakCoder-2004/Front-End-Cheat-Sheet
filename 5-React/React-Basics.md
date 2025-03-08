
`rafce` => Quickle create a react arrow function 

---

### JS Rules

- You can only return one top-level element
- Any element must include a closing tag
- Component name must be capitalized
- If you wanna make an Expression in JSX you must wrapp it around {}
- When you give a class to a component use `ClassName` instead
- When you give an attribute for to a component use `htmlFor` instead
- Any self-closed element we must put / at the end For example :-  `<input />` , `<img />` , `<br />` . 

---
### React Fragment

- We must first at the top `import { Fragment } from "react"` 

```tsx
    <Fragment>
        <span>Helloooo</span>
    </Fragment>
```

or We can use

```tsx
    <>
        <span>Helloooo</span>
    </>
```
---

### Dealing with props (properties)

In Heading.tsx
```tsx
const Heading = ({title}:{title: string}) => {
  return (
    <>
        <h1>{title}</h1>
    </>
  )
}

export default Heading;
```

In App.tsx
```tsx
import { useState } from 'react'
import Heading from './components/Heading'
import './App.css'

function App() {
  return (
    <>
      <Heading title="Welcome to my React App" />
    </>
  );
}

export default App;
```

### Dealing with children in the props (properties)
=> the type of children in the props is ReactNode 

In Heading.tsx
```tsx
import React, { ReactNode } from 'react'    // we must import ReactNode from 'react'

const Heading = (props:{title: string, children:ReactNode}) => {
  return (
    <>
        <h1>{props.title}</h1>
    </>
  )
}

export default Heading;
```

In App.tsx
```tsx
import { useState } from 'react'
import Heading from './components/Heading'
import './App.css'

function App() {
  return (
    <>
      <Heading title="Welcome to my React App">
        <span> Helooooo </span>
      </Heading>
    </>
  );
}
export default App;
```
---

### useState Hook
=> useState Hook is used for changing the state of an element when rendering or making an action

- you must import it from react first `import {useState} from 'react'`  
=> `const [state /*State variable*/,   setState  /*function that changes the state*/] = useState(false /*Default Value*/ );`

### Login Form

In Login.tsx
```tsx
import React from "react";

interface IProps {
  isLoggedIn: boolean;
  changeLoginState: (val: boolean) => void;
}

const Login = ({ isLoggedIn, changeLoginState }: IProps) => {
  return (
    <>
      <label htmlFor="email">Email :</label><br />
      <input type="email" id="email" /><br /><br />

      <label htmlFor="password">Password :</label><br />
      <input type="password" id="password" /><br /><br />   

      <button onClick={() => changeLoginState(!isLoggedIn)}>
        {isLoggedIn ? "LogOut" : "LogIn"}
      </button>
    </>
  );
};

export default Login;
```

In App.tsx
```tsx
import { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, changeLoginState] = useState(false);

  return (
    <>
      {isLoggedIn ? <h3>Welcome User</h3> : <Login isLoggedIn={isLoggedIn} changeLoginState={changeLoginState} />}
    </>
  );
}

export default App;
```
---

### Catching values from input and interacting with it

=> we usually use a state hook for every input

login.tsx
```tsx
import React, { useState } from "react";

interface IProps {
  isLoggedIn: boolean;
  changeLoginState: (val: boolean) => void;
}

const Login = ({ isLoggedIn, changeLoginState }: IProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">Email :</label><br />
      <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/> <br /><br />

      <label htmlFor="password">Password :</label><br />
      <input type="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/><br /><br />   

      <button onClick={() => changeLoginState(!isLoggedIn)}>
        {isLoggedIn ? "LogOut" : "LogIn"}
      </button>
    </form>
    </>
  );
};

export default Login;
```

App.tsx
```tsx
import { useState } from 'react';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, changeLoginState] = useState(false);

  return (
    <>
      {isLoggedIn ? <h3>Welcome User</h3> : <Login isLoggedIn={isLoggedIn} changeLoginState={changeLoginState} />}
    </>
  );
}

export default App;
```

### What will we do if we have many inputs (shall we make a new state for every input) ?!

=> DRY (Don't Repeat Yourself)

- Solution :
  => We will make an object with all the data we have to put

Login.tsx
```tsx
import React from "react";

interface IUserData {
  email: string;
  password: string;
}

interface IProps {
  isLoggedIn: boolean;
  changeLoginState: (val: boolean) => void;
  userData: IUserData;
  setData: (val: IUserData) => void;
}

const Login = ({isLoggedIn, changeLoginState, userData, setData}: IProps) => {


  // ** Handler
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setData({
      ...userData, 
      [name]: value 
    });
  }

  return (
    <>
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">Email :</label><br />
      <input type="email" id="email" value={userData.email} /> <br/><br/>

      <label htmlFor="password">Password :</label><br />
      <input type="password" id="password" value={userData.password} /> <br/><br/>   

      <button onClick={() => changeLoginState(!isLoggedIn)}>
        {isLoggedIn ? "LogOut" : "LogIn"}
      </button>
    </form>
    </>
  );
};

export default Login;
```

App.tsx
```tsx
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
```

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

--- 

### Component Life Cycle (class components) 

1. Mounting
  - `Constructor` => `Render` => `React updates DOM and refs` => `ComponentDidMount()-API`
2. Updating
  - `newProps/ setState()/ forceUpdate()` => `Render` => `React updates DOM and refs` => `ComponentDidUpdate()`
3. UnMounting
  - `newProps/ setState()/ forceUpdate()` => `Render` => `React updates DOM and refs` => `ComponentWillUnmount`

### rcc => extension of creating a class component
  
### Creating a Constructor in our project

App.tsx
```tsx
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
```

ComponentLifeCyclePage.tsx (using Life Cycle)
  - Example on `componentDidMount()` (API)
  - Example on `componentWillUnMount()` (Clearning Page)
  - Example on `componentUpdateMount()` (Updating the component when the state changes)
```tsx
import { Component } from "react";

interface Iprops {}
interface Istate {
  counter: number;
  products: any[];
}

interface IProduct {
  id: number;
  title: string;
}

export default class ComponentLifeCyclePage extends Component<Iprops, Istate> {
  
  
  // ** Component Life Cycle

  constructor(props: Iprops) {
    super(props);
    this.state = {
      counter: 0,
      products: [],
    };
  }

  // TODO Fetching data from an API when the component mounts
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ products: data.products });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  // TODO Cleanup code for enterng another page
  componentWillUnmount(): void {
    console.log("ProductsPage component is unmounting");
  }

  // TODO Updating the component when the state changes
  componentDidUpdate(prevState: Istate) {
    if (prevState.products !== this.state.products) {
      console.log("Products updated:", this.state.products);
    }
  }

  // ** ------------------------------------------------------------------
  
  // ** Component Render
  render() {
    return (
      <>
        <div className="max-w-4xl mx-auto py-4">
          <h1 className="text-2xl font-bold mb-4">Component Life Cycle</h1>
          <p className="mb-4">
            This page demonstrates the component life cycle in React.
          </p>
        </div>

        <div className="max-w-4xl mx-auto py-4">
          <p className="text-2xl font-bold mb-4">Counter</p>
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold">Counter: {this.state.counter}</p>
            <button
              onClick={() => this.setState({ counter: this.state.counter + 1 })}
              className=" border p-4 rounded-lg shadow-sm px-4 py-2  hover:bg-gray-300 transition duration-200"
              >
              Increase Counter
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {this.state.products &&
              this.state.products.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-sm"
                >
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                </div>
              ))}
          </div>

        </div>
      </>
    );
  }
}

```

HooksPage.tsx 
- `useEffect()` Hook => Replace component life cycle methods and makes you application more easier and more flexible

- Dependency List [] => If the array => The component will be executed only for the first time   
                     => If the array is filled with something => The component will be called once the variable that is filled in the array works
```tsx
import { useEffect, useState } from "react";

const HooksPage = () => {
  
  // ** States
  
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);

  // ** ----------------------------------------------------------------

  // ** Hooks

  // TODO This useEffect will run only once when the component mounts
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  // TODO This useEffect will run every time the component "counter" re-renders
  useEffect(() => {
    console.log("Counter changed:", counter);
  }, [counter]);

  // TODO This useEffect will clean up after itself when the component unmounts
  useEffect(() => {
    return () => {
      console.log("Cleanup after unmounting cleanup");
    };
  }, []);

  // TODO Requesting Data from API
  useEffect(() => {
    //  Request Cancelation (abort)
    //  The AbortController is used to cancel the fetch request if the component unmounts before the request completes    
    const controller = new AbortController();
    const signal = controller.signal; 
    
    // This useEffect will fetch products from an API and set them to the products state
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", { signal });
        const jsonData = await response.json();
        setProducts(jsonData.products);
        
        //or
        const response2 = await(await fetch("https://dummyjson.com/products", { signal })).json();
        setProducts(response2.products);

      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    // or (IIFE)
    (async()=>{
      try {
        const response2 = await(await fetch("https://dummyjson.com/products", { signal })).json();
        setProducts(response2.products);

      } catch (error) {
        console.log("Error fetching products:", error);
      }
    })()

    fetchProducts();

    // Clean up the request when the component unmounts
    return () => {
      controller.abort()
    };
  }, []);

  // ** ----------------------------------------------------------------


  return (
    <>
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4">Hooks Page</h1>
        <p className="mb-4">This page demonstrates the use of React hooks.</p>
      </div>
      
      <div className="max-w-4xl mx-auto py-4">
        <p className="text-2xl font-bold mb-4">Counter</p>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Counter: {counter}</p>
          <button
            onClick={() => setCounter(counter + 1)}
            className=" border p-4 rounded-lg shadow-sm px-4 py-2  hover:bg-gray-300 transition duration-200"
          >
            Increase Counter
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ id, title }: { id: number; title: string }) => (
            <div key={id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HooksPage;
```


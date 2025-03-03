# React Guide Sheet

**By:** Makrious Ayman  
**LinkedIn:** [Makrious Ayman](https://www.linkedin.com/in/makrious-ayman-84985621b/)  
**GitHub:** [Makrious Ayman](https://github.com/MakCoder-2004)

---

## libraries VS Frameworks

| libraries                                     | Frameworks                                                    |
|-----------------------------------------------|-------------------------------------------|
| Collection of reusable code                   | Right & Wrong ways to use                 |
| Reduce writing complex code from scratch      | Follows a specific pattern of development |
| Controlled when/how it is used (no boundries) | Work within certain boundries             |

---

## importing important libraries

| Import                                         | Usage                                                    |
|------------------------------------------------|----------------------------------------------------------|
| import { createRoot } from "react-dom/client"  | For creating the root that contains all the elements     | 
| import { createElemnet } from "react"          | For creating new elements                                |

---

## Provide Repetition

For example we will have our navbar repeated in many pages, instead of just copying many times we cando this :-

```jsx
// in the page jsx file
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World !</h1>
    </>
  )
}

export default App
```


```jsx
// in the main jsx file
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // importing the page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> // calling the content of the app page
  </StrictMode>,
)
```


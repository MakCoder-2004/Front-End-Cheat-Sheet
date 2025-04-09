import { RouterProvider } from 'react-router';
import  Router  from './Router';

const App = () => {
  return (
    <>
      <RouterProvider router={Router} /> {/* Use RouterProvider */}
    </>
  )  
};

export default App;
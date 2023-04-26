import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Components/Nav';

function App() {

  const router = createHashRouter(
    [
      {
        path: '/',
        element: <>
          <Nav />
          <Outlet />
        </>,
        children: [
          {
            path: '/',
            element: <Portfolio />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/contact',
            element: <Contact />
          }
        ]
      }
    ]
  )
  
  return (

    <RouterProvider router={router} />


  );
}

export default App;


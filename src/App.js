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


/*      <HashRouter>
        <Routes>
          <Route element= {<Layout />}>
            <Route path ="/" index element= {<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
      </HashRouter>
      */

      /*
      [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          path: 'portfolio',
          element: <Portfolio />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ]*/
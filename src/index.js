import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Vid from './Next';

const App = () => {
  return <div className='app'>
    <Navbar />
    <Outlet/>
  </div>
}
const ways = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "/video/:id",
        element: <Vid/>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways} />);


import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Appointment from '../Pages/Appointment/Appointment';
import Login from '../Pages/Account/Login';
export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main />,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: '/about',
            element: <About />,
         },
         {
            path: '/appointment',
            element: <Appointment />,
         },
         {
            path: '/login',
            element: <Login />,
         },
      ],
   },
]);

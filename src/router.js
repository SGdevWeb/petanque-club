import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import Equipes from './pages/Equipes/Equipes';
import Photos from './pages/Photos/Photos';
import Actu from './pages/Actu/Actu';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/Actu',
        element: <Actu />,
        },
      {
      path: '/Equipes',
      element: <Equipes />,
      },
      {
        path: '/Photos',
        element: <Photos />
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);
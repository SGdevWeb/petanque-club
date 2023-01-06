import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import Equipes from './pages/Equipes/Equipes';
import Photos from './pages/Photos/Photos';
import Actu from './pages/Actu/Actu';
import CoupeDeFrance from './pages/Saison/pages/CoupeDeFrance/CoupeDeFrance';
import Saison from './pages/Saison/Saison';
import Championnats from './pages/Saison/pages/Championnats/Championnats';
import ConcoursHivernaux from './pages/Saison/pages/Championnats/Concours-hivernaux/ConcoursHivernaux';
import ConcoursNationaux from './pages/Saison/pages/Championnats/Concours-nationaux/ConcoursNationaux';
import AutresConcours from './pages/Saison/pages/Championnats/Autres-concours/AutresConcours';
import Club from './pages/Club/Club';
import Comite from './pages/Club/pages/Comite/Comite';
import Licences from './pages/Club/pages/Licences/Licences';
import Partenaires from './pages/Club/pages/Partenaires/Partenaires';
import Horaires from './pages/Club/pages/Horaires/Horaires';
import ConcoursSocietaire from './pages/Club/pages/ConcoursSocietaire/ConcoursSocietaire';

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
      path: '/Club',
      element: <Club />,
      children: [
        {
          path: '/Club/Comite',
          element: <Comite />
        },
        {
          path: '/Club/Licences',
          element: <Licences />
        },
        {
          path: '/Club/Partenaires',
          element: <Partenaires />
        },
        {
          path: '/Club/Horaires',
          element: <Horaires />
        },
        {
          path: '/Club/Concours-societaire',
          element: <ConcoursSocietaire />
        },
      ]
      },
      {
        path: '/Saison',
        element: <Saison />,
        children: [
          {
            path:'/Saison/Coupe-de-france',
            element: <CoupeDeFrance />
          },
          {
            path:'/Saison/Championnats',
            element: <Championnats />
          },
          {
            path:'/Saison/Concours-hivernaux',
            element: <ConcoursHivernaux />
          },
          {
            path:'/Saison/Concours-nationaux',
            element: <ConcoursNationaux />
          },
          {
            path:'/Saison/Autres-concours',
            element: <AutresConcours />
          },
        ]
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
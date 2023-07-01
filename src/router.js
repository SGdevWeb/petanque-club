import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Contact from "./pages/Contact/Contact";
import Equipes from "./pages/Equipes/Equipes";
import Photos from "./pages/Photos/Photos";
import Actu from "./pages/Actu/Actu";
import CoupeDeFrance from "./pages/Saison/pages/CoupeDeFrance/CoupeDeFrance";
import Saison from "./pages/Saison/Saison";
import Championnats from "./pages/Saison/pages/Championnats/Championnats";
import ConcoursHivernaux from "./pages/Saison/pages/Concours-hivernaux/ConcoursHivernaux";
import ConcoursNationaux from "./pages/Saison/pages/Concours-nationaux/ConcoursNationaux";
import AutresConcours from "./pages/Saison/pages/Autres-concours/AutresConcours";
import Club from "./pages/Club/Club";
import Comite from "./pages/Club/pages/Comite/Comite";
import Licences from "./pages/Club/pages/Licences/Licences";
import Partenaires from "./pages/Club/pages/Partenaires/Partenaires";
import Horaires from "./pages/Club/pages/Horaires/Horaires";
import ConcoursSocietaire from "./pages/Club/pages/ConcoursSocietaire/ConcoursSocietaire";
import Article from "./components/Article/Article";
import Gallery from "./pages/Photos/pages/Gallery/Gallery";
import Photo from "./pages/Photos/pages/Gallery/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/Actu",
        element: <Actu />,
      },
      {
        path: "/Actu/article/:id",
        element: <Article />,
      },
      {
        path: "/Equipes",
        element: <Equipes />,
      },
      {
        path: "/Club",
        element: <Club />,
        children: [
          {
            path: "Comité",
            element: <Comite />,
          },
          {
            path: "Licences",
            element: <Licences />,
          },
          {
            path: "Partenaires",
            element: <Partenaires />,
          },
          {
            path: "Horaires",
            element: <Horaires />,
          },
          {
            path: "Concours-sociétaire",
            element: <ConcoursSocietaire />,
          },
        ],
      },
      {
        path: "/Saison",
        element: <Saison />,
        children: [
          {
            path: "Coupe-de-france",
            element: <CoupeDeFrance />,
          },
          {
            path: "Championnats",
            element: <Championnats />,
          },
          {
            path: "Concours-hivernaux",
            element: <ConcoursHivernaux />,
          },
          {
            path: "Concours-nationaux",
            element: <ConcoursNationaux />,
          },
          {
            path: "Autres-concours",
            element: <AutresConcours />,
          },
        ],
      },
      {
        path: "/Photos",
        element: <Photos />,
      },
      {
        path: "/Photos/:id",
        element: <Gallery />,
      },
      {
        path: "/Photos/:id/:title",
        element: <Photo />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

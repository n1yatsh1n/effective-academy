import { Navigate } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Characters from "./pages/characters/Characters";
import Comics from "./pages/comics/Comics";
import CharacterPage from "./pages/characterPage/CharacterPage";
import ComicsPage from "./pages/comicsPage/ComicsPage";

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Navigate to="/characters" replace /> },
        { path: "characters", element: <Characters /> },
        { path: "comics", element: <Comics /> },
        { path: "characters/:id", element: <CharacterPage /> },
        { path: "comics/:id", element: <ComicsPage /> },
      ],
    },
  ];

  return useRoutes(routes);
}

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { News } from "./pages/News";
import { SchoolManagement } from "./pages/SchoolManagement";
import { Course } from "./pages/Course";
import { SchoolPhotos } from "./components/SchoolPhotos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/manager",
    element: <SchoolManagement />,
  },
  {
    path: "/curso/:curso",
    element: <Course />,
  },
  {
    path: "/curso/imagensEscola",
    element: <SchoolPhotos />,
  },
]);

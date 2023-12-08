import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Filter } from "./pages/Filter";
import { News } from "./pages/News";
import { NewsArea } from "./components/NewsArea";
import { Description } from "./pages/Description";
/* import { Approved } from "./components/Approveds";
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  
  {
      path: "/areaDeNoticias",
      element: <NewsArea />
  },
  
  {
    path: "/news/:newsId",
    element: <News />,
  },

  {
    path: "/descricao",
    element: <Description/>
  },
  
]);

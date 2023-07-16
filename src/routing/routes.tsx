import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ExpandedTodoPage from "../pages/ExpandedTodoPage";
import EditTodoPage from "../pages/EditTodoPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/todos/:id",
    element: <ExpandedTodoPage />,
  },
  {
    path: "/todos/:id/edit",
    element: <EditTodoPage />,
  },
]);

export default router;

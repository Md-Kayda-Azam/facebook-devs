import { createBrowserRouter } from "react-router-dom";
import MainHome from "../page/Home/MainHome";
import LogOutRoute from "../privateRoute/LogOutRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome />,
  },
  {
    element: <LogOutRoute>{}</LogOutRoute>,
  },
]);

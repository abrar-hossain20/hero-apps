import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from './../Pages/ErrorPage';
import AppDetails from './../Pages/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
    ],
  },
]);

export default router;

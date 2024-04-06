import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Bg from "pages/Bg";
import Logindarkmode from "pages/Logindarkmode";
import Login from "pages/Login";
import Signup from "pages/Signup";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "bg",
      element: <Bg />,
    },
    {
      path: "logindarkmode",
      element: <Logindarkmode />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

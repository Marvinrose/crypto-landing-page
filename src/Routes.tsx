import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import CryptoLanding from "pages/CryptoLanding";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <CryptoLanding /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;

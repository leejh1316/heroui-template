import React from "react";
import { createBrowserRouter } from "react-router";

export const routes = [
  {
    name: "main",
    iconName: "home",
    path: "/",
    Component: React.lazy(() => import("@domain/main/MainPage")),
  },
  {
    path: "/start",
    Component: React.lazy(() => import("@domain/start/StartPage")),
  },
];

const toRouteObjects = routes => routes.map(({ name, iconName, ...rest }) => ({ ...rest }));

const router = createBrowserRouter(toRouteObjects(routes));

export default router;

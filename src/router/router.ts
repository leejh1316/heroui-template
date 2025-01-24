import React from "react";
import { createBrowserRouter, RouteObject, MetaRouteObject } from "react-router";

export const routes: MetaRouteObject[] = [
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

const toRouteObjects = (routes: MetaRouteObject[]): RouteObject[] =>
  routes.map(({ name, iconName, ...rest }) => ({ ...rest }));

const router = createBrowserRouter(toRouteObjects(routes));

export default router;

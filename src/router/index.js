import React from "react";
import { createBrowserRouter } from "react-router";

const metaRoutes = [
  {
    path: "/",
    Component: React.lazy(() => import("@src/App")),
    children: [
      {
        name: "home",
        iconName: "home",
        path: "/",
        Component: React.lazy(() => import("@src/domain/main")),
      },
      {
        name: "authSingle",
        iconName: "home",
        isNavItem: true,
        path: "/start",
        isAuth: true,
        Component: React.lazy(() => import("@src/domain/start")),
      },
      {
        name: "인증메뉴",
        iconName: "home",
        isNavItem: true,
        isAuth: true,
        path: "/start",
        Component: React.lazy(() => import("@src/domain/start")),
        children: [
          {
            name: "인증메뉴1(noAuth)",
            iconName: "home",
            path: "/start",
            isNavItem: true,
            isAuth: true,
            Component: React.lazy(() => import("@src/domain/start")),
          },
          {
            name: "인증메뉴2",
            iconName: "home",
            isNavItem: true,
            isAuth: true,
            path: "/start",
            Component: React.lazy(() => import("@src/domain/start")),
          },
        ],
      },
      {
        name: "게시판",
        iconName: "support_agent",
        path: "/",
        isNavItem: true,
        Component: React.lazy(() => import("@src/domain/main")),
      },
      {
        name: "추위",
        iconName: "support_agent",
        path: "/",
        isNavItem: true,
        Component: React.lazy(() => import("@src/domain/main")),
        children: [
          {
            name: "너무춥다다",
            path: "/",
            isNavItem: true,
            Component: React.lazy(() => import("@src/domain/main")),
            iconName: "hourglass_empty",
          },
          {
            name: "정말춥다다",
            isNavItem: true,
            path: "/",
            Component: React.lazy(() => import("@src/domain/main")),
            iconName: "history",
          },
        ],
      },
      {
        name: "고객센터",
        iconName: "support_agent",
        path: "/",
        isNavItem: true,
        Component: React.lazy(() => import("@src/domain/main")),
        children: [
          {
            name: "QNA",
            isNavItem: true,
            path: "/",
            Component: React.lazy(() => import("@src/domain/main")),
            iconName: "support_agent",
          },
          {
            name: "FAQ",
            isNavItem: true,
            path: "/",
            Component: React.lazy(() => import("@src/domain/main")),
            iconName: "support_agent",
          },
        ],
      },
      {
        name: "login",
        iconName: "login",
        path: "/login",
        Component: React.lazy(() => import("@src/domain/login")),
        handle: {
          hideHeader: true,
        },
      },
    ],
  },
];

// const toRouteObjects = (routes: MetaRouteObject[]): RouteObject[] =>
//   routes.map(({ name, iconName, children, ...rest }) => ({
//     ...rest,
//     children: children ? toRouteObjects(children) : undefined,
//   })) as RouteObject[];

const router = createBrowserRouter(metaRoutes);

const routes = [...metaRoutes[0].children, ...metaRoutes.slice(1)];

export { routes };
export default router;

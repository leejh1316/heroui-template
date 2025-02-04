import IconName from "@src/components/common/IconName";
import "react-router";
import { RouteObject, useMatches, UIMatch } from "react-router";

declare module "react-router" {
  export function useMatches<Data = unknown, Handle = unknown>(): UIMatch<Data, Handle>[];
  export type MetaRouteObject = RouteObject & {
    name?: string;
    iconName?: IconName;
    isNavItem?: boolean;
    isAuth?: boolean;
    children?: MetaRouteObject[];
  };
}

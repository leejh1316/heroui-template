import IconName from "@src/components/common/IconName";
import "react-router";
import { RouteObject } from "react-router";

declare module "react-router" {
  export type MetaRouteObject = RouteObject & {
    name?: string;
    iconName?: IconName;
  };
}

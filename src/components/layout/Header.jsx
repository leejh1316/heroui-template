import { Icon } from "@components/common/Icon";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Navbar,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { routes } from "@src/router";
import { useMatches, useNavigate } from "react-router";

export function Header() {
  // store라 가정
  const user = { name: "lee", auth: true };
  const navigate = useNavigate();
  const isHideHeader = useMatches().some(match => match.handle?.hideHeader);

  function getNavItems(routes) {
    const navs = routes.filter(route => route.isNavItem && (route.isAuth ? user.auth : true));
    return navs.map(({ children, ...route }) => {
      return {
        ...route,
        children: children ? getNavItems(children) : undefined,
      };
    });
  }

  const navItems = getNavItems(routes);

  console.log(navItems);
  return isHideHeader ? null : (
    <header className="sticky top-0 bg-white">
      <section>
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
          <h1>
            <Button onPress={() => navigate("/")} variant="light" className="text-2xl font-bold">
              TIME STORE
            </Button>
          </h1>
          <div className="w-full max-w-80">
            <Input
              placeholder="최대 2% 할인"
              type="search"
              endContent={<Icon className="text-gray-400" iconName="search" />}
            />
          </div>
          <div className="flex items-center space-x-1">
            <Button isIconOnly aria-label="notifications" variant="light">
              <Icon iconName="notifications" />
            </Button>
            <Button isIconOnly aria-label="shopping_cart" variant="light">
              <Icon iconName="shopping_cart" />
            </Button>
            <Button onPress={() => navigate("/login")} isIconOnly aria-label="person" variant="light">
              <Icon iconName="person" />
            </Button>
          </div>
        </div>
      </section>
      <section>
        <Navbar position="static" maxWidth="full" className="mx-auto max-w-screen-xl">
          <NavbarContent>
            {navItems.map(route =>
              route.children ? (
                <Popover key={route.name} placement="bottom">
                  <PopoverTrigger>
                    <Button variant="light">{route.name}</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div>
                      <Listbox>
                        {route.children.map(child => (
                          <ListboxItem key={child.name}>
                            <Icon iconName={child.iconName} className="mr-2" />
                            {child.name}
                          </ListboxItem>
                        ))}
                      </Listbox>
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
                <NavbarItem key={route.name}>
                  <Button variant="light" onPress={() => navigate(route.path)}>
                    {route.name}
                  </Button>
                </NavbarItem>
              ),
            )}
          </NavbarContent>
        </Navbar>
      </section>
    </header>
  );
}

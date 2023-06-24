import { useRouter } from "next/router";
import Menu from "./Subcomponents/Menu";

const data = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Finance",
    path: "/finance",
  },
  {
    name: "Send and Request",
    path: "/send-and-request",
  },
  {
    name: "Deals",
    path: "/deals",
  },
  {
    name: "Wallet",
    path: "/wallet",
  },
  {
    name: "Activity",
    path: "/activity",
  },
  {
    name: "Help",
    path: "/help",
  },
];

/**
 * All menus that will be displayed on Desktop
 * @returns JSX Element
 */
const Menus = () => {
  /* using route from useRouter to get current page path */
  const { route } = useRouter();
  return (
    <ul className="flex items-center space-x-1.5">
      {data.map((menu) => (
        <Menu
          key={menu.path}
          name={menu.name}
          link={menu.path}
          isActive={route === menu.path}
        />
      ))}
    </ul>
  );
};

export default Menus;

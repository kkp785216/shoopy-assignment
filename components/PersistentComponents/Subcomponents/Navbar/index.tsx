import NavbarDesktop from "./Subcomponents/Desktop";

/**
 * navbar bar for both mobile and desktop
 * @returns JSX Element
 */
const Navbar = () => {
  return (
    <nav className="bg-[#142c8e] h-24 flex items-center">
      <NavbarDesktop />
    </nav>
  );
};

export default Navbar;

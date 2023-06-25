import Navbar from "./Subcomponents/Navbar";

type Props = {
  children: React.ReactNode;
};

/**
 * Layout of project which will be consitent on each page
 * @param param0 children as React component will be rendered as the content of particular page
 * @returns JSX Element
 */
const PresistentComponents = ({ children }: Props) => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {children}
    </>
  );
};

export default PresistentComponents;

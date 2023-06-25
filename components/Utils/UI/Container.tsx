import { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Overall app container
 * @returns JSX Element
 */
const Container = ({ children, ...props }: Props) => {
  return (
    <div className="container mx-auto px-5" {...props}>
      <div className="w-[92%] px-10 mx-auto">{children}</div>
    </div>
  );
};

export default Container;

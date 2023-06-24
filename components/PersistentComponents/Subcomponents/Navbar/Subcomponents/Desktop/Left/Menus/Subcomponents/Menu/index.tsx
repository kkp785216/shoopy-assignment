import Link from "next/link";

type Props = {
  name: string;
  link: string;
  isActive?: boolean;
};

const Menu = ({ name, link, isActive }: Props) => {
  return (
    <li>
      <Link
        className={`text-base font-medium text-[#d1f1ff] block px-4 py-2 border-transparent hover:border-[#d1f1ff33] border border-solid rounded-full ${
          isActive ? "bg-[#d1f1ff1a] hover:border-transparent" : ""
        }`}
        href={link}
      >
        {name}
      </Link>
    </li>
  );
};

export default Menu;

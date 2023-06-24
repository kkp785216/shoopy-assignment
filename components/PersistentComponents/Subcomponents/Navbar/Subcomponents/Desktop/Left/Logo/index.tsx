import Image from "next/image";
import paypal from "../../../assets/paypal.svg";
import Link from "next/link";

/**
 * the logo of paypal project
 * @returns JSX Element
 */
const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="w-8 h-8"
        src={paypal.src}
        width={paypal.width}
        height={paypal.height}
        alt=""
      />
    </Link>
  );
};

export default Logo;

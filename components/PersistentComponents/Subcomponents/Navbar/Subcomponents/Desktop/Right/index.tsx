import Image from "next/image";
import Link from "next/link";
import SettingIcon from "../../assets/SettingIcon";
import NotificationIcon from "../../assets/NotificationIcon";

/**
 * the header right part for desktop view
 * @returns JSX Element
 */
const Right = () => {
  return (
    <div className="flex items-center space-x-5 text-[#d1f1ff]">
      <Link href="#">
        <NotificationIcon className="w-6 h-6"/>
      </Link>
      <Link href="/profile">
        <SettingIcon className="w-6 h-6"/>
      </Link>
      <Link href="/logout" className="font-medium text-sm">LOG OUT</Link>
    </div>
  );
};

export default Right;

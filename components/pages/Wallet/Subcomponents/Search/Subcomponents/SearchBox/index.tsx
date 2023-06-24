import SearchIcon from "./assets/SearchIcon";
import { Context } from "@/components/pages/Wallet/context/StateContext/Context";
import { useContext } from "react";

/**
 * Search box in which can be searched tranjection quries
 * @returns JSX Element
 */
const SearchBox = () => {
  const { searchValue, searchDispatch } = useContext(Context);
  return (
    <div className="relative my-10 flex-auto">
      <SearchIcon className="absolute top-0 left-6 bottom-0 m-auto w-6 h-6 pointer-events-none" />
      <input
        className="w-full py-4 rounded-full pr-6 pl-16 text-lg font-medium focus"
        type="text"
        placeholder="Search by name or email"
        value={searchValue}
        onChange={(e) => searchDispatch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

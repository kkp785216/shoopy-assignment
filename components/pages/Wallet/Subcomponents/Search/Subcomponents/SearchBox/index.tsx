import SearchIcon from "./assets/SearchIcon";

/**
 * Search box in which can be searched tranjection quries
 * @returns JSX Element
 */
const SearchBox = () => {
  return (
    <div className="relative my-10">
      <SearchIcon className="absolute top-0 left-6 bottom-0 m-auto w-6 h-6 pointer-events-none" />
      <input
        className="w-full py-4 rounded-full pr-6 pl-16 text-lg font-medium focus"
        type="text"
        placeholder="Search by name or email"
      />
    </div>
  );
};

export default SearchBox;

import Download from "./Subcomponents/Download";
import SearchBox from "./Subcomponents/SearchBox";

/**
 * Search box for search tranjections
 * @returns JSX Eleent
 */
const Search = () => {
  return (
    <div className="flex items-center justify-between space-x-5 mt-10 mb-6">
      <SearchBox />
      <Download />
    </div>
  );
};

export default Search;

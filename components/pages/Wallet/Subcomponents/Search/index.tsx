import Download from "./Subcomponents/Download";
import SearchBox from "./Subcomponents/SearchBox";

const Search = () => {
  return (
    <div className="flex items-center justify-between space-x-5">
      <SearchBox />
      <Download />
    </div>
  );
};

export default Search;

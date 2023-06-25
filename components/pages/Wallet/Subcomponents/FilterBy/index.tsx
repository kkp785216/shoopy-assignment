import FilterStatus from "./Subcomponents/FilterStatus";
import FilterTypes from "./Subcomponents/FilterTypes";

const FilterBy = () => {
  return (
    <div>
      <h3 className="font-medium text-lg">Filter By</h3>
      <div className="mt-3 flex space-x-4 items-center">
        <FilterTypes />
        <FilterStatus />
      </div>
    </div>
  );
};

export default FilterBy;

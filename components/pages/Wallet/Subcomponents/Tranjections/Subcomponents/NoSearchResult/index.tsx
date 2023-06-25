import { Context } from "@/components/pages/Wallet/context/StateContext/Context";
import { useContext } from "react";

/**
 * Ui for when no search result found
 * @returns JSX Element
 */
const NoSearchResult = () => {
  const { searchValue } = useContext(Context);
  return (
    <div className="flex items-center flex-col min-h-[15.6rem] justify-center py-5 px-3">
      <h2 className="text-2xl font-medium mb-2">No result found.</h2>
      <p className="text-lg font-medium text-gray-700">
        We couldn&apos;t find anything for <strong>{searchValue}</strong>. Try a
        new search.
      </p>
    </div>
  );
};

export default NoSearchResult;

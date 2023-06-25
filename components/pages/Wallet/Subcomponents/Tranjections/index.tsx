import tranjectionData from "@/lib/data/transjections.json";
import Tranjection from "./Subcomponents/Tranjection";
import { useContext } from "react";
import { Context } from "../../context/StateContext/Context";
import NoTranjections from "./Subcomponents/NoTranjections";
import { compareDate } from "@/utils/wallet/paymentDatesRange";
import NoSearchResult from "./Subcomponents/NoSearchResult";

/**
 * All tranjections - can be manuplated by filteration
 * @returns JSX Element
 */
const Tranjections = () => {
  /* filter context values */
  const { paymentType, statusType, searchValue, paymentDate } =
    useContext(Context);

  /* Filtered data as filter applied */
  const filteredData = tranjectionData
    .filter((e) =>
      searchValue
        ? e.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        : !!e
    )
    .filter((e) => (paymentType ? e.type === paymentType : !!e))
    .filter((e) => (statusType ? e.status === statusType : !!e))
    .filter((e) => (paymentDate ? compareDate(e.date, paymentDate) : !!e));

  return (
    <div>
      {
        <h2 className="mt-3.5 font-medium text-lg">
          Status: {statusType || "All"}
        </h2>
      }
      {filteredData.length > 0 ? (
        filteredData.map((tranjection) => (
          <Tranjection key={tranjection.transaction_id} entry={tranjection} />
        ))
      ) : (
        <>{searchValue ? <NoSearchResult /> : <NoTranjections />}</>
      )}
    </div>
  );
};

export default Tranjections;

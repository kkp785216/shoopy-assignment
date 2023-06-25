import tranjectionData from "@/lib/data/transjections.json";
import Tranjection from "./Subcomponents/Tranjection";
import { useContext } from "react";
import { Context } from "../../context/StateContext/Context";
import NoTranjections from "./Subcomponents/NoTranjections";

const Tranjections = () => {
  const { paymentType, statusType, searchValue } = useContext(Context);
  const filteredData = tranjectionData
    .filter((e) => (paymentType ? e.type === paymentType : e))
    .filter((e) => (statusType ? e.status === statusType : e))
    .filter((e) =>
      searchValue
        ? e.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        : e
    );
  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((tranjection) => (
          <Tranjection key={tranjection.transaction_id} entry={tranjection} />
        ))
      ) : (
        <NoTranjections />
      )}
    </div>
  );
};

export default Tranjections;

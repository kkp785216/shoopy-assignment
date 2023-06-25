import { paymentStatus } from "@/lib/structure/structure";
import React, { ChangeEvent, useContext } from "react";
import FilterButton from "../../Utils/FilterButton";
import { Context } from "@/components/pages/Wallet/context/StateContext/Context";
import { StatusType } from "@/components/pages/Wallet/context/StateContext/useContextState";

const FilterStatus = () => {
  const { statusType, statusTypeDispatch } = useContext(Context);
  return (
    <FilterButton
      title="Status"
      activeFilter={statusType}
      filterList={paymentStatus}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        statusTypeDispatch(event.target.value as StatusType)
      }
      onReset={() => statusTypeDispatch(null)}
    />
  );
};

export default FilterStatus;

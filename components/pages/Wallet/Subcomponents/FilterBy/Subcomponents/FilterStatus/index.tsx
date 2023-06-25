import { PaymentStatusType, paymentStatus } from "@/lib/structure/structure";
import React, { ChangeEvent, useContext } from "react";
import FilterButton from "../../Utils/FilterButton";
import { Context } from "@/components/pages/Wallet/context/StateContext/Context";

const FilterStatus = () => {
  const { statusType, statusTypeDispatch } = useContext(Context);
  return (
    <FilterButton
      title="Status"
      activeFilter={statusType}
      filterList={paymentStatus}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        statusTypeDispatch(event.target.value as PaymentStatusType)
      }
      onReset={() => statusTypeDispatch(null)}
    />
  );
};

export default FilterStatus;

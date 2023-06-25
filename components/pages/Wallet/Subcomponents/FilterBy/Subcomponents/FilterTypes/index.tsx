import { paymentTypes } from "@/lib/structure/structure";
import React, { ChangeEvent, useContext } from "react";
import FilterButton from "../../Utils/FilterButton";
import { Context } from "@/components/pages/Wallet/context/StateContext/Context";
import { PaymentType } from "@/components/pages/Wallet/context/StateContext/useContextState";

const FilterTypes = () => {
  const { paymentType, paymetTypeDispatch } = useContext(Context);
  return (
    <FilterButton
      title="Type"
      activeFilter={paymentType}
      filterList={paymentTypes}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        paymetTypeDispatch(event.target.value as PaymentType)
      }
      onReset={() => paymetTypeDispatch(null)}
    />
  );
};

export default FilterTypes;

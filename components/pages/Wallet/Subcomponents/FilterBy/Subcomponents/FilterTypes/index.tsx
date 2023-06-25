import { PaymentTypesType, paymentTypes } from "@/lib/structure/structure";
import React, { ChangeEvent, useContext } from "react";
import FilterButton from "../../Utils/FilterButton";
import { Context } from "@/components/pages/Wallet/context/StateContext/Context";

/**
 * filter by payment type
 * @returns JSX Element
 */
const FilterTypes = () => {
  const { paymentType, paymetTypeDispatch } = useContext(Context);
  return (
    <FilterButton
      title="Type"
      activeFilter={paymentType}
      filterList={paymentTypes}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        paymetTypeDispatch(event.target.value as PaymentTypesType)
      }
      onReset={() => paymetTypeDispatch(null)}
    />
  );
};

export default FilterTypes;

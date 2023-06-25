import { PaymentDatesType, paymentDates } from "@/lib/structure/structure";
import React, { ChangeEvent, useContext } from "react";
import FilterButton from "../../Utils/FilterButton";
import { Context } from "@/components/pages/Wallet/context/StateContext/Context";

const FilterDates = () => {
  const { paymentDate, paymentDateDispatch } = useContext(Context);
  return (
    <FilterButton
      title="Dates"
      activeFilter={paymentDate}
      filterList={paymentDates}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        paymentDateDispatch(event.target.value as PaymentDatesType)
      }
    />
  );
};

export default FilterDates;

import {
  PaymentDatesType,
  PaymentStatusType,
  PaymentTypesType,
} from "@/lib/structure/structure";
import { useState } from "react";

const useContextState = () => {
  const [searchValue, searchDispatch] = useState("");
  const [paymentType, paymetTypeDispatch] = useState<null | PaymentTypesType>(
    null
  );
  const [statusType, statusTypeDispatch] = useState<null | PaymentStatusType>(
    null
  );
  const [paymentDate, paymentDateDispatch] = useState<null | PaymentDatesType>(
    null
  );

  return {
    searchValue,
    searchDispatch,
    paymentType,
    paymetTypeDispatch,
    statusType,
    statusTypeDispatch,
    paymentDate,
    paymentDateDispatch,
  };
};

type ContextDataType = ReturnType<typeof useContextState>;

export { useContextState };
export type { ContextDataType };

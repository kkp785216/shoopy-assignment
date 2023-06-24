import { useState } from "react";

type PaymentType =
  | "Automatic Payment"
  | "Payments"
  | "Payment Received"
  | "Refunds"
  | "Transfers"
  | "Reported Tranjections";

type StatusType =
  | "Incomming payments to review"
  | "Tracking numbers to add"
  | "Shiping levels to print"
  | "Payment request to review"
  | "Invice to pay"
  | "Holds"
  | "Completed";

const useContextState = () => {
  const [searchValue, searchDispatch] = useState("");
  const [paymentType, paymetTypeDispatch] = useState<null | PaymentType>(null);
  const [statusType, statusTypeDispatch] = useState<null | StatusType>(null);

  return {
    searchValue,
    searchDispatch,
    paymentType,
    paymetTypeDispatch,
    statusType,
    statusTypeDispatch,
  };
};

type ContextDataType = ReturnType<typeof useContextState>;

export { useContextState };
export type { ContextDataType, PaymentType, StatusType };

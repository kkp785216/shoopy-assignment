const paymentTypes = [
  "Automatic Payment",
  "Payments",
  "Payment Received",
  "Refunds",
  "Transfers",
  "Reported Tranjections",
] as const;

const paymentStatus = [
  "Incomming payments to review",
  "Tracking numbers to add",
  "Shiping levels to print",
  "Payment request to review",
  "Invice to pay",
  "Holds",
  "Completed",
] as const;

const paymentDates = [
  "This Month",
  "Last Month",
  "Last 90 days",
  "This year",
  "Last year",
] as const;

type PaymentStatusType = (typeof paymentStatus)[number];
type PaymentDatesType = (typeof paymentDates)[number];
type PaymentTypesType = (typeof paymentTypes)[number];

export { paymentStatus, paymentTypes, paymentDates };
export type { PaymentDatesType, PaymentTypesType, PaymentStatusType };

import { PaymentDatesType } from "@/lib/structure/structure";

const paymentDatesRange = (dateType: PaymentDatesType) => {
  const currentDate = new Date(); // Get the current date and time
  switch (dateType) {
    case "This Month":
      const currentMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ); // Set the date to the first day of the current month
      return {
        start: currentMonthDate.getTime(),
        end: currentDate.getTime(),
      };
    case "Last Month":
      const lastMonthStartDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      ); // Set the date to the first day of the last month
      const lastMonthEndDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ); // Set the date to the last day of the last month
      return {
        start: lastMonthStartDate.getTime(),
        end: lastMonthEndDate.getTime(),
      };
    case "Last 90 days":
      const ninetyDaysAgo = new Date();
      ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90); // Set the date to 90 days ago
      return {
        start: ninetyDaysAgo.getTime(),
        end: currentDate.getTime(),
      };
    case "This year":
      const currentYearStartDate = new Date(currentDate.getFullYear(), 0, 1); // Set the date to the first day of the current year
      return {
        start: currentYearStartDate.getTime(),
        end: currentDate.getTime(),
      };
    case "Last year":
      const lastYearStartDate = new Date(currentDate.getFullYear() - 1, 0, 1); // Set the date to the first day of the last year
      const lastYearEndDate = new Date(currentDate.getFullYear() - 1, 11, 31); // Set the date to the last day of the last year
      return {
        start: lastYearStartDate.getTime(),
        end: lastYearEndDate.getTime(),
      };
    default:
      return {
        start: 0,
        end: 0,
      };
  }
};

const compareDate = (date: string, dateType: PaymentDatesType) => {
  const currentDateMS = new Date(date).getTime();
  if (
    currentDateMS > paymentDatesRange(dateType).start &&
    currentDateMS < paymentDatesRange(dateType).end
  ) {
    return true;
  } else {
    return false;
  }
};

export { paymentDatesRange, compareDate };

export const getDaysInMonth = (year: number, month: number) => {
  const daysCount = new Date(year, month, 0).getDate();
  return [...new Array(daysCount)].map((_, index) => (index + 1).toString());
};

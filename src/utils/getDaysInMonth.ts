export const getDaysInMonth = (year: number, month: number) => {
  const daysCount = new Date(year, month, 0).getDate();
  console.log(year, month, daysCount);
  return [...new Array(daysCount)].map((_, index) => (index + 1).toString());
};

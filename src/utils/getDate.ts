export const getDate = (year: string, month: string, day: string) =>
  new Date(`${month} ${day}, ${year}`);

export const getDate = (year: number, month: string, day: number) =>
  new Date(`${month} ${day}, ${year}`);

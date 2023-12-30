import { MONTHS } from '@/constants/selectOptions';

export const getDateValuesFromISOString = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const day = date.getDate();

  return {
    year,
    month,
    day,
  };
};

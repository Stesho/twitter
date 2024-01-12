export const getYearsInRange = (startYear: number, finishYear: number) =>
  [...new Array(finishYear - startYear + 1)].map((_, index) =>
    (startYear + index).toString(),
  );

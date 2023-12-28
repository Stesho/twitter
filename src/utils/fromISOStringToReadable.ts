export const fromISOStringToReadable = (stringDate: string) => {
  const date = new Date(stringDate);

  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const adaptiveFont = (pcSize: number, mobSize: number) => {
  const addSize = pcSize - mobSize;
  const maxWidth = 1920 - 320;
  return `
    calc(${mobSize}px + ${addSize} * ((100vw - 320px) / ${maxWidth}));
  `;
};

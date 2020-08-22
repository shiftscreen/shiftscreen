export const generateRandomKey = (): string => {
  const ids = [1, 2, 3];
  const toRandom = () => Math.floor(Math.random() * 899) + 100; // between 100 and 999
  return ids
    .map(toRandom)
    .toString()
    .replace(/,/g,"-");
};

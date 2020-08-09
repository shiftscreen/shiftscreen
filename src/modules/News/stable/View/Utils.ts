const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gm;

export const getIdFromUrl = (url: string): string | undefined => {
  const iterator = url.matchAll(regex);
  const value = iterator.next()?.value || [];
  return value[1];
};

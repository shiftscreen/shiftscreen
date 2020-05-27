import { red, green, blue, cyan, volcano } from '@ant-design/colors';

const colors = [red, green, blue, cyan, volcano];

export const getAvatarColor = (title: string): string => {
  const firstLetterCharCode = title.charCodeAt(0);
  const secondLetterCharCode = title.charCodeAt(1) || 65;

  const colorIndex = firstLetterCharCode % 5;
  const hueIndex = (secondLetterCharCode % 5) + 2;

  return colors[colorIndex][hueIndex];
};

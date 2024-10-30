import colorsPalette from '@/consts/prefectureColors';

export const getColor = (index: number) => {
  return colorsPalette[index % colorsPalette.length];
};

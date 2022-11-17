import { hexToRgba } from '@datacamp/waffles/helpers';

// Generate color scale of 11 colors with 0.1 opacity increment
// The first color is `primaryColor` and the last one is `secondaryColor`
function colorScale(primaryColor: string, secondaryColor: string) {
  return [
    ...Array.from({ length: 10 }, (_, index) => {
      return hexToRgba(primaryColor, (10 - index) * 0.1);
    }),
    secondaryColor,
  ];
}

export default colorScale;

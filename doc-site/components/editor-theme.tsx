import { tokens } from '@datacamp/waffles/tokens';

const theme = {
  plain: {
    backgroundColor: 'transparent',
    color: tokens.colors.greySubtle,
    fontFamily: tokens.fontFamilies.mono,
    fontSize: tokens.fontSizes.medium,
    margin: 0,
  },
  styles: [
    {
      style: {
        color: tokens.colors.blueDark,
      },
      types: ['prolog'],
    },
    {
      style: {
        color: tokens.colors.green,
        opacity: tokens.opacity.high,
      },
      types: ['comment'],
    },
    {
      style: {
        color: tokens.colors.blue,
      },
      types: ['builtin', 'tag', 'changed', 'keyword'],
    },
    {
      style: {
        color: tokens.colors.green,
      },
      types: ['tag'],
    },
    {
      style: {
        color: tokens.colors.greyLight,
      },
      types: ['punctuation', 'operator'],
    },
    {
      style: {
        color: tokens.colors.greenDark,
      },
      types: ['number', 'inserted'],
    },
    {
      style: {
        color: tokens.colors.pink,
      },
      types: ['constant'],
    },
    {
      style: {
        color: tokens.colors.blueLight,
      },
      types: ['attr-name', 'variable'],
    },
    {
      style: {
        color: tokens.colors.orange,
      },
      types: ['deleted', 'string'],
    },
    {
      style: {
        color: tokens.colors.yellow,
      },
      types: ['function'],
    },
    {
      style: {
        color: tokens.colors.red,
      },
      types: ['char'],
    },
  ],
};

export default theme;

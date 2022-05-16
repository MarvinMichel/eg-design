import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  //UI
  appBg: '#0e141a',
  appContentBg: '#f9f9f9',

  // Typography
  fontBase: 'Montserrat, sans-serif',
  textColor: '#000',

  // Toolbar
  barBg: '#fff',
  barSelectedColor: '#00b4e5',
  barTextColor: '#000',

  // Form
  inputBg: '#fff',
  inputBorder: '#d8d8d8',
  inputBorderRadius: 8,
  inputTextColor: '#000',

  // Branding
  brandTitle: 'Endeavour Group Design',
  brandUrl: 'https://endeavour.nl',
  brandImage: 'images/logo-white.png',
});

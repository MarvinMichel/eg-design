import { addons } from '@storybook/addons';
import endeavour from './eg-theme';

addons.setConfig({
  isToolshown: false,
  panelPosition: 'bottom',
  showPanel: true,
  theme: endeavour,
});

setTimeout(function () {
  addons.elements.panel['storybook/a11y/panel'].title = 'WCAG';
  addons.elements.panel['addon-cssprops'].title = 'Variables';
}, 0);

import { addons } from '@storybook/addons';
import endeavour from './eg-theme';

addons.setConfig({
  isToolshown: true,
  panelPosition: 'bottom',
  showPanel: false,
  sidebar: {
    showRoots: false,
    collapsedRoots: ['Documentation']
  },
  theme: endeavour,
  toolbar: {
    copy: { hidden: true },
    eject: { hidden: true }
  }
});

setTimeout(function () {
  addons.elements.panel['storybook/a11y/panel'].title = 'WCAG-Checker';
  addons.elements.panel['addon-cssprops'].title = 'Variables';
}, 0);

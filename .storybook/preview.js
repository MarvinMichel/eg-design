import { defineCustomElements } from '../loader';
import '../dist/eg-design/eg-design.css';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  badgesConfig: {
    deprecated: {
      styles: {
        backgroundColor: '#f8ac2720',
        borderColor: '#f8ac27',
        color: '#f8ac27',
      },
      title: 'Deprecated',
    },
    development: {
      styles: {
        backgroundColor: '#cf10d920',
        borderColor: '#cf10d9',
        color: '#cf10d9',
      },
      title: 'Development',
    },
    done: {
      styles: {
        backgroundColor: '#00B4E520',
        borderColor: '#00B4E5',
        color: '#00B4E5',
      },
      title: 'Done',
    },
    testing: {
      styles: {
        backgroundColor: '#f1841220',
        borderColor: '#f18412',
        color: '#f18412',
      },
      title: 'Testing',
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

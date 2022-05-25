import { defineCustomElements } from '../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import { extractArgTypesFactory } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../docs.json';
import '../dist/eg-design/eg-design.css';

if (docJson) setStencilDocJson(docJson);

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
    },
  },
  controls: {
    controls: { hideNoControlsWarning: true },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    extractArgTypes: extractArgTypesFactory({ dashCase: true }),
  },
  layout: 'centered',
};

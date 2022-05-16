import MDXDocs from './darkmode-toggle.mdx';

export default {
  args: {
    label: 'darkmode theme',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text which is read by a screen reader',
      default: 'darkmode theme',
    },
  },
  component: 'eg-darkmode-toggle',
  description:
    "The darkmode toggle is a switch button which chages the darkmode state of the HTML document, by adding a `data-darkmode` attribute onto the `<html>`. It uses a media-query to get the users' system default and uses it on render. If the user has changed the theme, it's saved to the localStorage. The latter get priority above everything.",
  parameters: {
    badges: ['testing'],
    cssprops: {
      'clr-idle': {
        value: '#b7b7b7',
        description: 'Background color of switch in idle state',
      },
      'clr-active': {
        value: 'linear-gradient(90deg, #00b4e5, #cf10d9)',
        description: 'Background color of switch in active state',
      },
      'clr-toggle': {
        value: '#f4f4f4',
        description: 'Background color of toggle knob',
      },
      'clr-icon': {
        value: '#525252',
        description: 'Color of the icon inside the toggle knob',
      },
      'size': {
        value: '2rem',
        description: 'Size of the switch button',
        control: 'text',
      },
    },
    docs: { page: MDXDocs },
  },
  title: 'Components/Darkmode Toggle',
};

const DefaultTemplate = args => `<eg-darkmode-toggle label="${args.label}" />`;
export const basic = DefaultTemplate.bind({});

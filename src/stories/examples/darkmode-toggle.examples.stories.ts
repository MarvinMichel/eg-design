export default {
  args: { label: 'darkmode theme' },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text which is read by a screen reader',
      default: 'darkmode theme',
    },
  },
  component: 'eg-darkmode-toggle',
  description: 'Darkmode toggle examles for documentation',
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  title: 'hidden_darkmode-toggle',
};

const DefaultTemplate = args => `<eg-darkmode-toggle label="${args.label}" />`;
export const customized = DefaultTemplate.bind({});
customized.decorators = [
  story => `
  <style>
    eg-darkmode-toggle { background: #0e141a }
    eg-darkmode-toggle[active] { background: #28d654 }
  </style>
  ${story()}
`,
];

const IconTemplate = args => `
  <eg-darkmode-toggle label="${args.label}">
    <img slot="iconIdle" src="/images/theme-icon-light.svg" />
    <img slot="iconActive" src="/images/theme-icon-dark.svg" />
  </eg-darkmode-toggle>
`;
export const withIcon = IconTemplate.bind({});

const CheckboxTemplate = () => `<input type="checkbox" id="toggle">`;
export const checkbox = CheckboxTemplate.bind({});
checkbox.decorators = [
  story => `
  <style>
    #toggle {
      --size: 1.5rem;
      align-items: center;
      appearance: none;
      background: lightgrey;
      border-radius: 1rem;
      box-sizing: border-box;
      display: flex;
      height: var(--size);
      justify-content: flex-start;
      padding: 0.25rem;
      transition: background 250ms ease-in-out;
      width: calc(var(--size) * 1.75);
    }
    #toggle::before {
      content: '';
      background: white;
      border-radius: 50%;
      height: 1.125rem;
      width: 1.125rem;
    }
    #toggle:checked {
      background: limegreen;
      justify-content: flex-end;
    }
  </style>
  ${story()}
  `,
];

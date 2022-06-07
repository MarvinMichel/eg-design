export default {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  title: 'hidden_docs',
};

const ButtonLink = () => `
    <button class="button">This is a button</button>
    <a class="button">This is a link</a>
`;
export const buttonAndLink = ButtonLink.bind({});
buttonAndLink.decorators = [
  story => `
    <style>
        .button {
            appearance: none;
            background: #00b4e515;
            border: 1px solid #00b4e5;
            color: #00b4e5;
            cursor: pointer;
            display: inline-block;
            font: inherit;
            font-size: 1em;
            padding: 0.25em 0.5em;
            text-decoration: none;
            transition:
                background 250ms ease-in-out,
                border-color 250ms ease-in-out,
                color 250ms ease-in-out,
                transform 250ms ease-in-out;
        }
        .button:active {
            background: #cf10d915;
            border-color: #cf10d9;
            color: #cf10d9;
            transform: scale(0.95);
        }
    </style>
    ${story()}
  `,
];

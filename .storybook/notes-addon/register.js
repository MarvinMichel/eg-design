import { addons, makeDecorator, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { useStorybookApi } from '@storybook/api';

// addons.register('eg-design/notes-addon', api => {});

const NotesPanel = `<div>Hier komen de notities</div>`;

addons.register('notes-addon', api => {
  addons.add('notes-addon/panel', {
    type: types.PANEL,
    title: 'Notes',
    render: props => `<div>Hier komen de notities</div>`,
  });
});

// export makeDecorator({
//     name: 'withDecorator',
//     parameterName: 'someting',
//     wrapper: (storyFn, context, { parameters }) => {
//         // Do someting with the parameters
//         return storyFn(context);
//     }
// });

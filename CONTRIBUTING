# Contributing to the library
The library and it's components are focused on white-label components and accessibility. The components should be created within it's isoltated enironment, using the corresponding tools like the WCAG guidelines.

## Building a component

To start building a new web component using Stencil, you can use the component generator through the npm script. This will open up an interactive generator in the terminal.

```bash
npm run generate
```

Or you can invoke the Stencil CLI directly with the `generate` command. If you don't have stencil installed globally, you have to prefix the command with `npx`.

```bash
stencil generate
```

This will create a new directory with the base files of the component. To use `SCSS` instead of `CSS`, simply rename the file with the correct suffix. This won't create the necessary files for Storybook, so wel'll create them manually later.

```
src
 |- components
     |- component-name
         |- test
             |- component-name.e2e.ts
             |- component-name.spec.tsx
         |- component-name.css
         |- component-name.tsx
         |- readme.md
```

Inside of our `component-name.tsx` file we can find the Web Components' code. It has a generated tagname, coming from the component's name, but doesn't fit the standards yet. Make sure you use the `eg` prefix when renaming the component's tagname. This makes it clear that we're using a component from our library. So in this example, `component-name` will be changed into `eg-component-name`.

It's not necessary to change the component's files- or directory name. This will only make the names longer, while it has no purpose. The fact that these component live inside the directory makes it clear that they are a part of the system.

```js
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'eg-component-name',
  styleUrl: 'component-name.scss',
  shadow: true, // Can be change to scoped styling, moreover in the styling section
})
export class ComponentName {

  @Prop()
  public message: string = 'Hi!';

  protected render() {
    return <p>This component says: {this.message}</p>;
  }
}
```

A component should be a standalone UI element designed to be reusable across projects. Their should be white labelled, meaning that there is a simple styling applied that can be overwritten by the developer that implements it. When building a new component, keep this in mind. Make them as abstract as possible and use `CSS variables` and `::part` to style certain elements.

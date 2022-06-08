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

```diff
src
 |- components
     |- component-name
         |- test
             |- component-name.e2e.ts
             |- component-name.spec.tsx
-        |- component-name.css
+        |- component-name.scss
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

## Use Storybook

To visually test the UI component you'll need the development server. This is where Storybook comes in. Insteaf of using a standard dev-server or builder, Storybook will give as an option to visually test the component and see how it would fit when implemented on a website.

To use the Storybook environment, run the dev script.
```bash
npm run dev
```
The build uses Webpack5 to build the Storybook environment and at the same time we run the Stencil build server with a watch flag to make sure the Storybook evironment is hot-reloaded when you make a change to the component.
> Be aware that the hot-reloading make take a while longer than usually because it's not a build-in feature.

### Write a story

Now it's time to write a story. This is an isolated context where the component is going to live in. For a detailed tutorial about writing stories you can check [the documentation of Storybook](https://storybook.js.org/docs/html/writing-stories/introduction).

> This version of Storybook is build for HTML, so beware that at the time of writing there will be no code examples in the documentation.

The story and documentation of a component will be placed inside the component's directory. The documentation is written with MDX and the story with Typescript.
```diff
src
  |- components
    |- component-name
+     |- component-name.mdx
      |- component-name.scss
+     |- component-name.stories.ts
      |- component-name.tsx
      |- readme.md
```

If you need to use a codeblock with an interactive example, you'll need a story for that to. You can place them in the `stories/examples` directory.
```
src
  |- components
  |- stories
    |- examples
      |- component-name.examples.stories.ts
```
You can place multiple example stories inside one file. Just make sure that the title inside the export object starts with `hidden_*`. This way the stories are hidden from the evironment as seperate component stories and not featured in the component build on Chromatic.
```ts
export default {
  ...,
  title: "hidden_component-name"
}
```

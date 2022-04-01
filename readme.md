# Endeavour Design

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://link.com)
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

A component driven answer to inclusivity and usabillity of accesabillity.

Endeavour Design is a UI component library focused to bringing refined experiences to visually impaired users, while maintaining endless styling possibilities.

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

```ts
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'eg-component-name',
  styleUrl: 'component-name.scss',
  shadow: true, // Can be change to scoped styling
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

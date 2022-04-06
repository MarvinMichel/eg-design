/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EgDarkmodeToggle {
        "active": boolean;
        "label": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLEgDarkmodeToggleElement extends Components.EgDarkmodeToggle, HTMLStencilElement {
    }
    var HTMLEgDarkmodeToggleElement: {
        prototype: HTMLEgDarkmodeToggleElement;
        new (): HTMLEgDarkmodeToggleElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "eg-darkmode-toggle": HTMLEgDarkmodeToggleElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface EgDarkmodeToggle {
        "active"?: boolean;
        "label"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "eg-darkmode-toggle": EgDarkmodeToggle;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "eg-darkmode-toggle": LocalJSX.EgDarkmodeToggle & JSXBase.HTMLAttributes<HTMLEgDarkmodeToggleElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

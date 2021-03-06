/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface CustomClock {

    }
  }

  interface HTMLCustomClockElement extends StencilComponents.CustomClock, HTMLStencilElement {}

  var HTMLCustomClockElement: {
    prototype: HTMLCustomClockElement;
    new (): HTMLCustomClockElement;
  };
  interface HTMLElementTagNameMap {
    'custom-clock': HTMLCustomClockElement;
  }
  interface ElementTagNameMap {
    'custom-clock': HTMLCustomClockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'custom-clock': JSXElements.CustomClockAttributes;
    }
  }
  namespace JSXElements {
    export interface CustomClockAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyComponent {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMyComponentElement extends StencilComponents.MyComponent, HTMLStencilElement {}

  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component': JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyDropdown {
      'title': string;
    }
  }

  interface HTMLMyDropdownElement extends StencilComponents.MyDropdown, HTMLStencilElement {}

  var HTMLMyDropdownElement: {
    prototype: HTMLMyDropdownElement;
    new (): HTMLMyDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'my-dropdown': HTMLMyDropdownElement;
  }
  interface ElementTagNameMap {
    'my-dropdown': HTMLMyDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-dropdown': JSXElements.MyDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface MyDropdownAttributes extends HTMLAttributes {
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyFirstComponent {
      'name': string;
    }
  }

  interface HTMLMyFirstComponentElement extends StencilComponents.MyFirstComponent, HTMLStencilElement {}

  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-first-component': HTMLMyFirstComponentElement;
  }
  interface ElementTagNameMap {
    'my-first-component': HTMLMyFirstComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-first-component': JSXElements.MyFirstComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyFirstComponentAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;
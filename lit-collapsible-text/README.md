# @mikeromeo/collapsible-text

[![npm (scoped)](https://img.shields.io/npm/v/@mikeromeo/lit-collapsible-text.svg)](https://www.npmjs.com/package/@mikeromeo/lit-collapsible-text)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@mikeromeo/lit-collapsible-text.svg)](https://www.npmjs.com/package/@mikeromeo/lit-collapsible-text)


## Install

```
$ npm install @mikeromeo/lit-collapsible-text
```

## Usage

```js
import '@mikeromeo/lit-collapsible-text'
```

```html
<collapsible-text>
    <h3 slot="heading">
        Testing Webcomponent
    </h3>
    <svg slot="icon" viewbox="0 0 448 512">
        <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"/>
    </svg>
    <p slot="content">
        ipsum dolor sit amet, consectetur adipisicing elit. Est ipsa nemo ratione ut eligendi molestiae.
    </p>
</collapsible-text>
```

Overschrijf de styling met css variables
```css
collapsible-text{
    --ct-radius: 5px;
    --ct-border-size: 3px;
    --ct-padding: 15px;
    --ct-icon-size: 10px;
    --ct-bg-color: #fff;
}
```


# <a href="https://www.blazeui.com">Blaze</a>

Open Source Modular UI Toolkit - utilising BEM conventions to provide great structure for building websites quickly

**https://www.blazeui.com**

<a href="https://www.npmjs.com/package/blaze"><img src="https://img.shields.io/npm/v/blaze.svg?style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/blaze"><img src="https://img.shields.io/npm/dm/blaze.svg?style=for-the-badge"></a>
<a href="https://github.com/BlazeUI/blaze/blob/master/LICENSE"><img src="https://img.shields.io/badge/licence-MIT-000000.svg?style=for-the-badge"></a>
<a href="https://twitter.com/blaze_ui"><img src="https://img.shields.io/twitter/follow/blaze_ui.svg?style=for-the-badge"></a>

## Getting started

## Installing the CSS
The easiest way to use the toolkit is via CDN.

```html
<link rel="stylesheet" href="https://unpkg.com/blaze@x.x.x/scss/dist/blaze.min.css">
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

### Modules
Each module is also available via CDN in-case you only want bits and pieces of Blaze and not the whole toolkit.

```html
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/generics.global.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/objects.grid.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/utilities.typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze/scss/dist/components.buttons.min.css">
...etc...
```

### How to start applying styles
We've designed the toolkit not to interfere with others or your own styles, hence Blaze won't automatically do anything to your site.

The following won't change by simply linking to blaze.min.css like it would with others such as Bootstrap or Foundation:

```html
<button type="button">Button</button>
```

You need to apply our button classes:

```html
<button class="c-button" type="button">Button</button>
```

This means you have to add classes to each part of your site where you want Blaze to apply. Take a look at the documentation for our objects, components, typography etc. and you'll see how intuitive it is to use.

## Installing the JavaScript Components
Link to it by adding the following to your `<head></head>`.

```html
<script src="https://unpkg.com/blaze@x.x.x/atoms/dist/blaze-atoms.js"></script>
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

That's it! Start using the components in your HTML.

### Integrating with a Framework
Blaze uses [Stencil](http://stenciljs.com/) to compile our components into Web Components. And since they can be used within frameworks or in standard HTML websites the best resource to read is the [Stencil documentation](https://stenciljs.com/docs/framework-integration) regarding framework integration.

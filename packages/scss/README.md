# <a href="https://www.blazeui.com">Blaze CSS</a>

Open Source Modular UI Toolkit - utilising BEM conventions to provide great structure for building websites quickly

**https://www.blazeui.com**

![https://travis-ci.org/BlazeUI/blaze](https://img.shields.io/travis/BlazeUI/blaze.svg?style=for-the-badge&logo=travis)

## Installing the CSS

The easiest way to use the toolkit is via CDN.

```html
<link rel="stylesheet" href="https://unpkg.com/blaze-css@x.x.x/dist/blaze.min.css">
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

### Modules

Each module is also available via CDN in-case you only want bits and pieces of Blaze and not the whole toolkit.

```html
<link rel="stylesheet" href="https://unpkg.com/blaze-css@x.x.x/dist/generics.global.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze-css@x.x.x/dist/objects.grid.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze-css@x.x.x/dist/utilities.typography.min.css">
<link rel="stylesheet" href="https://unpkg.com/blaze-css@x.x.x/dist/components.buttons.min.css">
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

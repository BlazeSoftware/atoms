# <a href="https://www.blazeui.com">Blaze</a>

Open Source Modular UI Toolkit - utilising BEM conventions to provide great structure for building websites quickly

**https://www.blazeui.com**

## Local Developer Setup

First of all install [Yarn](https://yarnpkg.com/en/docs/install).

When that is complete run:

```cli
yarn
```

That's essentially it! Here are some useful commands:

| `yarn <command>` | Description   |
| ---------------- |:------------- |
| test             | Lints all the scss files and runs all the tests on the atoms  |
| dev              | Runs the dev servers with live reloads for both scss and atoms |
| commit           | To commit any changes please use `yarn commit`, more info below |

### Committing

When committing changes please follow the [Conventional Commits](https://conventionalcommits.org/) format.

The best thing to do it simply run **`yarn commit`** and it'll take you through a step-by-step wizard.

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

## Installing the JavaScript Components
Link to it by adding the following to your `<head></head>`.

```html
<script src="https://unpkg.com/blaze-atoms@x.x.x/dist/blaze-atoms.js"></script>
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

That's it! Start using the components in your HTML.

### Integrating with a Framework
Blaze uses [Stencil](http://stenciljs.com/) to compile our components into Web Components. And since they can be used within frameworks or in standard HTML websites the best resource to read is the [Stencil documentation](https://stenciljs.com/docs/framework-integration) regarding framework integration.

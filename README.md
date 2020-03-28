# <a href="https://www.blazeui.com">Blaze</a>

<img src="https://github.com/BlazeSoftware/blaze/workflows/CI%20Build/badge.svg" alt="" /><a href="https://gitpod.io/#https://github.com/BlazeSoftware/blaze" title="Gitpod Ready-to-Code"> <img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"></a>

Blaze is a framework-free open source UI toolkit. It provides great structure for building websites quickly with a scalable and maintainable foundation.

**https://www.blazeui.com**

## Ready to Code Dev Environment

Contribute to Blaze using a fully featured online development environment that will automatically: clone the repo, install the dependencies and start the webserver.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/BlazeSoftware/blaze)

## Local Developer Setup

First of all install [NVM](https://github.com/creationix/nvm#install-script).

When that is complete run:

```cli
$ nvm use
$ npm i
```

That's essentially it! Here are some useful commands:

| `npm run <command>` | Description                                                        |
| ------------------- | :----------------------------------------------------------------- |
| [package].test      | Lints all the scss files and runs all the tests on the atoms       |
| [package].dev       | Runs the dev servers with live reloads for both scss and atoms     |
| commit              | To commit any changes please use `npm run commit`, more info below |

### Committing

When committing changes please follow the [Conventional Commits](https://conventionalcommits.org/) format.

The best thing to do is simply run **`npm run commit`** and it'll take you through a step-by-step wizard.

## Installing the CSS

The easiest way to use the toolkit is via CDN.

```html
<link rel="stylesheet" href="https://unpkg.com/@blaze/css@x.x.x/dist/blaze.css" />
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

### How to start applying styles

We've designed the toolkit not to interfere with others or your own styles, hence Blaze won't automatically do anything to your site.

The following won't change by simply linking to blaze.css like it would with others such as Bootstrap or Foundation:

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
<script src="https://unpkg.com/@blaze/atoms@x.x.x/dist/blaze-atoms.js"></script>
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

That's it! Start using the components in your HTML.

### Integrating with a Framework

Blaze uses [Stencil](http://stenciljs.com/) to compile our components into Web Components. And since they can be used within frameworks or in standard HTML websites the best resource to read is the [Stencil documentation](https://stenciljs.com/docs/overview) regarding framework integration.

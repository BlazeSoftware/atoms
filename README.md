# <a href="https://www.blazeui.com">Blaze Atoms</a>

Blaze is a framework-free open source UI toolkit. It provides great structure for building websites quickly with a scalable and maintainable foundation.

Blaze Atoms is a set of web components powered by Blaze CSS.

**https://www.blazeui.com**

## Ready to Code Dev Environment

Contribute to Blaze using a fully featured online development environment that will automatically: clone the repo, install the dependencies and start the webserver.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/BlazeSoftware/atoms)

## Local Developer Setup

First of all install [NVM](https://github.com/creationix/nvm#install-script).

When that is complete run:

```cli
$ nvm use
$ npm i
$ npm start
```

### Committing

When committing changes please follow the [Conventional Commits](https://conventionalcommits.org/) format.

## Installing the JavaScript Components

Link to it by adding the following to your `<head></head>`.

```html
<script src="https://unpkg.com/@blaze/atoms@x.x.x/dist/blaze-atoms.js"></script>
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

That's it! Start using the components in your HTML.

### Integrating with a Framework

Blaze uses [Stencil](http://stenciljs.com/) to compile our components into Web Components. And since they can be used within frameworks or in standard HTML websites the best resource to read is the [Stencil documentation](https://stenciljs.com/docs/overview) regarding framework integration.

# <a href="https://www.blazeui.com">Blaze CSS</a>

Blaze is a framework-free open source UI toolkit. It provides great structure for building websites quickly with a scalable and maintainable foundation.

Blaze CSS is a set of CSS styles and HTML components available as CSS and SCSS.

**https://www.blazeui.com**

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

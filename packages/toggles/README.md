# <a href="https://blaze-toggles.firebaseapp.com">Blaze Feature Toggles</a>

Blaze is a framework-free open source UI toolkit. It provides great structure for building websites quickly with a scalable and maintainable foundation.

**https://www.blazeui.com**

[![ci build status](https://img.shields.io/travis/BlazeUI/blaze.svg?style=for-the-badge&logo=travis)](https://travis-ci.org/BlazeUI/blaze)

## Using the Toggles

Add the following to your `<head></head>`.

```html
<script src="https://unpkg.com/@blaze/toggles@x.x.x/dist/collection/config.js"></script>
<script src="https://unpkg.com/@blaze/toggles@x.x.x/dist/toggles.js"></script>
```

The `x.x.x` is the specific version of the library, you should use specifc versions to prevent against breaking changes.

### Config

Next add some feature toggle config, e.g.

```js
FeatureToggles.set({
  welcomeMessage: true,
  loginPage: {
    rememberMe: 'alpha',
  },
});
```

You can call `FeatureToggles.set({...})` at anytime to update config. Everytime **FeatureToggles.set** is called it raises a `featureToggleChange` event that you can hook into.

`set` also merges the config with the already set config.

Config _values_ can be either `booleans`, `strings` or `functions`.

`Promises` are supported.

e.g. the below to toggle the feature after 2 seconds once the promise has resolved.

```js
FeatureToggles.set({
  welcomeMessage: true,
  loginPage: {
    rememberMe: () => new Promise((resolve) => setTimeout(() => resolve('alpha'), 2000)),
  },
});
```

### HTML

```html
<feature-toggle feature="welcomeMessage">
  content will be VISIBLE
</feature-toggle>

<feature-toggle feature="loginPage.rememberMe" variant="alpha">
  content will be VISIBLE
</feature-toggle>

<feature-toggle feature="loginPage.rememberMe" variant="beta">
  content will be HIDDEN
</feature-toggle>
```

|  Setting  | Description                                                            |
| :-------: | :--------------------------------------------------------------------- |
| `feature` | Feature config item, supports dot notation                             |
| `variant` | The value the toggle must be to turn on this feature (default: `true`) |

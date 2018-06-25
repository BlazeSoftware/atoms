## Demo Markup
A component that takes in code, renders it within a code element and
demos the code at the same time. Useful for documentation.

### Pre-requisite
Link to the highlightjs styles and script library.

### How to use

Example:

html
```html
<blaze-demo language="html" code='<button type="button" class="c-button">Button</button>'></blaze-demo>
```

jsx
```html
<blaze-demo language="html" code={`<button type="button" class="c-button">Button</button>`} />
```

### API

**code** - A string of code that you would like to demonstrate

**demo** - render the code supplied to the component *(default **true**)*

**classes** - Additional classes you can apply to the demo container

**language** - The class to apply to help HighlightJS
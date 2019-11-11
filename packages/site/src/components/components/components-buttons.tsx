import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-buttons',
})
export class ComponentsButtons {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Probably the first thing people look at when choosing a UI toolkit. The common button!
        </p>

        <h2 class="c-heading u-xlarge">Basic Button</h2>

        <p class="c-paragraph">
          To make a button a Blaze button add the <code class="u-code">.c-button</code> class to buttons, inputs or
          links.
        </p>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button">Button</button>
<input type="button" class="c-button" value="Input">
<a class="c-button">Link</a>
<button type="button" class="c-button" disabled>Button</button>`}
        />

        <h2 id="colors" class="c-heading u-xlarge">
          Button Colors
        </h2>

        <p class="c-paragraph">There are five button color modifiers:</p>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button">Button</button>
<button type="button" class="c-button c-button--brand">Button</button>
<button type="button" class="c-button c-button--info">Button</button>
<button type="button" class="c-button c-button--warning">Button</button>
<button type="button" class="c-button c-button--success">Button</button>
<button type="button" class="c-button c-button--error">Button</button>`}
        />

        <h2 id="groups" class="c-heading u-xlarge">
          Button Groups
        </h2>
        <p class="c-paragraph">
          To group related buttons together you can use the <code class="u-code">.c-input-group</code> wrapping element.
          This will bunch the buttons together and remove the spacing between them.
        </p>

        <blaze-demo
          language="html"
          code={`<span class="c-input-group">
  <button type="button" class="c-button c-button--brand">Button</button>
  <button type="button" class="c-button">Button</button>
</span>`}
        />

        <p class="c-paragraph">
          Adding the <code class="u-code">.c-input-group--rounded</code> modifier will make the first and last buttons
          rounded.
        </p>

        <blaze-demo
          language="html"
          code={`<span class="c-input-group c-input-group--rounded">
  <button type="button" class="c-button c-button--brand">Button</button>
  <button type="button" class="c-button">Button</button>
  <button type="button" class="c-button c-button--info">Button</button>
</span>`}
        />

        <h2 id="sizes" class="c-heading u-xlarge">
          Button Sizes
        </h2>
        <p class="c-paragraph">Adding a size utility class will change the size of the button.</p>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button u-xsmall">.u-xsmall</button>
<button type="button" class="c-button u-small">.u-small</button>
<button type="button" class="c-button u-medium">.u-medium</button>
<button type="button" class="c-button u-large">.u-large</button>
<button type="button" class="c-button u-xlarge">.u-xlarge</button>
<button type="button" class="c-button u-super">.u-super</button>`}
        />

        <h2 id="full-width" class="c-heading u-xlarge">
          Full Width Buttons
        </h2>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button c-button--block u-xsmall">Button</button>
<button type="button" class="c-button c-button--block u-small">Button</button>
<button type="button" class="c-button c-button--block u-medium">Button</button>
<button type="button" class="c-button c-button--block u-large">Button</button>
<button type="button" class="c-button c-button--block u-xlarge">Button</button>
<button type="button" class="c-button c-button--block u-super">Button</button>`}
        />

        <h2 id="ghost" class="c-heading u-xlarge">
          Ghost Buttons
        </h2>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button c-button--ghost u-xsmall">Button</button>
<button type="button" class="c-button c-button--ghost u-small">Button</button>
<button type="button" class="c-button c-button--ghost u-medium">Button</button>
<button type="button" class="c-button c-button--ghost u-large">Button</button>
<button type="button" class="c-button c-button--ghost u-xlarge">Button</button>
<button type="button" class="c-button c-button--ghost u-super">Button</button>`}
        />

        <h2 id="ghost-colors" class="c-heading u-xlarge">
          Ghost colors
        </h2>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button c-button--ghost">Button</button>
<button type="button" class="c-button c-button--ghost c-button-brand">Button</button>
<button type="button" class="c-button c-button--ghost c-button-info">Button</button>
<button type="button" class="c-button c-button--ghost c-button-warning">Button</button>
<button type="button" class="c-button c-button--ghost c-button-success">Button</button>
<button type="button" class="c-button c-button--ghost c-button-error">Button</button>`}
        />

        <h2 id="rounded" class="c-heading u-xlarge">
          Rounded Buttons
        </h2>

        <blaze-demo
          language="html"
          code={`<button type="button" class="c-button c-button--rounded c-button--ghost">Button</button>
<button type="button" class="c-button c-button--rounded c-button--ghost c-button--brand">Button</button>
<button type="button" class="c-button c-button--rounded c-button--ghost c-button--info">Button</button>
<button type="button" class="c-button c-button--rounded c-button--ghost c-button--warning">Button</button>
<button type="button" class="c-button c-button--rounded c-button--ghost c-button--success">Button</button>
<button type="button" class="c-button c-button--rounded c-button--ghost c-button--error">Button</button>`}
        />

        <h2 id="states" class="c-heading u-xlarge">
          Active state
        </h2>

        <blaze-demo
          language="html"
          code={`<span class="c-input-group">
  <button class="c-button c-button--info c-button--active" type="button">Button 1</button>
  <button class="c-button c-button--info" type="button">Button 2</button>
</span>`}
        />
      </page-template>
    );
  }
}

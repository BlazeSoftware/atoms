import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-drawers',
})
export class ObjectsDrawers {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Slide in menus. Drawers provide a special layout for cards.</p>

        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<blaze-drawer position="right" open>
  <blaze-card>
    <blaze-card-header>
      <h2 class="c-heading u-xlarge">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </blaze-card-header>
    <blaze-card-body>
      <p class="c-paragraph">
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </p>
    </blaze-card-body>
    <blaze-card-footer>
      <div class="c-input-group">
        <button class="c-button c-button--block c-button--brand">Button</button>
        <button class="c-button c-button--block c-button--info">Button</button>
      </div>
    </blaze-card-footer>
  </blaze-card>
</blaze-drawer>`}
        />

        <h2 class="c-heading">Attributes</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Attribute</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">open (boolean)</td>
              <td class="c-table__cell">Initial open/close state of the draw</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">dismissible (boolean)</td>
              <td class="c-table__cell">Allow the drawer to be closed by clicking on the overlay</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">position="top|right|bottom|left"</td>
              <td class="c-table__cell">Set which border the drawer appears from</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Methods</h2>

        <p class="c-paragraph">
          To access public methods on the element first select it using{' '}
          <code class="u-code">document.querySelector()</code>.
        </p>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Method</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">show()</td>
              <td class="c-table__cell">Opens the drawer</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">close()</td>
              <td class="c-table__cell">Hides the drawer</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">isOpen()</td>
              <td class="c-table__cell">Promise&lt;true or false></td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">CSS</h2>
        <p class="c-paragraph">
          To make the drawer appear and disappear toggle the <code class="u-code">.o-drawer--visible</code> modifier.
        </p>

        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<div aria-hidden class="c-overlay c-overlay--dismissible"></div>
<aside aria-label="Demo drawer" aria-expanded class="o-drawer u-highest o-drawer--top o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</aside>`}
        />

        <h2 id="positions" class="c-heading u-xlarge">
          Positions
        </h2>
        <p class="c-paragraph">
          <code class="u-code">.c-drawer--top</code>, <code class="u-code">.c-drawer--right</code>,{' '}
          <code class="u-code">.c-drawer--left</code>
          and <code class="u-code">.c-drawer--bottom</code> modifiers are all available.
        </p>
        <h3 id="positions-left" class="c-heading u-large mono">
          .o-drawer--left
        </h3>

        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<div aria-hidden class="c-overlay c-overlay--dismissible"></div>
<aside aria-label="Demo drawer" aria-expanded class="o-drawer u-highest o-drawer--left o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</aside>`}
        />

        <h3 id="positions-bottom" class="c-heading u-large mono">
          .o-drawer--bottom
        </h3>
        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<div aria-hidden class="c-overlay c-overlay--dismissible"></div>
<aside aria-label="Demo drawer" aria-expanded class="o-drawer u-highest o-drawer--bottom o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</aside>`}
        />

        <h3 id="positions-right" class="c-heading u-large mono">
          .o-drawer--right
        </h3>
        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<div aria-hidden class="c-overlay c-overlay--dismissible"></div>
<aside aria-label="Demo drawer" aria-expanded class="o-drawer u-highest o-drawer--right o-drawer--visible">
  <div class="c-card">
    <header class="c-card__header">
      <h2 class="c-heading">
        Heading
        <div class="c-heading__sub">Sub-heading</div>
      </h2>
    </header>
    <div class="c-card__body">
      This is a drawer
    </div>
    <footer class="c-card__footer">
      <div class="c-input-group">
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
        <button class="c-button c-button--block">Buy</button>
      </div>
    </footer>
  </div>
</aside>`}
        />
      </page-template>
    );
  }
}

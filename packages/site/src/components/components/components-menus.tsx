import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-menus',
})
export class ComponentsMenus {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Menus inherit a lot of styles from <stencil-route-link url="/components/cards">Cards</stencil-route-link> but
          are primarily designed as dropdown replacements rather than page segments.
        </p>

        <h2 id="single-selection" class="c-heading u-xlarge">
          Simple Menu
        </h2>

        <blaze-demo
          language="html"
          code={`<div role="menu" class="c-card c-card--menu">
  <button role="menuitem" class="c-card__control">Menu 1</button>
  <button role="menuitem" class="c-card__control">Menu 2</button>
  <div role="separator" class="c-card__item c-card__item--divider">Divider</div>
  <button role="menuitem" class="c-card__control">Menu 3</button>
  <button role="menuitem" class="c-card__control">Menu 4</button>
  <button role="menuitem" class="c-card__control" disabled>Menu item disabled</button>
  <button role="menuitem" class="c-card__control c-card__control--active">Menu item active</button>
  <button role="menuitem" class="c-card__control">Menu 5</button>
  <button role="menuitem" class="c-card__control">Menu 6</button>
  <button role="menuitem" class="c-card__control">Menu 7</button>
  <button role="menuitem" class="c-card__control">Menu 8</button>
  <button role="menuitem" class="c-card__control">Menu 9</button>
  <button role="menuitem" class="c-card__control">Menu 10</button>
</div>`}
        />

        <h2 id="grouped" class="c-heading u-xlarge">
          Grouped Items
        </h2>

        <blaze-demo
          language="html"
          code={`<div role="menu" class="c-card c-card--menu u-high c-card--grouped">
  <button role="menuitem" class="c-card__control">Menu 1</button>
  <button role="menuitem" class="c-card__control">Menu 2</button>
  <button role="menuitem" class="c-card__control">Menu 3</button>
  <button role="menuitem" class="c-card__control">Menu 4</button>
  <div role="separator" class="c-card__divider"></div>
  <button role="menuitem" class="c-card__control" disabled>Menu control disabled</button>
  <button role="menuitem" class="c-card__control c-card__control--active">Menu control active</button>
  <div role="separator" class="c-card__divider"></div>
  <button role="menuitem" class="c-card__control">Menu 5</button>
  <button role="menuitem" class="c-card__control">Menu 6</button>
  <button role="menuitem" class="c-card__control">Menu 7</button>
  <div role="separator" class="c-card__divider"></div>
  <button role="menuitem" class="c-card__control">Menu 8</button>
  <div role="separator" class="c-card__divider"></div>
  <button role="menuitem" class="c-card__control">Menu 9</button>
  <button role="menuitem" class="c-card__control">Menu 10</button>
</div>`}
        />

        <h2 id="colors" class="c-heading u-xlarge">
          Colored Items
        </h2>

        <blaze-demo
          language="html"
          code={`<div role="menu" class="c-card c-card--menu">
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 1</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 2</button>
  <div role="separator" class="c-card__item c-card__item--divider">Divider</div>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 3</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 4</button>
  <button role="menuitem" class="c-card__control c-card__control--brand" disabled>Menu item disabled</button>
  <button role="menuitem" class="c-card__control c-card__control--brand c-card__control--active">Menu item active</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 5</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 6</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 7</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 8</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 9</button>
  <button role="menuitem" class="c-card__control c-card__control--brand">Menu 10</button>
</div>`}
        />

        <h2 id="combo" class="c-heading u-xlarge">
          Combo
        </h2>

        <blaze-demo
          language="html"
          code={`<div role="menu" class="c-card c-card--menu u-high">
  <label role="menuitem" class="c-card__control c-field c-field--choice">
    <input type="checkbox"> Control 1
  </label>
  <label role="menuitem" class="c-card__control c-field c-field--choice">
    <input type="checkbox"> Control 2
  </label>
  <div role="separator" class="c-card__item c-card__item--divider">Divider</div>
  <label role="menuitem" class="c-card__control c-field c-field--choice">
    <input type="checkbox"> Control 3
  </label>
  <label role="menuitem" class="c-card__control c-field c-field--choice">
    <input type="checkbox"> Control 4
  </label>
</div>`}
        />
      </page-template>
    );
  }
}

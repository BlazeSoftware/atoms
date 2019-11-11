import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-toggles',
})
export class ComponentsToggles {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Checkboxes are pretty ugly. So let's make them pretty.</p>

        <blaze-demo
          language="html"
          code={`<blaze-toggle toggled>Default</blaze-toggle>
<blaze-toggle toggled type="brand">Brand</blaze-toggle>
<blaze-toggle toggled type="info">Info</blaze-toggle>
<blaze-toggle toggled type="warning">Warning</blaze-toggle>
<blaze-toggle toggled type="success">Success</blaze-toggle>
<blaze-toggle toggled type="error">Error</blaze-toggle>`}
        />

        <h2 class="c-heading">Attributes</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">toggled: boolean</td>
              <td class="c-table__cell">Initial state of the toggle</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">type</td>
              <td class="c-table__cell">The color of the rail</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Methods</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">isToggled(): Promise&lt;boolean></td>
              <td class="c-table__cell">returns whether the checkbox is checked or not</td>
            </tr>
          </tbody>
        </table>
        <h2 class="c-heading">CSS</h2>
        <blaze-demo
          language="html"
          code={`<label class="c-toggle">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Default
</label>
<label class="c-toggle c-toggle--brand">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Brand
</label>
<label class="c-toggle c-toggle--info">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Info
</label>
<label class="c-toggle c-toggle--warning">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Warning
</label>
<label class="c-toggle c-toggle--success">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Success
</label>
<label class="c-toggle c-toggle--error">
  <input type="checkbox" checked>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Error
</label>
<label class="c-toggle c-toggle--brand">
  <input type="checkbox" disabled>
  <div class="c-toggle__track">
    <div class="c-toggle__handle"></div>
  </div>
  Disabled
</label>`}
        />
      </page-template>
    );
  }
}

import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-tabs',
})
export class ComponentsTabs {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Tabbed content, useful to toggle between content without jumping around the page or across pages.
        </p>

        <h2 class="c-heading u-xlarge">Basic Tabs</h2>
        <blaze-demo
          language="html"
          code={`<blaze-tabs>
  <blaze-tab type="brand" header="One" open>This is tab one</blaze-tab>
  <blaze-tab disabled header="Two (disabled)">This is tab two</blaze-tab>
  <blaze-tab type="info" header="Three">This is tab three</blaze-tab>
  <blaze-tab type="warning" header="Four">This is tab four</blaze-tab>
  <blaze-tab type="success" header="Five">This is tab five</blaze-tab>
  <blaze-tab type="error" header="Six">This is tab six</blaze-tab>
  <blaze-tab header="Seven">This is tab seven</blaze-tab>
  <blaze-tab header="Eight">This is tab eight</blaze-tab>
  <blaze-tab header="Nine">This is tab nine</blaze-tab>
  <blaze-tab header="Ten">This is tab ten</blaze-tab>
</blaze-tabs>`}
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
              <td class="c-table__cell">type: string</td>
              <td class="c-table__cell">The color of the tabs</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">open: boolean</td>
              <td class="c-table__cell">Specify which tab should be selected on load</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">disabled: boolean</td>
              <td class="c-table__cell">Disable specific tabs to prevent them from opening</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">header: string</td>
              <td class="c-table__cell">The text that should appear in each tab</td>
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
              <td class="c-table__cell">currentTab(): Promise&lt;number></td>
              <td class="c-table__cell">returns the index of the current tab</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">openTab(tabIndex: number)</td>
              <td class="c-table__cell">Programmatically select a tab to open</td>
            </tr>
          </tbody>
        </table>
        <h2 class="c-heading">CSS</h2>
        <h2 class="c-heading u-xlarge">Basic Tabs</h2>

        <blaze-demo
          language="html"
          code={`<div role="tablist" class="c-tabs">
  <div class="c-tabs__nav">
    <div class="c-tabs__headings">
      <button role="tab" class="c-tab-heading c-tab-heading--active">Wide tabs with nav</button>
      <button role="tab" class="c-tab-heading" disabled>Disabled</button>
      <button role="tab" class="c-tab-heading">Three</button>
      <button role="tab" class="c-tab-heading">Four</button>
      <button role="tab" class="c-tab-heading">Five</button>
      <button role="tab" class="c-tab-heading">Six</button>
      <button role="tab" class="c-tab-heading">Seven</button>
      <button role="tab" class="c-tab-heading">Eight</button>
      <button role="tab" class="c-tab-heading">Nine</button>
      <button role="tab" class="c-tab-heading">Ten</button>
    </div>
  </div>
  <div role="tabpanel" class="c-tabs__tab">This is tab one</div>
  <div role="tabpanel" hidden class="c-tabs__tab">This is tab two</div>
</div>`}
        />

        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <blaze-demo
          language="html"
          code={`<div role="tablist" class="c-tabs">
  <div class="c-tabs__nav">
    <div class="c-tabs__headings">
      <button role="tab" class="c-tab-heading">Default</button>
      <button role="tab" class="c-tab-heading" disabled>Disabled</button>
      <button role="tab" class="c-tab-heading c-tab-heading--brand">Brand</button>
      <button role="tab" class="c-tab-heading c-tab-heading--info">Info</button>
      <button role="tab" class="c-tab-heading c-tab-heading--warning">Warning</button>
      <button role="tab" class="c-tab-heading c-tab-heading--success">Success</button>
      <button role="tab" class="c-tab-heading c-tab-heading--error">Error</button>
    </div>
  </div>
  <div role="tabpanel" class="c-tabs__tab">This is tab one</div>
  <div hidden class="c-tabs__tab">This is tab two</div>
</div>`}
        />

        <h2 id="active" class="c-heading u-xlarge">
          Active
        </h2>

        <blaze-demo
          language="html"
          code={`<div role="tablist" class="c-tabs">
  <div class="c-tabs__nav">
    <div class="c-tabs__headings">
      <button role="tab" class="c-tab-heading">Default</button>
      <button role="tab" class="c-tab-heading" disabled>Disabled</button>
      <button role="tab" class="c-tab-heading c-tab-heading--active">Active</button>
      <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--brand">Brand</button>
      <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--info">Info</button>
      <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--warning">Warning</button>
      <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--success">Success</button>
      <button role="tab" class="c-tab-heading c-tab-heading--active c-tab-heading--error">Error</button>
    </div>
  </div>
  <div role="tabpanel" class="c-tabs__tab">This is tab one</div>
  <div hidden class="c-tabs__tab">This is tab two</div>
</div>`}
        />
      </page-template>
    );
  }
}

import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-badges',
})
export class ComponentsBadges {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          They're useful when you want to add additional info. Like a version number of a project or for status messages
          for individual items.
        </p>
        <blaze-demo
          language="html"
          code={`<blaze-badge>default</blaze-badge>
<blaze-badge type="brand">brand</blaze-badge>
<blaze-badge type="info">info</blaze-badge>
<blaze-badge type="warning">warning</blaze-badge>
<blaze-badge type="success">success</blaze-badge>
<blaze-badge type="error">error</blaze-badge>
<br />
<br />
<blaze-badge rounded>default</blaze-badge>
<blaze-badge rounded type="brand">brand</blaze-badge>
<blaze-badge rounded type="info">info</blaze-badge>
<blaze-badge rounded type="warning">warning</blaze-badge>
<blaze-badge rounded type="success">success</blaze-badge>
<blaze-badge rounded type="error">error</blaze-badge>
<br />
<br />
<blaze-badge ghost rounded>default</blaze-badge>
<blaze-badge ghost rounded type="brand">brand</blaze-badge>
<blaze-badge ghost rounded type="info">info</blaze-badge>
<blaze-badge ghost rounded type="warning">warning</blaze-badge>
<blaze-badge ghost rounded type="success">success</blaze-badge>
<blaze-badge ghost rounded type="error">error</blaze-badge>`}
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
              <td class="c-table__cell">The color of the badge</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">rounded: boolean</td>
              <td class="c-table__cell">Toggle the rounded borders</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">ghost: boolean</td>
              <td class="c-table__cell">Toggle ghost mode</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">CSS</h2>
        <blaze-demo language="html" code={`<span class="c-badge">34 unread messages</span>`} />
        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <p class="c-paragraph">Badges come as default, brand, info, warning, success and error</p>
        <p class="c-paragraph">To use, add the color modifier class:</p>

        <blaze-demo
          language="html"
          code={`<span class="c-badge">Default</span>
<span class="c-badge c-badge--brand">Brand</span>
<span class="c-badge c-badge--info">Info</span>
<span class="c-badge c-badge--warning">Warning</span>
<span class="c-badge c-badge--success">Success</span>
<span class="c-badge c-badge--error">Error</span>`}
        />

        <h2 id="rounded" class="c-heading u-xlarge">
          Rounded
        </h2>

        <p class="c-paragraph">
          Make your badges rounded with the <code class="u-code">.c-badge--rounded</code> modifier.
        </p>

        <blaze-demo
          language="html"
          code={`<span class="c-badge c-badge--rounded">Default</span>
<span class="c-badge c-badge--rounded c-badge--brand">Brand</span>
<span class="c-badge c-badge--rounded c-badge--info">Info</span>
<span class="c-badge c-badge--rounded c-badge--warning">Warning</span>
<span class="c-badge c-badge--rounded c-badge--success">Success</span>
<span class="c-badge c-badge--rounded c-badge--error">Error</span>`}
        />

        <h2 id="ghost" class="c-heading u-xlarge">
          Ghost
        </h2>

        <p class="c-paragraph">
          Remove your badges bodies with the <code class="u-code">.c-badge--ghost</code> modifier.
        </p>

        <blaze-demo
          language="html"
          code={`<span class="c-badge c-badge--rounded c-badge--ghost c-badge">Default</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--brand">Brand</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--info">Info</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--warning">Warning</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--success">Success</span>
<span class="c-badge c-badge--rounded c-badge--ghost c-badge--error">Error</span>`}
        />
      </page-template>
    );
  }
}

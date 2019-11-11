import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-divider',
})
export class ComponentsDivider {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">When you want to visually separate sections of the page.</p>

        <blaze-demo
          language="html"
          code={`<blaze-divider>Hello, world</blaze-divider>
<blaze-divider type="dashed">Dashed</blaze-divider>
<blaze-divider type="dotted">Dotted</blaze-divider>`}
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
              <td class="c-table__cell">changes the dividing line to either dashed or dotted</td>
            </tr>
          </tbody>
        </table>
      </page-template>
    );
  }
}

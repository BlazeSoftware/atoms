import { Component, Prop } from '@stencil/core';

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

        <blaze-divider>Demo</blaze-divider>

        <p class="c-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget neque mollis, sodales nulla ut, porta
          urna. Vivamus gravida placerat metus ac malesuada. Donec convallis dolor in ex tristique, luctus tempus dui
          sollicitudin. Suspendisse enim urna, auctor ac viverra eget, venenatis non massa. Nulla magna est, ullamcorper
          eget feugiat ac, condimentum id diam. Cras tempor felis sit amet facilisis sollicitudin. Ut posuere malesuada
          feugiat. Morbi ex ex, pretium sit amet dolor eget, malesuada gravida est. Nullam id malesuada massa, ac
          facilisis elit. Nullam ut metus sit amet nisi finibus mollis. Praesent augue felis, feugiat placerat aliquam
          ut, ultrices sit amet dolor. Phasellus porta ligula nec sapien tempus commodo. Pellentesque hendrerit aliquet
          ornare. Integer nec tempus quam, vitae bibendum lectus. Suspendisse vestibulum pulvinar neque at scelerisque.
          Suspendisse accumsan dolor vitae nulla commodo, volutpat commodo nunc bibendum.
        </p>

        <blaze-divider type="dashed">Code example</blaze-divider>

        <blaze-demo demo={false} language="html" code={`<blaze-divider>Hello, world</blaze-divider>`} />

        <h2 class="c-heading">Attributes</h2>

        <table class="c-table c-table--condensed">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Attribute</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">type &lt;dashed | dotted></td>
              <td class="c-table__cell">changes the dividing line</td>
            </tr>
          </tbody>
        </table>
      </page-template>
    );
  }
}

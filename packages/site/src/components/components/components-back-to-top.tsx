import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-back-to-top',
})
export class ComponentsBackToTop {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Provides a back to top shortcut on long pages.</p>

        <blaze-demo
          language="html"
          demo={false}
          code={`<blaze-back-to-top position="left|center">
  <button class="c-button c-button--info">Go back to top</button>
</blaze-back-to-top>`}
        />

        <blaze-back-to-top position="center">
          <button class="c-button c-button--info">Go back to top</button>
        </blaze-back-to-top>

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
              <td class="c-table__cell">position: string</td>
              <td class="c-table__cell">Position the button to the 'left' or 'center'. Default is 'right'.</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Events</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">backtotop: void</td>
              <td class="c-table__cell">Raises an event when the button is clicked.</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Demo...</h2>

        <p class="c-paragraph">Scroll down this page to make the back to top appear.</p>

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
        <p>
          Integer ut magna ac velit pharetra molestie. Nullam vestibulum est mattis, posuere augue id, suscipit nulla.
          Praesent vestibulum sapien hendrerit, sodales elit et, eleifend est. Aliquam ornare iaculis diam, commodo
          iaculis erat consectetur a. Quisque ut porta est. Mauris vulputate est eu auctor vestibulum. Vestibulum velit
          libero, cursus vel viverra et, fringilla et est. Donec nibh ipsum, finibus eu urna sed, ullamcorper
          sollicitudin velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sit amet bibendum nunc, ut iaculis tellus.
          Aenean ornare velit vel venenatis scelerisque. Ut ac elit enim. Nulla nec congue ex. Cras nulla ligula,
          porttitor non pulvinar fermentum, hendrerit sit amet neque.
        </p>
        <p>
          Etiam pulvinar suscipit metus, at lobortis erat eleifend id. Suspendisse scelerisque sem et orci rhoncus
          posuere. Vivamus faucibus mi et feugiat elementum. Nulla tempor, ligula non ullamcorper condimentum, lorem
          lorem sagittis tortor, at interdum tellus nunc elementum purus. Nulla tincidunt augue nibh. Ut et augue a ex
          pretium sodales. Pellentesque quam neque, tincidunt eu fringilla nec, volutpat eget risus.
        </p>
        <p>
          Fusce sit amet arcu sodales, vestibulum quam vel, lacinia mauris. Mauris ut placerat libero, eu gravida
          lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia felis vel nibh blandit, in
          vestibulum nisl congue. Integer ac dignissim nisi, id vehicula tellus. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. In posuere vitae metus in fermentum.
        </p>
        <p>
          Quisque venenatis ut eros at posuere. Etiam pulvinar, ipsum eu interdum vestibulum, arcu urna dapibus lorem,
          quis volutpat tortor enim sed leo. Donec dapibus lacinia purus. Nullam ac porttitor ligula. Fusce aliquet
          mauris tortor, id euismod neque tempus vel. Fusce luctus ex et volutpat pretium. Nulla varius justo quis
          aliquam accumsan.
        </p>
        <p>
          More Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget neque mollis, sodales nulla ut,
          porta urna. Vivamus gravida placerat metus ac malesuada. Donec convallis dolor in ex tristique, luctus tempus
          dui sollicitudin. Suspendisse enim urna, auctor ac viverra eget, venenatis non massa. Nulla magna est,
          ullamcorper eget feugiat ac, condimentum id diam. Cras tempor felis sit amet facilisis sollicitudin. Ut
          posuere malesuada feugiat. Morbi ex ex, pretium sit amet dolor eget, malesuada gravida est. Nullam id
          malesuada massa, ac facilisis elit. Nullam ut metus sit amet nisi finibus mollis. Praesent augue felis,
          feugiat placerat aliquam ut, ultrices sit amet dolor. Phasellus porta ligula nec sapien tempus commodo.
          Pellentesque hendrerit aliquet ornare. Integer nec tempus quam, vitae bibendum lectus. Suspendisse vestibulum
          pulvinar neque at scelerisque. Suspendisse accumsan dolor vitae nulla commodo, volutpat commodo nunc bibendum.
        </p>
      </page-template>
    );
  }
}

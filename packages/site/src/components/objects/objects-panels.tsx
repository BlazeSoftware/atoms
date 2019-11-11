import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'objects-panels',
})
export class ObjectsPanels {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          A panel can be a very useful piece of layout, it provides a manageable scrollable space within the existing
          structure of your page.
        </p>

        <blaze-demo
          language="html"
          code={`<blaze-panel height="350">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget neque mollis, sodales nulla ut, porta urna. Vivamus gravida placerat metus ac malesuada. Donec convallis dolor in ex tristique, luctus tempus dui sollicitudin. Suspendisse enim urna, auctor ac viverra eget, venenatis non massa. Nulla magna est, ullamcorper eget feugiat ac, condimentum id diam. Cras tempor felis sit amet facilisis sollicitudin. Ut posuere malesuada feugiat. Morbi ex ex, pretium sit amet dolor eget, malesuada gravida est. Nullam id malesuada massa, ac facilisis elit. Nullam ut metus sit amet nisi finibus mollis. Praesent augue felis, feugiat placerat aliquam ut, ultrices sit amet dolor. Phasellus porta ligula nec sapien tempus commodo. Pellentesque hendrerit aliquet ornare. Integer nec tempus quam, vitae bibendum lectus. Suspendisse vestibulum pulvinar neque at scelerisque. Suspendisse accumsan dolor vitae nulla commodo, volutpat commodo nunc bibendum. Integer ut magna ac velit pharetra molestie. Nullam vestibulum est mattis, posuere augue id, suscipit nulla. Praesent vestibulum sapien hendrerit, sodales elit et, eleifend est. Aliquam ornare iaculis diam, commodo iaculis erat consectetur a. Quisque ut porta est. Mauris vulputate est eu auctor vestibulum. Vestibulum velit libero, cursus vel viverra et, fringilla et est. Donec nibh ipsum, finibus eu urna sed, ullamcorper sollicitudin velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sit amet bibendum nunc, ut iaculis tellus. Aenean ornare velit vel venenatis scelerisque. Ut ac elit enim. Nulla nec congue ex. Cras nulla ligula, porttitor non pulvinar fermentum, hendrerit sit amet neque. Etiam pulvinar suscipit metus, at lobortis erat eleifend id. Suspendisse scelerisque sem et orci rhoncus posuere. Vivamus faucibus mi et feugiat elementum. Nulla tempor, ligula non ullamcorper condimentum, lorem lorem sagittis tortor, at interdum tellus nunc elementum purus. Nulla tincidunt augue nibh. Ut et augue a ex pretium sodales. Pellentesque quam neque, tincidunt eu fringilla nec, volutpat eget risus. Fusce sit amet arcu sodales, vestibulum quam vel, lacinia mauris. Mauris ut placerat libero, eu gravida lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia felis vel nibh blandit, in vestibulum nisl congue. Integer ac dignissim nisi, id vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere vitae metus in fermentum. Quisque venenatis ut eros at posuere. Etiam pulvinar, ipsum eu interdum vestibulum, arcu urna dapibus lorem, quis volutpat tortor enim sed leo. Donec dapibus lacinia purus. Nullam ac porttitor ligula. Fusce aliquet mauris tortor, id euismod neque tempus vel. Fusce luctus ex et volutpat pretium. Nulla varius justo quis aliquam accumsan.
</blaze-panel>`}
        />

        <h2 class="c-heading">CSS</h2>
        <h2 class="c-heading u-xlarge">Basic Panel</h2>
        <p class="c-paragraph u-text--loud">Scroll the below content...</p>

        <blaze-demo
          language="html"
          code={`<div class="o-panel-container" style="height: 350px">
  <div class="o-panel">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget neque mollis, sodales nulla ut, porta urna. Vivamus gravida placerat metus ac malesuada. Donec convallis dolor in ex tristique, luctus tempus dui sollicitudin. Suspendisse enim urna, auctor ac viverra eget, venenatis non massa. Nulla magna est, ullamcorper eget feugiat ac, condimentum id diam. Cras tempor felis sit amet facilisis sollicitudin. Ut posuere malesuada feugiat. Morbi ex ex, pretium sit amet dolor eget, malesuada gravida est. Nullam id malesuada massa, ac facilisis elit. Nullam ut metus sit amet nisi finibus mollis. Praesent augue felis, feugiat placerat aliquam ut, ultrices sit amet dolor. Phasellus porta ligula nec sapien tempus commodo. Pellentesque hendrerit aliquet ornare. Integer nec tempus quam, vitae bibendum lectus. Suspendisse vestibulum pulvinar neque at scelerisque. Suspendisse accumsan dolor vitae nulla commodo, volutpat commodo nunc bibendum. Integer ut magna ac velit pharetra molestie. Nullam vestibulum est mattis, posuere augue id, suscipit nulla. Praesent vestibulum sapien hendrerit, sodales elit et, eleifend est. Aliquam ornare iaculis diam, commodo iaculis erat consectetur a. Quisque ut porta est. Mauris vulputate est eu auctor vestibulum. Vestibulum velit libero, cursus vel viverra et, fringilla et est. Donec nibh ipsum, finibus eu urna sed, ullamcorper sollicitudin velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sit amet bibendum nunc, ut iaculis tellus. Aenean ornare velit vel venenatis scelerisque. Ut ac elit enim. Nulla nec congue ex. Cras nulla ligula, porttitor non pulvinar fermentum, hendrerit sit amet neque. Etiam pulvinar suscipit metus, at lobortis erat eleifend id. Suspendisse scelerisque sem et orci rhoncus posuere. Vivamus faucibus mi et feugiat elementum. Nulla tempor, ligula non ullamcorper condimentum, lorem lorem sagittis tortor, at interdum tellus nunc elementum purus. Nulla tincidunt augue nibh. Ut et augue a ex pretium sodales. Pellentesque quam neque, tincidunt eu fringilla nec, volutpat eget risus. Fusce sit amet arcu sodales, vestibulum quam vel, lacinia mauris. Mauris ut placerat libero, eu gravida lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia felis vel nibh blandit, in vestibulum nisl congue. Integer ac dignissim nisi, id vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere vitae metus in fermentum. Quisque venenatis ut eros at posuere. Etiam pulvinar, ipsum eu interdum vestibulum, arcu urna dapibus lorem, quis volutpat tortor enim sed leo. Donec dapibus lacinia purus. Nullam ac porttitor ligula. Fusce aliquet mauris tortor, id euismod neque tempus vel. Fusce luctus ex et volutpat pretium. Nulla varius justo quis aliquam accumsan.
  </div>
</div>`}
        />
      </page-template>
    );
  }
}

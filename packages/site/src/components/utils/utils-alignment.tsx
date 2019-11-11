import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-alignment',
})
export class UtilsAlignment {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Alignment of content, whether it's horizontal or vertical, or both.</p>

        <p class="c-paragraph">
          <span class="c-badge c-badge--secondary">Tip:</span> Give your
          <code class="u-code">.u-center-block</code> element some height. If you don't your content will appear to only
          align horizontally.
        </p>

        <h2 id="centered" class="c-heading u-xlarge">
          Centered
        </h2>

        <blaze-demo
          language="html"
          code={`<div class="u-center-block fixed-height-demo">
  <div class="u-center-block__content">Hello Blaze</div>
</div>`}
        />

        <h2 id="vertical" class="c-heading u-xlarge">
          Vertical
        </h2>

        <blaze-demo
          language="html"
          code={`<div class="u-center-block fixed-height-demo">
  <div class="u-center-block__content u-center-block__content--vertical">Hello Blaze</div>
</div>`}
        />

        <h2 id="horizontal" class="c-heading u-xlarge">
          Horizontal
        </h2>

        <blaze-demo
          language="html"
          code={`<div class="u-center-block fixed-height-demo">
    <div class="u-center-block__content u-center-block__content--horizontal">Hello Blaze</div>
  </div>`}
        />

        <h2 id="centered-absolutely" class="c-heading u-xlarge">
          Centered Absolutely
        </h2>

        <p class="c-paragraph">
          To position an element perfectly in the center of a relative container use the{' '}
          <code class="u-code">.u-absolute-center</code> block.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="u-center-block fixed-height-demo">
    <div class="u-absolute-center">Hello Blaze</div>
  </div>`}
        />

        <h2 id="centered-text" class="c-heading u-xlarge">
          Centered Text
        </h2>

        <p class="c-paragraph">
          Use <code class="u-code">.u-centered</code> to apply <code class="u-code">text-align: center;</code> to an
          element.
        </p>

        <blaze-demo
          language="html"
          code={`<div class="u-center-block fixed-height-demo">
    <div class="u-centered">Hello Blaze</div>
  </div>`}
        />
      </page-template>
    );
  }
}

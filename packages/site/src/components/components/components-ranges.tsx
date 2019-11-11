import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-ranges',
})
export class ComponentsRanges {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Some people call these "sliders".</p>

        <h2 class="c-heading u-xlarge">Basic Range</h2>

        <blaze-demo language="html" code={`<input type="range" class="c-range">`} />

        <h2 id="colors" class="c-heading u-xlarge">
          Colors
        </h2>

        <blaze-demo
          language="html"
          code={`<input type="range" class="c-range">
<input type="range" class="c-range c-range--brand">
<input type="range" class="c-range c-range--info">
<input type="range" class="c-range c-range--warning">
<input type="range" class="c-range c-range--success">
<input type="range" class="c-range c-range--error">
<input type="range" class="c-range" disabled>`}
        />
      </page-template>
    );
  }
}

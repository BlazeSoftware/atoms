import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-tooltips',
})
export class ComponentsTooltips {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          A pure CSS tooltip. <strong class="u-text--loud">Hover over the badge below.</strong>
        </p>

        <blaze-demo
          language="html"
          code={`<span class="c-badge c-badge--brand c-tooltip c-tooltip--right" aria-label="This is a tooltip, hello">Hover over me...</span>`}
        />
      </page-template>
    );
  }
}

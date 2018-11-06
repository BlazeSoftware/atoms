import { Component, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'components-counter',
})
export class ComponentsCounter {
  @Prop()
  name: string;

  @State()
  transferComplete: boolean = false;

  @Listen('complete')
  onComplete() {
    this.transferComplete = true;
  }

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">When you want to display a number with a bit more flare than usual.</p>

        <blaze-counter class="u-super u-text--mono" start={120} value={0} duration={10} decimals={2} delay={2000}>
          <span slot="prefix">&pound;</span>
          <span slot="suffix" class="u-text--quiet u-xsmall">
            {' '}
            in bank account
          </span>
        </blaze-counter>

        <blaze-alerts position="bottomright">
          {this.transferComplete && (
            <blaze-alert open dismissible type="success">
              Transfer complete...
            </blaze-alert>
          )}
        </blaze-alerts>

        <blaze-demo
          demo={false}
          language="html"
          code={`<blaze-counter start="120"
               value="0"
               duration="10"
               decimals="2"
               delay="2000">
  <span slot="prefix">&pound;</span>
  <span slot="suffix"> in bank account</span>
</blaze-counter>`}
        />
      </page-template>
    );
  }
}

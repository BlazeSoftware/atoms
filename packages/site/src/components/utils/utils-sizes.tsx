import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-sizes',
})
export class UtilsSizes {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          A set of sizes to make things bigger or smaller. Add one of these utility classes to a component and it will
          grow in size.
        </p>

        <blaze-demo
          language="css"
          demo={false}
          code={`.u-xsmall
.u-small
.u-medium
.u-large
.u-xlarge
.u-super`}
        />

        <div class="u-letter-box u-letter-box-small">
          <div class="c-badge c-badge--brand u-xsmall">.u-xsmall</div>
        </div>
        <div class="u-letter-box u-letter-box-small">
          <div class="c-badge c-badge--brand u-small">.u-small</div>
        </div>
        <div class="u-letter-box u-letter-box-small">
          <div class="c-badge c-badge--brand u-medium">.u-medium</div>
        </div>
        <div class="u-letter-box u-letter-box-small">
          <div class="c-badge c-badge--brand u-large">.u-large</div>
        </div>
        <div class="u-letter-box u-letter-box-small">
          <div class="c-badge c-badge--brand u-xlarge">.u-xlarge</div>
        </div>
        <div class="u-letter-box u-letter-box-small">
          <div class="c-badge c-badge--brand u-super">.u-super</div>
        </div>
      </page-template>
    );
  }
}

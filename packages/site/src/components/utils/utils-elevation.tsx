import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-elevation'
})
export class UtilsElevation {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Consistent box-shadows for any element.
        </p>

        <h2 id="letter-boxes" class="c-heading u-xlarge">Levels</h2>
        <p class="c-paragraph">
          Available levels:
        </p>
        <blaze-demo language="css" demo={false} code={`.u-high
.u-higher
.u-highest`}/>

        <div class="o-grid o-grid--wrap u-centered">
          <div class="o-grid__cell u-letter-box-large">
            <div class="c-avatar u-super"></div>
          </div>
          <div class="o-grid__cell u-letter-box-large">
            <div class="c-avatar u-super u-high"></div>
          </div>
          <div class="o-grid__cell u-letter-box-large">
            <div class="c-avatar u-super u-higher"></div>
          </div>
          <div class="o-grid__cell u-letter-box-large">
            <div class="c-avatar u-super u-highest"></div>
          </div>
        </div>

      </page-template>
    );
  }
}

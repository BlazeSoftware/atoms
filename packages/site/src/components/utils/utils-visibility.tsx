import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-visibility'
})
export class UtilsVisibility {
  @Prop() name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p slot="intro" class="c-paragraph">
          Blaze comes with a set of visibility utils that should cover all your display and visibility needs.
        </p>

        <h2 id="display" class="c-heading u-xlarge">
          Display
        </h2>

        <blaze-demo language="css" demo={false} code={`.u-display-none
.u-display-initial
.u-display-inline
.u-display-inline-block
.u-display-block
.u-display-table
.u-display-table-cell
.u-display-flex
.u-display-inline-flex`}/>

        <h2 id="visibility" class="c-heading u-xlarge">
          Visibility
        </h2>

        <p class="c-paragraph">
          The visible utils changes the <code class="u-code">visible: visible|hidden</code> property is CSS.
        </p>

        <blaze-demo language="css" demo={false} code={`.u-visible
.u-invisible
.u-visually-hidden`}/>

      </page-template>
    );
  }
}

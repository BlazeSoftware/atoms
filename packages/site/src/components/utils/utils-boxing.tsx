import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'utils-boxing',
})
export class UtilsBoxing {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">A complete set of padded cells. Just for you.</p>

        <h2 id="letter-boxes" class="c-heading u-xlarge">
          Letter Boxes
        </h2>
        <p class="c-paragraph">
          Letter boxes provide padding to the <span class="u-text--loud">top</span> and{' '}
          <span class="u-text--loud">bottom</span> of a given element.
        </p>
        <p class="c-paragraph">Available letter box sizes:</p>
        <blaze-demo
          language="css"
          demo={false}
          code={`.u-letter-box-super
.u-letter-box-xlarge
.u-letter-box-large
.u-letter-box-medium
.u-letter-box-small
.u-letter-box-xsmall
.u-letter-box-tiny
.u-letter-box-none`}
        />

        <h2 id="pillar-boxes" class="c-heading u-xlarge">
          Pillar Boxes
        </h2>
        <p class="c-paragraph">
          Pillar boxes provide padding to the <span class="u-text--loud">left</span> and{' '}
          <span class="u-text--loud">right</span> of a given element.
        </p>
        <p class="c-paragraph">Available pillar box sizes:</p>
        <blaze-demo
          language="css"
          demo={false}
          code={`.u-pillar-box-super
.u-pillar-box-xlarge
.u-pillar-box-large
.u-pillar-box-medium
.u-pillar-box-small
.u-pillar-box-xsmall
.u-pillar-box-tiny
.u-pillar-box-none`}
        />

        <h2 id="window-boxes" class="c-heading u-xlarge">
          Window Boxes
        </h2>
        <p class="c-paragraph">
          Window boxes provide padding to the <span class="u-text--loud">all sides</span> of a given element.
        </p>
        <p class="c-paragraph">Available box sizes:</p>
        <blaze-demo
          language="css"
          demo={false}
          code={`.u-window-box-super
.u-window-box-xlarge
.u-window-box-large
.u-window-box-medium
.u-window-box-small
.u-window-box-xsmall
.u-window-box-tiny
.u-window-box-none`}
        />
      </page-template>
    );
  }
}

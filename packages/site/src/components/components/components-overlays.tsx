import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-overlays',
})
export class ComponentsOverlays {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">
          Overlays are used in a lot of other components to blackout the background context of the page.
        </p>

        <h2 class="c-heading u-xlarge">Basic Overlay</h2>

        <blaze-demo language="html" classes="modal-demo" code={`<div class="c-overlay c-overlay--visible"></div>`} />

        <h2 id="variations" class="c-heading u-xlarge">
          Variations
        </h2>

        <h3 id="dismissible" class="c-heading u-large u-text--mono">
          .c-overlay--visible
        </h3>

        <p class="c-paragraph">
          Overlays are by default hidden. To make the visible use the <code class="u-code">.c-overlay--visible</code>{' '}
          modifier.
        </p>

        <h3 id="dismissible" class="c-heading u-large u-text--mono">
          .c-overlay--dismissible
        </h3>

        <p class="c-paragraph">
          To give the sense that you can click on an overlay to make it disappear give it the{' '}
          <code class="u-code">.c-overlay--dismissible</code> modifier.
        </p>

        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<div class="c-overlay c-overlay--visible c-overlay--dismissible"></div>`}
        />

        <h3 id="transparent" class="c-heading u-large u-text--mono">
          .c-overlay--transparent
        </h3>

        <p class="c-paragraph">
          Overlays don't necessarily need to be visible, they can appear transparent to provide functionality but no
          visual cues. If so use the <code class="u-code">.c-overlay--transparent</code> modifier.
        </p>

        <blaze-demo
          language="html"
          classes="modal-demo"
          code={`<div class="c-overlay c-overlay--visible c-overlay--dismissible c-overlay--transparent"></div>`}
        />

        <h3 id="fullpage" class="c-heading u-large u-text--mono">
          .c-overlay--fullpage
        </h3>

        <p class="c-paragraph">
          You can make overlays cover the entire page by adding the <code class="u-code">.c-overlay--fullpage</code>{' '}
          modifier. The overlay will remain in a fixed position behind the content you want to promote.
        </p>
      </page-template>
    );
  }
}

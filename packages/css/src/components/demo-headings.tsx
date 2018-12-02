import { Component } from '@stencil/core';

@Component({
  tag: 'demo-headings',
})
export class Headings {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Headings</h2>
        <h1 class="c-heading u-super">Super</h1>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <h2 class="c-heading u-xlarge">xLarge</h2>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <h3 class="c-heading u-large">Large</h3>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <h4 class="c-heading u-medium">Medium</h4>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <h5 class="c-heading u-small">Small</h5>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <h6 class="c-heading u-xsmall">xSmall</h6>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <p class="u-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        <h1 class="c-heading">
          Page heading
          <span class="c-heading__sub">Sub-header</span>
          <div class="c-heading__sub">Sub-header</div>
        </h1>
        <div class="u-xsmall">
          <h1 class="c-heading u-xlarge">xLarge inside xSmall</h1>
        </div>
        <div class="u-small">
          <h1 class="c-heading u-large">Large inside Small</h1>
        </div>
        <div class="u-large">
          <h1 class="c-heading u-small">Small inside Large</h1>
        </div>
        <div class="u-xlarge">
          <h1 class="c-heading u-xsmall">xSmall inside xLarge</h1>
        </div>
      </section>
    );
  }
}

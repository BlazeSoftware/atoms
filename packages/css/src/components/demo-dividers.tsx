import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-dividers',
})
export class Dividers {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Dividers</h2>
        <p class="u-paragraph">
          Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat
        </p>
        <hr class="c-divider" />
        <p class="u-paragraph">
          Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat
        </p>
        <div class="c-divider">
          <span class="c-divider__content">Hello, world</span>
        </div>
        <p class="u-paragraph">
          Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat
        </p>
        <div class="c-divider c-divider--dashed">
          <span class="c-divider__content">Hello, world</span>
        </div>
        <p class="u-paragraph">
          Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat
        </p>
        <div class="c-divider c-divider--dotted">
          <span class="c-divider__content">Hello, world</span>
        </div>
        <p class="u-paragraph">
          Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat
        </p>
      </section>
    );
  }
}

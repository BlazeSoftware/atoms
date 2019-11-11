import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-overlays',
})
export class Overlays {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Overlays</h2>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible c-overlay--black" />
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible c-overlay--white" />
        </div>
      </section>
    );
  }
}

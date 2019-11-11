import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-images',
})
export class Images {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Images</h2>
        <img class="o-image" src="//placehold.it/1024x963/3B6DC6/FFF" alt="random image" />
      </section>
    );
  }
}

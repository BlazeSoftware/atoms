import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-menus',
})
export class Menus {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Menus</h2>
        <div class="c-card c-card--menu" style={{ width: '240px' }}>
          <div class="c-card__control">Item 1</div>
          <div class="c-card__control">Item 2</div>
          <div class="c-card__control">Item 3</div>
          <div class="c-card__control">Item 4</div>
          <div class="c-card__control">Item 5</div>
          <div class="c-card__control">Item 6</div>
          <div class="c-card__control">Item 7</div>
          <div class="c-card__control">Item 8</div>
        </div>
      </section>
    );
  }
}

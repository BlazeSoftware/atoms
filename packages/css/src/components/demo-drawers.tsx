import { Component } from '@stencil/core';

@Component({
  tag: 'demo-drawers',
})
export class Drawers {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Drawers</h2>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <aside class="o-drawer u-highest o-drawer--top o-drawer--visible">
            <div class="c-card">
              <header class="c-card__header">
                <h2 class="c-heading">
                  Heading
                  <div class="c-heading__sub">Sub-heading</div>
                </h2>
              </header>
              <div class="c-card__body">
                To make a contribution to the world by making tools for the mind that advance humankind.
              </div>
              <footer class="c-card__footer">
                <div class="c-input-group">
                  <button class="c-button c-button--block c-button--ghost c-button--info">Buy</button>
                  <button class="c-button c-button--block c-button--ghost c-button--info">Buy</button>
                  <button class="c-button c-button--block c-button--ghost c-button--info">Buy</button>
                </div>
              </footer>
            </div>
          </aside>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <aside class="o-drawer u-highest o-drawer--left o-drawer--visible">
            <div class="c-card">
              <img class="o-image" src="http://placehold.it/1024x963/3B6DC6/FFF" />
              <header class="c-card__header">
                <h2 class="c-heading">
                  Heading
                  <div class="c-heading__sub">Sub-heading</div>
                </h2>
              </header>
              <div class="c-card__body">
                To make a contribution to the world by making tools for the mind that advance humankind.
              </div>
              <footer class="c-card__footer c-card__footer--block">
                <div class="c-input-group">
                  <button class="c-button c-button--block c-button--success">Yes</button>
                  <button class="c-button c-button--block c-button--error">No</button>
                </div>
              </footer>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

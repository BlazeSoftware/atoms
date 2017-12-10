import { Component } from '@stencil/core';

@Component({
  tag: 'blaze-card'
})

export class Card {

  render() {
    return (
      <div class="c-text c-card">
        <slot name="image" />
        <header class="c-card__header">
          <slot name="heading" />
        </header>
        <div class="c-card__body">
          <slot name="body" />
        </div>
        <footer class="c-card__footer">
          <slot name="footer" />
        </footer>
      </div>
    );
  }
}

import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-card',
})
export class Card {
  render() {
    return (
      <div class="c-card">
        <slot />
      </div>
    );
  }
}

import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-card-header',
})
export class CardHeader {
  render() {
    return (
      <header class="c-card__header">
        <slot />
      </header>
    );
  }
}

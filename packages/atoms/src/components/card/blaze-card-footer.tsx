import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-card-footer',
})
export class CardFooter {
  render() {
    return (
      <footer class="c-card__footer">
        <slot />
      </footer>
    );
  }
}

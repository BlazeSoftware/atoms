import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-address',
})
export class Address {
  render() {
    return (
      <address class="c-address">
        <slot />
      </address>
    );
  }
}

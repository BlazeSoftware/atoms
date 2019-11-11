import { h, Component } from '@stencil/core';

@Component({
  tag: 'blaze-address-heading',
})
export class AddressHeading {
  render() {
    return (
      <span class="c-address__heading">
        <slot />
      </span>
    );
  }
}

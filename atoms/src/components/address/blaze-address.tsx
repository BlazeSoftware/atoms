import { Component } from '@stencil/core';

@Component({
  tag: 'blaze-address'
})

export class Address {

  render() {
    return (
      <address class="c-text c-address">
        <slot />
      </address>
    );
  }
}

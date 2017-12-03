import { Component } from '@stencil/core';

@Component({
  tag: 'demo-app',
  styleUrl: '../../scss/dist/blaze.min.css',
})

export class DemoApp {

  render() {
    return (
      <slot />
    );
  }
}

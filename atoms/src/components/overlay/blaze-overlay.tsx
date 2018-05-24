import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-overlay'
})
export class Overlay {

  @Prop() open: boolean;

  render() {
    const isOpenClass = this.open ? 'c-overlay--visible' : '';

    return (
      <div aria-hidden class={`c-overlay ${isOpenClass}`}></div>
    );
  }
}

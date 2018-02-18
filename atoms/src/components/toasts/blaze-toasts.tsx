import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-toasts'
})
export class Toasts {

  @Prop() position: string = 'topright';

  render() {
    return (
      <div class={`c-alerts c-alerts--${this.position}`}>
        <slot/>
      </div>
    );
  }
}

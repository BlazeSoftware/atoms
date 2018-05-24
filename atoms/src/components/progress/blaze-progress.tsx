import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-progress'
})
export class Progress {

  @Prop() rounded: boolean;
  @Prop() size: string = '';

  render() {
    const sizeClass = this.size ? `u-${this.size}` : '';
    const roundedClass = this.rounded ? `c-progress--rounded` : '';

    return (
      <div class={`c-progress ${roundedClass} ${sizeClass}`}>
        <slot />
      </div>
    );
  }
}

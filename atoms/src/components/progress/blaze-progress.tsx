import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-progress'
})

export class Progress {

  @Prop() type: string = ''
  @Prop() percentage: string;
  @Prop() rounded: boolean;
  @Prop() size: string = '';

  render() {
    const typeClass = this.type ? `c-progress__bar--${this.type}` : '';
    const sizeClass = this.size ? `u-${this.size}` : '';
    const roundedClass = this.rounded ? `c-progress--rounded` : '';

    return (
      <div class={`c-progress ${roundedClass} ${sizeClass}`}>
        <div class={`c-progress__bar ${typeClass}`} style={{width:`${this.percentage}%`}}>
          <slot/>
        </div>
      </div>
    );
  }
}

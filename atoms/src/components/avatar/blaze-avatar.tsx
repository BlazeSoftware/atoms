import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-avatar'
})
export class Avatar {

  @Prop() size: string = '';
  @Prop() src: string;
  @Prop() src2: string;
  @Prop() text: string;

  render() {
    if (!this.src && !this.text) return;

    const sizeClass = this.size.length > 0 ? `u-${this.size}` : '';

    return (
      <div class={`c-text c-avatar ${sizeClass}`} data-text={this.text}>
        {this.src && <img class="c-avatar__img" src={this.src} />}
        {this.src2 && <img class="c-avatar__img" src={this.src2} />}
      </div>
    );
  }
}

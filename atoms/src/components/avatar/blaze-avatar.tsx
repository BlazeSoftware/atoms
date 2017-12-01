import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-avatar'
})
export class Avatar {

  @Prop() size: string = '';
  @Prop() src: string;
  @Prop() text: string;

  render() {
    if (!this.src && !this.text) return;

    let sizeClass = '';

    if (this.size.length > 0) {
      sizeClass = `u-${this.size}`;
    }

    const classes = `c-text c-avatar ${sizeClass}`;

    return (
      <div class={classes} data-text={this.text}>
        {this.src && <img class="c-avatar__img" src={this.src} />}
      </div>
    );
  }
}

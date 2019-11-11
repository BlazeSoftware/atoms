import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-avatar',
})
export class Avatar {
  @Prop()
  size: string = '';

  @Prop()
  src: string;

  @Prop()
  src2: string;

  @Prop()
  alt: string;

  @Prop()
  alt2: string;

  @Prop()
  text: string;

  render() {
    if (!this.src && !this.text) return;

    const sizeClass = this.size.length > 0 ? `u-${this.size}` : '';

    return (
      <div class={`c-avatar ${sizeClass}`} data-text={this.text}>
        {this.src && <img class="c-avatar__img" alt={this.alt} src={this.src} />}
        {this.src2 && <img class="c-avatar__img" alt={this.alt2} src={this.src2} />}
      </div>
    );
  }
}

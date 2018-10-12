import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-button',
})
export class Button {
  @Prop()
  type: string;

  @Prop()
  size: string;

  @Prop()
  full: boolean;

  @Prop()
  ghost: boolean;

  @Prop()
  rounded: boolean;

  @Prop()
  active: boolean;

  @Prop()
  href: string;

  render() {
    const sizeClass = this.size ? `u-${this.size}` : '';
    const fullClass = this.full ? `c-button--block` : '';
    const roundedClass = this.rounded ? `c-button--rounded` : '';
    const activeClass = this.active ? `c-button--active` : '';

    let typeClass = this.type ? `c-button--${this.type}` : '';
    let ghostClass = this.ghost ? `c-button--ghost` : '';
    if (this.ghost && this.type) {
      typeClass = '';
      ghostClass += `-${this.type}`;
    }

    const cssClasses = `c-button ${typeClass} ${sizeClass} ${fullClass} ${ghostClass} ${roundedClass} ${activeClass}`;

    if (this.href) {
      return (
        <a href={this.href} class={cssClasses}>
          <slot />
        </a>
      );
    }

    return (
      <button class={cssClasses}>
        <slot />
      </button>
    );
  }
}

import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-button'
})
export class Button {

  @Element() private element: HTMLElement;
  @Prop() type: string;
  @Prop() size: string;
  @Prop() full: boolean;
  @Prop() ghost: boolean;
  @Prop() rounded: boolean;
  @Prop() active: boolean;

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

    // switch HTML tag to "a" if "href" is specified
    let Tag = 'button';
    let aAtts = {};
    const attributes: any = this.element.attributes;
    if (attributes.hasOwnProperty('href')) {
      Tag = 'a';
      aAtts = {
        href: attributes.href.value || '',
      };
    }

    return (
      <Tag class={`c-button ${typeClass} ${sizeClass} ${fullClass} ${ghostClass} ${roundedClass} ${activeClass}`}
           {...aAtts}>
        <slot />
      </Tag>
    );
  }
}

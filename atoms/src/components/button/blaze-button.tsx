import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-button'
})
export class Button {

  @Element() private element: HTMLElement;
  @Prop() tag: string = 'button';
  @Prop() type: string;
  @Prop() size: string;
  @Prop() full: boolean;
  @Prop() ghost: boolean;
  @Prop() rounded: boolean;
  @Prop() active: boolean;

  render() {
    const Tag = this.tag;
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

    // in case of tag="input"
    let inputAtts = {};
    if (this.tag === 'input') {
      const attributes: any = this.element.attributes;
      inputAtts = {
        type: (attributes.inputType ? attributes.inputType.value : false) || 'button',
        value: attributes.value.value,
      };
    }

    return (
      <Tag class={`c-button ${typeClass} ${sizeClass} ${fullClass} ${ghostClass} ${roundedClass} ${activeClass}`}
           {...inputAtts}
      >
        <slot />
      </Tag>
    );
  }
}

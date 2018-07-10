import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-input-group'
})
export class InputGroup {

  @Prop() tag: string = 'div';
  @Prop() stacked: boolean;
  @Prop() rounded: boolean;
  @Prop() edge: string;

  render() {
    const Tag = this.tag;
    const stackedClass = this.stacked ? `c-input-group--stacked` : '';

    let roundedClass = this.rounded ? `c-input-group--rounded` : '';
    if (this.rounded && this.edge) {
      roundedClass += `-${this.edge}`;
    }

    return (
      <Tag class={`c-input-group ${stackedClass} ${roundedClass}`}>
        <slot />
      </Tag>
    );
  }
}

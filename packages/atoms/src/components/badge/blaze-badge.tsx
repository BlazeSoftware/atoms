import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-badge',
})
export class Badge {
  @Prop()
  type: string;

  @Prop()
  rounded: boolean;

  @Prop()
  ghost: boolean;

  render() {
    const typeClass = this.type ? `c-badge--${this.type}` : '';
    const roundedClass = this.rounded ? `c-badge--rounded` : '';
    const ghostClass = this.ghost ? `c-badge--ghost` : '';

    return (
      <span class={`c-badge ${typeClass} ${roundedClass} ${ghostClass}`}>
        <slot />
      </span>
    );
  }
}

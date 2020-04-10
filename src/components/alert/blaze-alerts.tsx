import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-alerts',
})
export class Alerts {
  @Prop()
  position: string;

  render() {
    const positionClass = this.position ? `c-alerts--${this.position}` : '';

    return (
      <div role="presentation" class={`c-alerts ${positionClass}`}>
        <slot />
      </div>
    );
  }
}

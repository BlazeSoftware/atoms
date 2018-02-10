import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-tab'
})
export class Tab {
  @Prop() header: string;
  @Prop() disabled: boolean;
  @Prop() open: boolean;

  render() {
    const openClass = this.open ? 'c-tabs__tab--active' : '';

    return (
      <div class={`c-tabs__tab ${openClass}`}>
        <slot />
      </div>
    );
  }
}

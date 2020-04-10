import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-tab',
})
export class Tab {
  @Prop()
  header: string;

  @Prop()
  disabled: boolean;

  @Prop()
  open: boolean;

  @Prop()
  type: string;

  render() {
    const typeClass = this.type ? `c-tabs__tab--${this.type}` : '';

    return (
      <div role="tabpanel" hidden={!this.open} class={`c-tabs__tab ${typeClass}`}>
        <slot />
      </div>
    );
  }
}

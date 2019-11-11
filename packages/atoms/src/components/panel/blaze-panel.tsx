import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-panel',
})
export class Panel {
  @Prop()
  height: number = 0;

  render() {
    return (
      <div class="o-panel-container" style={{ height: `${this.height}px` }}>
        <div class="o-panel">
          <slot />
        </div>
      </div>
    );
  }
}

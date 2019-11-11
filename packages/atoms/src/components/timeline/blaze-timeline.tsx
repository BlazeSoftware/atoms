import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-timeline',
})
export class Timeline {
  @Prop()
  alternate: boolean;
  @Prop()
  loading: boolean;

  render() {
    const alternateClass = this.alternate ? 'o-timeline--alternate' : '';
    const loadingClass = this.loading ? 'o-timeline--loading' : '';

    return (
      <ol class={`o-timeline ${alternateClass} ${loadingClass}`}>
        <slot />
      </ol>
    );
  }
}

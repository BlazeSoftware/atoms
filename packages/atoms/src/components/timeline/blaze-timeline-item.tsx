import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-timeline-item',
})
export class TimelineItem {
  @Prop()
  type: string;
  @Prop()
  last: boolean;
  @Prop()
  left: boolean;
  @Prop()
  loading: boolean;

  render() {
    const typeClass = this.type ? `c-timeline-item--${this.type}` : '';
    const lastClass = this.last ? `c-timeline-item--last` : '';
    const leftClass = this.left ? `c-timeline-item--left` : '';
    const loadingClass = this.loading && !this.last ? `c-timeline-item--loading` : '';

    return (
      <li class={`c-timeline-item ${typeClass} ${leftClass} ${lastClass} ${loadingClass}`}>
        <div class="c-timeline-item__body">
          <slot />
        </div>
      </li>
    );
  }
}

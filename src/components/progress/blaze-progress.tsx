import { h, Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-progress',
})
export class Progress {
  @Element()
  private element: HTMLElement;

  @Prop()
  rounded: boolean;

  @Prop()
  timer: boolean;

  @Prop()
  size: string;

  @Event({ eventName: 'changed' })
  onChanged: EventEmitter;

  @Listen('progressbar')
  onChangeBar(ev) {
    const progress = this.element.children[0];
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChanged.emit({ idx, ...value });
  }

  render() {
    const sizeClass = this.size ? `u-${this.size}` : '';
    const roundedClass = this.rounded ? `c-progress--rounded` : '';
    const timerClass = this.timer ? `c-progress--timer` : '';

    return (
      <div class={`c-progress ${roundedClass} ${timerClass} ${sizeClass}`}>
        <slot />
      </div>
    );
  }
}

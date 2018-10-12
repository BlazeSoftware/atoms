import { Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'blaze-progress'
})
export class Progress {
  @Element()
  private element: HTMLElement;

  @Prop()
  rounded: boolean;

  @Prop()
  size: string = '';

  @Event()
  onChange: EventEmitter;

  @Listen('onChangeBar')
  onChangeBar(ev) {
    const progress = this.element.children[0];
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChange.emit({ idx, ...value });
  }

  render() {
    const sizeClass = this.size ? `u-${this.size}` : '';
    const roundedClass = this.rounded ? `c-progress--rounded` : '';

    return (
      <div class={`c-progress ${roundedClass} ${sizeClass}`}>
        <slot />
      </div>
    );
  }
}

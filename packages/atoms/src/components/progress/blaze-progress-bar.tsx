import { Component, Event, EventEmitter, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'blaze-progress-bar',
})
export class ProgressBar {
  @Prop()
  type: string;

  @Prop()
  value: number;

  @Prop()
  min: number = 0;

  @Prop()
  max: number = 100;

  @Event({ eventName: 'changeBar' })
  onChange: EventEmitter;

  @Watch('value')
  watchValue(value: boolean, oldValue: boolean) {
    this.onChange.emit({ value, oldValue });
  }

  render() {
    const typeClass = this.type ? `c-progress__bar--${this.type}` : '';
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;

    return (
      <div
        role="progressbar"
        aria-valuenow={this.value}
        aria-valuemin={this.min}
        aria-valuemax={this.max}
        style={{ width: `${percentage}%` }}
        class={`c-progress__bar ${typeClass}`}>
        <slot />
      </div>
    );
  }
}

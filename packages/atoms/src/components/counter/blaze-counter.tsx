import { Component, Element, Event, EventEmitter, Prop, Method } from '@stencil/core';
import CountUp from './CountUp';

@Component({
  tag: 'blaze-counter',
})
export class Counter {
  @Element()
  el: HTMLElement;

  @Prop()
  start: number = 0;

  @Prop()
  value: number;

  @Prop()
  decimals: number = 0;

  @Prop()
  duration: number = 4;

  @Prop()
  delay: number = 500;

  @Prop()
  easing: boolean = true;

  @Prop()
  grouping: boolean = true;

  @Prop()
  separator: string = ',';

  @Prop()
  decimal: string = '.';

  @Event({ eventName: 'complete' })
  onComplete: EventEmitter;

  animation: any;
  timer: any;

  componentDidLoad() {
    const target = this.el.querySelector('.c-counter__amount');
    this.animation = new CountUp(target, this.start, this.value, this.decimals, this.duration, {
      useEasing: this.easing,
      useGrouping: this.grouping,
      separator: this.separator,
      decimal: this.decimal,
    });

    this.timer = setTimeout(() => {
      this.animation.start(() => {
        this.onComplete.emit();
      });
    }, this.delay);
  }

  componentDidUnload() {
    clearTimeout(this.timer);
  }

  @Method()
  reset() {
    this.animation.reset();
  }

  @Method()
  update(value: number) {
    this.animation.update(value);
  }

  @Method()
  restart() {
    this.animation.reset();
    this.animation.start();
  }

  @Method()
  pauseResume() {
    this.animation.pauseResume();
  }

  render() {
    return (
      <div class="c-counter">
        <span class="c-counter__prefix">
          <slot name="prefix" />
        </span>
        <span class="c-counter__amount" />
        <span class="c-counter__suffix">
          <slot name="suffix" />
        </span>
      </div>
    );
  }
}

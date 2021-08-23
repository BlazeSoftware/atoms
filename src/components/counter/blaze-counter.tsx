import { h, Component, Element, Event, EventEmitter, Prop, Method } from '@stencil/core';
import CountUp from './CountUp';

@Component({
  tag: 'blaze-counter',
})
export class Counter {
  @Element()
  el: HTMLElement;

  @Prop()
  autoStart: boolean;

  @Prop()
  startValue: number = 0;

  @Prop()
  endValue: number;

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

  @Event({ eventName: 'finish' })
  onFinish: EventEmitter;

  animation: any;
  timer: any;

  componentDidLoad() {
    const target = this.el.querySelector('.c-counter__amount');
    this.animation = new CountUp(target, this.startValue, this.endValue, this.decimals, this.duration, {
      useEasing: this.easing,
      useGrouping: this.grouping,
      separator: this.separator,
      decimal: this.decimal,
    });

    if (this.autoStart) {
      this.start();
    }
  }

  @Method()
  async start() {
    this.timer = setTimeout(() => {
      this.animation.start(() => {
        this.onFinish.emit();
      });
    }, this.delay);
  }

  disconnectedCallback() {
    clearTimeout(this.timer);
  }

  @Method()
  async reset() {
    this.animation.reset();
  }

  @Method()
  async update(value: number) {
    this.animation.update(value);
  }

  @Method()
  async restart() {
    this.animation.reset();
    this.animation.start();
  }

  @Method()
  async pauseResume() {
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

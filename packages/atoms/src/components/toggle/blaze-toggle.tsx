import { Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-toggle',
})
export class Toggle {
  @Prop()
  type: string;

  @Prop()
  toggled: boolean = false;

  @State()
  _toggled: boolean = false;

  @Event()
  onToggle: EventEmitter;

  componentDidLoad() {
    this._toggled = this.toggled;
  }

  @Method()
  async isToggled() {
    return this._toggled;
  }

  toggle(e) {
    e.preventDefault();
    this._toggled = !this._toggled;
    this.onToggle.emit(this._toggled);
  }

  render() {
    const type = this.type ? `c-toggle--${this.type}` : '';

    return (
      <label class={`c-toggle ${type}`} onClick={(e) => this.toggle(e)}>
        <input type="checkbox" aria-checked={this._toggled.toString()} checked={this._toggled} />
        <div class="c-toggle__track">
          <div class="c-toggle__handle" />
        </div>
        <slot />
      </label>
    );
  }
}

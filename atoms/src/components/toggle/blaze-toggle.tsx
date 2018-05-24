import { Component, Prop, Method, State } from '@stencil/core';

@Component({
  tag: 'blaze-toggle'
})
export class Toggle {

  @Prop() type: string;
  @Prop() toggled: boolean = false;
  @State() _toggled: boolean = false;

  componentDidLoad() {
    this._toggled = this.toggled;
  }

  @Method()
  isToggled() {
    return this._toggled;
  }

  toggle(e) {
    e.preventDefault();
    this._toggled = !this._toggled;
  }

  render() {
    const type = this.type ? `c-toggle--${this.type}` : '';

    return (
      <label class={`c-toggle ${type}`} onClick={(e) => this.toggle(e)}>
        <input type="checkbox" aria-checked={this._toggled} checked={this._toggled} />
        <div class="c-toggle__track">
          <div class="c-toggle__handle"></div>
        </div>
        <slot />
      </label>
    );
  }
}

import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-alert'
})
export class Alert {

  @Prop() type: string;
  @Prop() dismissible: boolean = false;
  @Prop() open: boolean = false;
  @State() _isOpen: boolean = false;

  @Method()
  close() {
    this._isOpen = false;
  }

  @Method()
  show() {
    this._isOpen = true;
  }

  @Method()
  isOpen() {
    return this._isOpen;
  }

  componentWillLoad() {
    this._isOpen = this.open;
  }

  render() {
    const isOpenClass = !this._isOpen ? 'u-display-none' : '';

    return (
      <div class={`c-alert c-alert--${this.type} ${isOpenClass}`}>
        {
          this.dismissible &&
          <button class="c-button c-button--close" onClick={() => this.close()}>
            &times;
          </button>
        }
        <slot />
      </div>
    );
  }
}
